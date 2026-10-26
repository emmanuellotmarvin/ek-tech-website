import '@/assets/css/style.css'
import appleIcon from '@/assets/images/brand/apple-icon.png'
import favicon from '@/assets/images/brand/favicon.png'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import type { Metadata } from 'next'
import { Google_Sans_Flex, Stack_Sans_Headline } from 'next/font/google'
import { notFound } from 'next/navigation'

const googleSansFlex = Google_Sans_Flex({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

const stackSansHeadline = Stack_Sans_Headline({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})



export const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> => {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const { meta } = await getDictionary(lang)

  return {
    title: {
      template: `%s | ${meta.title}`,
      default: meta.title,
    },
    icons: {
      icon: { url: favicon.src, type: 'image/png' },
      apple: appleIcon.src,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'EK Tech' }],
    robots: 'index, follow',
  }
}

// Runs before the page is painted, so a saved or system dark theme never flashes white
const themeScript = `(() => {
  try {
    const saved = localStorage.getItem('theme')
    const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', dark)
  } catch {}
})()`

const RootLayout = async ({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) => {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <html lang={lang === 'pt' ? 'pt-MZ' : 'en'} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`bg-body-bg ${googleSansFlex.variable} ${stackSansHeadline.variable}`} suppressHydrationWarning>
        <AppProvidersWrapper lang={lang} navbar={dict.navbar} footer={dict.footer}>
          {children}
        </AppProvidersWrapper>
      </body>
    </html>
  )
}

export default RootLayout
