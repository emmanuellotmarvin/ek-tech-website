// Collects every Iconify icon used in src/ and saves its data locally,
// so icons render without fetching from the Iconify API.
// Run after adding or changing icons: npm run icons

import { getIcons } from '@iconify/utils'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { extname, join } from 'node:path'

const require = createRequire(import.meta.url)
const SRC_DIR = 'src'
const OUTPUT = 'src/assets/icons/icons.json'

const listFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) return listFiles(path)
    return ['.ts', '.tsx'].includes(extname(entry.name)) ? [path] : []
  })

const loadSet = (prefix) => {
  try {
    return require(`@iconify/json/json/${prefix}.json`)
  } catch {
    return null
  }
}

// Group candidate "prefix:name" strings by prefix
const used = new Map()
for (const file of listFiles(SRC_DIR)) {
  const content = readFileSync(file, 'utf8')
  for (const [, prefix, name] of content.matchAll(/['"`]([a-z0-9-]+):([a-z0-9-]+)['"`]/g)) {
    if (!used.has(prefix)) used.set(prefix, new Set())
    used.get(prefix).add(name)
  }
}

const collections = []
const missing = []
for (const [prefix, names] of [...used].sort(([a], [b]) => a.localeCompare(b))) {
  const set = loadSet(prefix)
  // Skip strings that only look like icons (e.g. Tailwind classes such as "lg:col-span-2")
  if (!set) continue
  const sortedNames = [...names].sort()
  const collection = getIcons(set, sortedNames)
  if (!collection) {
    missing.push(...sortedNames.map((name) => `${prefix}:${name}`))
    continue
  }
  const found = new Set([...Object.keys(collection.icons), ...Object.keys(collection.aliases ?? {})])
  missing.push(...sortedNames.filter((name) => !found.has(name)).map((name) => `${prefix}:${name}`))
  collections.push(collection)
}

writeFileSync(OUTPUT, JSON.stringify(collections) + '\n')

const total = collections.reduce((sum, c) => sum + Object.keys(c.icons).length + Object.keys(c.aliases ?? {}).length, 0)
console.log(`Saved ${total} icons from ${collections.length} sets to ${OUTPUT}`)
if (missing.length) {
  console.warn(`Not found: ${missing.join(', ')}`)
  process.exitCode = 1
}
