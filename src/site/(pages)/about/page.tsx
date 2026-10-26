import ContactCta from '@/components/ContactCta'
import PageHero from '@/components/PageHero'
import { isLocale, localizePath } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Mission from './components/Mission'
import Purpose from './components/Purpose'
import Stats from './components/Stats'

export const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> => {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const { meta } = await getDictionary(lang)
  return { title: meta.pages.about }
}

const Page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <PageHero badge={dict.about.hero.badge} title={dict.about.hero.title} buttonLabel={dict.about.hero.button} buttonHref={localizePath(lang, '/contact')} t={dict.pageHero} />
      <Mission t={dict.about.mission} />
      <Purpose lang={lang} t={dict.about.purpose} />
      <Stats t={dict.about.stats} />
      <ContactCta lang={lang} t={dict.cta} />
    </>
  )
}

export default Page
