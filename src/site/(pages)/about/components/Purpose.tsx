import Icon from '@/components/Icon'
import { processIcon, processMockups } from '@/config/process-mockups'
import { localizePath, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Image from 'next/image'
import Link from 'next/link'

import purposePhoto from '@/assets/images/about/purpose.jpg'
import heroPresence from '@/assets/images/mockups/hero-presence.svg'

type PurposeProps = {
  lang: Locale
  t: Dictionary['about']['purpose']
}

const Purpose = ({ lang, t }: PurposeProps) => {
  const mockup = processMockups[lang]

  return (
    <section className="py-20 md:py-25 lg:py-50">
      <div className="container">
        <div className="grid items-center gap-7.5 md:grid-cols-2 lg:gap-15">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image src={purposePhoto} sizes="(min-width: 768px) 600px, 100vw" alt="" className="h-100 w-full object-cover md:h-125" />

              <div className="absolute inset-0 bg-black/45"></div>

              <div className="absolute lg:inset-s-10.5 inset-s-4 lg:top-24 md:top-36 top-20 flex flex-col lg:gap-y-4 gap-y-1">
                <Image src={mockup.steps[0]} alt="" className="md:w-58 w-46" />
                <Image src={mockup.steps[1]} alt="" className="md:w-58 w-46" />
                <Image src={mockup.steps[2]} alt="" className="md:w-58 w-46" />
                <Image src={processIcon} alt="" className="mx-auto size-18.75" />
              </div>
              <Image src={heroPresence} alt="" className="absolute lg:h-37 md:h-28 h-20 lg:top-11.5 top-4 lg:inset-e-15 inset-e-4" />
            </div>
          </div>

          <div className="space-y-3.5 lg:space-y-5">
            <span className="border-default-200 text-default-800 inline-block rounded-full border bg-surface px-5 py-1 text-sm font-medium md:py-1.5">{t.badge}</span>

            <h2 className="text-default-900 mb-3.5 text-2xl leading-tight font-medium tracking-tight md:text-4xl lg:text-[50px]">{t.title}</h2>

            <p className="text-default-600 mb-3.75 leading-tight md:mb-6 lg:w-md lg:text-lg">{t.text}</p>

            <div className="mb-5 space-y-2 lg:mb-12.5">
              {t.points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div>
                    <Icon icon="lucide:circle-check" className="text-primary-2 mt-1" />
                  </div>

                  <p className="text-default-800 text-lg font-medium">{point}</p>
                </div>
              ))}
            </div>

            <Link href={localizePath(lang, '/home#servicos')} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary hover:bg-primary-dark px-3.5 text-white shadow-xl! transition-all duration-300 hover:scale-95 md:px-8.5">
              <div className="relative inline-flex flex-col items-center text-nowrap transition-transform duration-300 group-hover:-translate-y-full">
                <div className="flex h-10.5 items-center gap-3 md:h-14">
                  <span className="text-sm font-medium md:text-base">{t.button}</span>
                </div>
                <div className="absolute top-full flex h-10.5 items-center gap-3 md:h-14">
                  <span className="text-sm font-medium md:text-base">{t.button}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Purpose
