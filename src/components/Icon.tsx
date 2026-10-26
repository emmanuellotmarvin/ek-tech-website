import collections from '@/assets/icons/icons.json'

type IconData = { body: string; width?: number; height?: number }
type IconCollection = {
  prefix: string
  icons: Record<string, IconData>
  aliases?: Record<string, { parent: string }>
  width?: number
  height?: number
}

// Icon data saved locally by `npm run icons`
const iconMap = new Map<string, { body: string; width: number; height: number }>()
for (const collection of collections as unknown as IconCollection[]) {
  const resolve = (name: string): IconData | undefined => collection.icons[name] ?? (collection.aliases?.[name] ? resolve(collection.aliases[name].parent) : undefined)
  const names = [...Object.keys(collection.icons), ...Object.keys(collection.aliases ?? {})]
  for (const name of names) {
    const data = resolve(name)
    if (!data) continue
    iconMap.set(`${collection.prefix}:${name}`, {
      body: data.body,
      width: data.width ?? collection.width ?? 16,
      height: data.height ?? collection.height ?? 16,
    })
  }
}

type IconProps = {
  icon: string
  className?: string
}

// Renders an icon as inline SVG in the page HTML, so it shows without JavaScript or network requests
const Icon = ({ icon, className }: IconProps) => {
  const data = iconMap.get(icon)
  if (!data) {
    if (process.env.NODE_ENV !== 'production') console.warn(`Icon "${icon}" not found. Run "npm run icons".`)
    return null
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${(data.width / data.height).toFixed(4).replace(/\.?0+$/, '')}em`}
      height="1em"
      viewBox={`0 0 ${data.width} ${data.height}`}
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: data.body }}
    />
  )
}

export default Icon
