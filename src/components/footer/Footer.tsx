import Icon from '@/components/Icon'
import Logo from '@/components/Logo'
import { localizePath, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Link from 'next/link'

export type SocialLink = {
  link: string
  icon: string
}

const linkClassName = 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors'


const socialLinks: SocialLink[] = [
  { link: '', icon: 'tabler:brand-instagram' },
  { link: '', icon: 'tabler:brand-x-filled' },
  { link: '', icon: 'tabler:brand-linkedin-filled' },
  { link: '', icon: 'tabler:brand-facebook-filled' },
]

type FooterProps = {
  lang: Locale
  t: Dictionary['footer']
}

const Footer = ({ lang, t }: FooterProps) => {
  return (
    <footer className="bg-body-bg pt-20 pb-5 lg:pb-7.5">
      <div className="container">
        <div className="grid grid-cols-1 justify-between gap-7.5 md:grid-cols-4 md:gap-12.5 lg:gap-32">
          <div className="lg:col-span-2">
            <Link href={localizePath(lang, '/home')} className="mb-10 inline-block">
              <Logo className="h-11 text-3xl" />
            </Link>

            <div className="lg:max-w-md">
              <h2 className="mb-2.5 text-xl font-medium md:text-2xl">{t.newsletterTitle}</h2>
              <p className="text-default-500 mb-5 text-lg">{t.newsletterText}</p>

              <form className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
                <input type="email" placeholder={t.emailPlaceholder} required className="border-default-200 bg-default-200 text-default-900 placeholder:text-default-400 rounded-full border px-5 py-3 text-base transition-all focus:outline-none lg:w-lg!" />
                <button type="submit" className="bg-primary hover:bg-primary-dark w-full rounded-full px-8 py-3.5 font-medium whitespace-nowrap text-white transition-all hover:scale-95 md:w-auto">
                  {t.subscribe}
                </button>
              </form>
            </div>
          </div>

          <div>
            <h3 className="text-default-900 mb-5 text-base font-medium lg:mb-7.5">{t.quickLinksTitle}</h3>
            <div className="flex flex-col justify-end gap-2">
              {t.quickLinks.map((item, index) => (
                <Link key={index} href={localizePath(lang, item.link)} className={linkClassName}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-default-900 mb-5 text-base font-medium lg:mb-7.5">{t.otherLinksTitle}</h3>
            {t.otherLinks.map((item, index) => (
              <Link key={index} href={localizePath(lang, item.link)} className={linkClassName}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-default-200 mt-6 flex flex-col items-center justify-start gap-5 border-t pt-5 md:mt-8 md:flex-row md:justify-between md:gap-6 md:pt-7.5 lg:mt-16">
          <p className="text-default-600 text-base md:text-lg">
            © 2026 EK TECH, SU, LDA
          </p>

          <div className="flex items-center justify-start gap-2.5 md:justify-end">
            {socialLinks.map((item, index) => (
              <Link key={index} href={item.link} target="_blank" className="group bg-default-200 inline-flex size-9 items-center justify-center overflow-hidden rounded-full">
                <div className="relative size-4 overflow-hidden">
                  <Icon icon={item.icon} className="text-default-800 absolute inset-0 size-4 h-full w-full transition-transform duration-300 group-hover:-translate-y-[200%]" />
                  <Icon icon={item.icon} className="text-default-800 absolute inset-0 size-4 h-full w-full translate-y-[200%] transition-transform duration-300 group-hover:translate-y-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
