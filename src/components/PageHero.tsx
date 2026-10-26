import Icon from '@/components/Icon'
import PhoneFrame from '@/components/PhoneFrame'
import { logoBackgroundClass, partnerLogos } from '@/config/partners'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Image from 'next/image'
import Link from 'next/link'

import heroMain from '@/assets/images/about/hero-main.png'
import heroPhone from '@/assets/images/about/hero-phone.png'
import heroSide from '@/assets/images/about/hero-side.png'
import cloud01 from '@/assets/images/locations/cloud-01.webp'
import cloud04 from '@/assets/images/locations/cloud-04.webp'



// Repeated so the sliding row stays full while there are only a few partners
const partnerRow = [...partnerLogos, ...partnerLogos]

type PageHeroProps = {
  badge: string
  title: string
  description?: string
  buttonLabel: string
  buttonHref: string
  t: Dictionary['pageHero']
}

// Opening section shared by the inner pages (About, Pricing)
const PageHero = ({ badge, title, description, buttonLabel, buttonHref, t }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 md:pt-40 md:pb-25 lg:py-50">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
        <Image src={cloud04} alt="" className="absolute top-10 left-[-5%] w-1/3 blur-sm dark:opacity-10" />
        <Image src={cloud01} alt="" className="absolute bottom-20 left-0 w-1/4 dark:opacity-10" />
        <Image src={cloud04} alt="" className="absolute right-0 bottom-[-10%] w-full opacity-40 dark:opacity-10" />
      </div>

      <div className="relative z-10 container mx-auto mb-15 lg:mb-32">
        <div className="mb-8 max-w-md lg:mb-20 lg:max-w-xl">
          <span className="border-default-200 text-default-800 mb-2 inline-block rounded-full border bg-surface px-5 py-1 text-sm font-medium md:py-1.5 lg:mb-0">{badge}</span>

          <h1 className="text-default-900 text-[26px] font-medium tracking-tight md:text-[30px] lg:text-[70px]">{title}</h1>

          {description && <p className="text-default-600 mt-2.5 text-lg md:mt-5 lg:text-xl">{description}</p>}

          <div className="mt-2.5 flex flex-col items-start gap-5 md:mt-5 lg:mt-12 lg:flex-row lg:items-center lg:gap-7.5">
            <Link href={buttonHref} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary hover:bg-primary-dark px-3.5 text-white shadow-xl! transition-all duration-300 hover:scale-95 lg:px-8.5">
              <div className="relative inline-flex flex-col items-center text-nowrap transition-transform duration-300 group-hover:-translate-y-full">
                <div className="flex h-10.5 items-center gap-3 lg:h-14">
                  <span className="text-sm font-medium lg:text-base">{buttonLabel}</span>
                </div>
                <div className="absolute top-full flex h-10.5 items-center gap-3 lg:h-14">
                  <span className="text-sm font-medium lg:text-base">{buttonLabel}</span>
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2.5">
                {partnerLogos.map((partner) => (
                  <div key={partner.name} className={`border-default-800 flex size-10 items-center justify-center overflow-hidden rounded-full border-2 p-1 shadow-sm ${logoBackgroundClass[partner.background]}`}>
                    <Image src={partner.logo} sizes="40px" className="max-h-full w-auto object-contain" alt={partner.name} />
                  </div>
                ))}
                <div className="border-default-800 bg-default-50 text-default-800 inline-flex size-10 items-center justify-center rounded-full border-2 text-[8px] font-bold shadow-sm">{t.you}</div>
              </div>

              <div className="flex flex-col">
                <div className="flex gap-1.5">
                  <Icon icon="tabler:star-filled" className="text-primary-1 size-4" />
                  <Icon icon="tabler:star-filled" className="text-primary-1 size-4" />
                  <Icon icon="tabler:star-filled" className="text-primary-1 size-4" />
                  <Icon icon="tabler:star-filled" className="text-primary-1 size-4" />
                  <Icon icon="tabler:star-filled" className="text-primary-1 size-4" />
                </div>
                <p className="text-default-600 text-lg font-medium text-nowrap">{t.trustText}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-12 lg:gap-7.5">
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-2xl lg:rounded-3xl">
                <Image src={heroMain} alt="" className="h-60 w-full object-cover object-left-top lg:h-105" />
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative flex h-86 items-end justify-center overflow-visible rounded-4xl bg-gradient-to-b from-sky-500 to-cyan-100 md:h-60 lg:h-105">
                <Image src={heroSide} alt="" className="absolute inset-0 h-full w-full rounded-2xl object-cover object-left-top lg:rounded-3xl" />

                <div className="absolute lg:-top-[370px] lg:bottom-4 bottom-2 z-20">
                  <PhoneFrame
                    image={heroPhone}
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 256px, 144px"
                    className="h-[320px] w-[155.8px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)] md:h-140 md:w-68 lg:h-175 lg:w-85"
                    statusBarClassName="bg-[#323a47] text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-center">
          <span className="text-default-800 mb-5 block text-base lg:mb-7.5 lg:text-xl">{t.partnersTitle}</span>
        </div>

        <div className="relative overflow-hidden">
          <div className="from-body-bg pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r to-transparent"></div>

          <div className="from-body-bg pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l to-transparent"></div>

          <div className="animate-marquee flex gap-5 lg:gap-7.5">
            <div className="flex items-center gap-5 lg:gap-7.5">
              {partnerRow.map((partner, idx) => (
                <div key={idx} className={`border-default-200 flex h-14 shrink-0 items-center rounded-xl border px-5 lg:h-16 lg:px-6 ${logoBackgroundClass[partner.background]}`}>
                  <Image src={partner.logo} sizes="200px" className="h-8 w-auto object-contain lg:h-10" alt={partner.name} />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5 lg:gap-7.5">
              {partnerRow.map((partner, idx) => (
                <div key={idx} className={`border-default-200 flex h-14 shrink-0 items-center rounded-xl border px-5 lg:h-16 lg:px-6 ${logoBackgroundClass[partner.background]}`}>
                  <Image src={partner.logo} sizes="200px" className="h-8 w-auto object-contain lg:h-10" alt={partner.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
