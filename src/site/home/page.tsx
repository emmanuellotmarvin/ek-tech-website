import ContactCta from '@/components/ContactCta'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import About from './components/About'
import Faq from './components/Faq'
import Features from './components/Features'
import Feedback from './components/Feedback'
import Hero from './components/Hero'
import SmartAssist from './components/SmartAssist'
import Users from './components/Users'
import Work from './components/Work'

export const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> => {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const { meta } = await getDictionary(lang)
  return { title: meta.pages.home }
}

const Page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <Hero lang={lang} t={dict.home.hero} />
      <About lang={lang} t={dict.home.about} />
      <Features lang={lang} t={dict.home.services} />
      <Work t={dict.home.projects} />
      <Users t={dict.home.partners} />
      <Feedback t={dict.home.testimonials} />
      <SmartAssist lang={lang} t={dict.home.process} />
      <Faq lang={lang} t={dict.faq} />
      <ContactCta lang={lang} t={dict.cta} />
    </>
  )
}

export default Page
