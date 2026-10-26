import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContactFaq from './components/ContactFaq'
import ContactForm from './components/ContactForm'
import ReachUs from './components/ReachUs'

export const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> => {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const { meta } = await getDictionary(lang)
  return { title: meta.pages.contact }
}

const Page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <ContactForm t={dict.contact.form} />
      <ReachUs t={dict.contact.reachUs} />
      <ContactFaq t={dict.faq} />
    </>
  )
}

export default Page
