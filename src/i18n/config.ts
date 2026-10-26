export const locales = ['pt', 'en'] as const
export type Locale = (typeof locales)[number]

// Portuguese is served without a prefix (/home), English under /en (/en/home)
export const defaultLocale: Locale = 'pt'

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value)

// Adds the language prefix to an internal link: ('en', '/contact') -> '/en/contact'
export const localizePath = (locale: Locale, path: string) => (locale === defaultLocale || !path.startsWith('/') ? path : `/${locale}${path}`)

// Removes the language prefix from a browser path: '/en/contact' -> '/contact'
export const stripLocale = (path: string) => path.replace(/^\/en(?=\/|$)/, '').replace(/\/+$/, '') || '/'

// Fills placeholders in a text: fillText('Olá, {name}', { name: 'Ana' }) -> 'Olá, Ana'
export const fillText = (text: string, values: Record<string, string | number>) => text.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match))
