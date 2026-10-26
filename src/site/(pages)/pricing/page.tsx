import ContactCta from '@/components/ContactCta'
import PageHero from '@/components/PageHero'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { getSaasSystems } from '@/config/pricing'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PricingFaq from './components/PricingFaq'
import PricingPlans from './components/PricingPlans'

export const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> => {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const { meta } = await getDictionary(lang)
  return { title: meta.pages.pricing }
}

const Page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <PageHero badge={dict.pricing.hero.badge} title={dict.pricing.hero.title} description={dict.pricing.hero.text} buttonLabel={dict.pricing.hero.button} buttonHref="#planos" t={dict.pageHero} />
      <PricingPlans lang={lang} t={dict.pricing.plans} saasSystems={getSaasSystems(lang)} />
      <ContactCta lang={lang} t={dict.cta} />
      <PricingFaq t={dict.pricing.faq} />
    </>
  )
}

export default Page
