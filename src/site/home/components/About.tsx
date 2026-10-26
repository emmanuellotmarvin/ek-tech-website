'use client'

import Icon from '@/components/Icon'
import { localizePath, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

import pill1 from '@/assets/images/about/pill-1.jpg'
import pill2 from '@/assets/images/about/pill-2.jpg'
import pill3 from '@/assets/images/about/pill-3.jpg'
import phoneScreen from '@/assets/images/mockups/phone-books.png'
import strip1 from '@/assets/images/gallery/strip-1.jpg'
import strip2 from '@/assets/images/gallery/strip-2.jpg'
import strip3 from '@/assets/images/gallery/strip-3.jpg'
import strip4 from '@/assets/images/gallery/strip-4.jpg'
import strip5 from '@/assets/images/gallery/strip-5.jpg'
import strip6 from '@/assets/images/gallery/strip-6.jpg'
import strip7 from '@/assets/images/gallery/strip-7.jpg'
import strip8 from '@/assets/images/gallery/strip-8.jpg'
import cloud01 from '@/assets/images/locations/cloud-01.webp'
import cloud02 from '@/assets/images/locations/cloud-02.webp'
import cloud04 from '@/assets/images/locations/cloud-04.webp'

export type AboutImage = {
  image: StaticImageData
  animationClass: string
  // Extra classes for this photo only (e.g. zoom in when the subject is small)
  className?: string
}

export type MarqueeItem = {
  bgColorClass: string
  icon: string
  image: StaticImageData
}

// Photos that fade one into the next inside the title pill (3-image cycle)
const aboutImages: AboutImage[] = [
  { image: pill1, animationClass: 'animate-deviceSwap', className: 'scale-[2.2]' },
  { image: pill2, animationClass: 'animate-deviceSwap2' },
  { image: pill3, animationClass: 'animate-deviceSwap3' },
]

const marqueeItems: MarqueeItem[] = [
  { bgColorClass: 'bg-primary-8', icon: 'tabler:building-store', image: strip1 },
  { bgColorClass: 'bg-primary-1', icon: 'tabler:motorbike', image: strip2 },
  { bgColorClass: 'bg-primary-2', icon: 'tabler:settings', image: strip3 },
  { bgColorClass: 'bg-primary-3', icon: 'tabler:world', image: strip4 },
  { bgColorClass: 'bg-primary-7', icon: 'tabler:calendar-event', image: strip5 },
  { bgColorClass: 'bg-primary-6', icon: 'tabler:receipt', image: strip6 },
  { bgColorClass: 'bg-primary-5', icon: 'tabler:device-mobile-dollar', image: strip7 },
  { bgColorClass: 'bg-primary-4', icon: 'tabler:chart-bar', image: strip8 },
]

type AboutProps = {
  lang: Locale
  t: Dictionary['home']['about']
}

const About = ({ lang, t }: AboutProps) => {
  return (
    <section className="relative pb-20 text-center lg:pt-6 lg:pb-50">
      <div className="container">
        <div className="md:mb-15">
          <h2 className="mx-auto mb-10 max-w-5xl text-center text-3xl leading-tight font-medium tracking-tight text-default-950 md:text-5xl">
            {t.titleStart}{' '}
            <span className="relative inline-flex h-6.5 w-12.5 overflow-hidden rounded-full align-middle md:h-11 md:w-22.5">
              {aboutImages.map((img, idx) => (
                <Image key={idx} src={img.image} className={`absolute inset-0 h-full w-full object-cover ${img.animationClass} ${img.className ?? ''}`} alt="" />
              ))}
            </span>{' '}
            {t.titleMiddle}{' '}
            {t.titleBeforeIcon}&nbsp;
            <span className="mx-1 inline-flex align-middle">
              <Icon icon="fluent-emoji:gear" className="size-7.5 md:size-15" />
            </span>{' '}
            {t.titleEnd}
          </h2>

          <p className="text-default-500 mb-3.5 text-base font-medium md:text-xl lg:text-2xl">{t.subtitle}</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            {t.hashtags.map((tag, idx) => (
              <span key={idx} className="bg-default-200 text-default-800 rounded-full px-3.5 py-2 text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center overflow-hidden py-12 md:py-24">
          <div className="bg-body-bg pointer-events-none absolute inset-y-0 -left-20 z-20 hidden w-37.5 blur-[20px] md:block"></div>
          <div className="bg-body-bg pointer-events-none absolute inset-y-0 -right-20 z-20 hidden w-37.5 blur-[30px] md:block"></div>

          <div className="mt-10 overflow-hidden py-6 md:mt-20">
            <div className="animate-marquee-left flex w-max gap-5">
              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-surface p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Icon icon={item.icon} className="size-3.5 text-white md:size-6" />
                      </div>
                      <span className="text-default-800 text-center text-sm font-medium md:text-base">{t.marqueeLabels[idx]}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>

              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-surface p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Icon icon={item.icon} className="size-3.5 text-white md:size-6" />
                      </div>
                      <span className="text-default-800 text-center text-sm font-medium md:text-base">{t.marqueeLabels[idx]}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden pb-6 md:mb-20">
            <div className="animate-marquee-right flex w-max gap-5">
              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-surface p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Icon icon={item.icon} className="size-3.5 text-white md:size-6" />
                      </div>
                      <span className="text-default-800 text-center text-sm font-medium md:text-base">{t.marqueeLabels[idx]}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>

              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-surface p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Icon icon={item.icon} className="size-3.5 text-white md:size-6" />
                      </div>
                      <span className="text-default-800 text-center text-sm font-medium md:text-base">{t.marqueeLabels[idx]}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
            {/* App screenshot inside a phone frame (same size as the original phone image) */}
            <div className="h-88 w-42 rounded-[28px] border-[3px] border-white/10 bg-[#0f1115] p-1.5 shadow-2xl md:h-175 md:w-85 md:rounded-[48px] md:p-2.5">
              <Image src={phoneScreen} sizes="(min-width: 768px) 320px, 160px" className="h-full w-full rounded-[22px] object-cover object-top md:rounded-[38px]" alt="" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-4 flex flex-col items-center gap-y-5 px-6 md:mt-12">
          <div className="border-default-200 flex items-center gap-2 rounded-full border bg-surface px-2.5 py-2 md:px-5">
            <Icon icon="tabler:circle-check-filled" className="text-primary-1 size-3.5" />
            <p className="text-default-500 text-sm font-medium">
              <span className="font-medium text-default-950">{t.badge}</span>
            </p>
          </div>

          <p className="text-default-700 mb-2.5 w-xs text-base leading-normal md:w-xl md:text-lg">{t.text}</p>

          <div className="flex w-full flex-col justify-center gap-5 md:flex-row">
            <Link href={localizePath(lang, '/contact')} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary hover:bg-primary-dark px-8.5 text-white shadow-xl! transition-all duration-300 hover:scale-95">
              <div className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                <div className="flex h-14 items-center gap-3">
                  <Icon icon="tabler:file-invoice" className="size-5" />
                  <span className="font-normal">{t.quoteButton}</span>
                </div>
                <div className="absolute top-full flex h-14 items-center gap-3">
                  <Icon icon="tabler:file-invoice" className="size-5" />
                  <span className="font-normal">{t.quoteButton}</span>
                </div>
              </div>
            </Link>

            <a href="https://wa.me/258851903771" target="_blank" rel="noopener noreferrer" className="group bg-default-200 relative inline-flex items-center justify-center overflow-hidden rounded-full px-8.5 text-default-950 transition-all duration-300 hover:scale-95">
              <div className="relative flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                <div className="flex h-14 items-center gap-2.5">
                  <Icon icon="tabler:brand-whatsapp" className="size-5" />
                  <span className="font-normal">{t.whatsappButton}</span>
                </div>
                <div className="absolute top-full flex h-14 items-center gap-2.5">
                  <Icon icon="tabler:brand-whatsapp" className="size-5" />
                  <span className="font-normal">{t.whatsappButton}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <Image src={cloud04} loading="lazy" alt="Decoration Image" className="absolute inset-s-0 inset-e-0 -bottom-100 -z-5 h-148 w-full object-cover dark:opacity-10" />
        <Image src={cloud02} loading="lazy" alt="Decoration Image" className="absolute inset-e-0 -bottom-38 -z-5 h-75 dark:opacity-10" />
        <Image src={cloud01} loading="lazy" alt="Decoration Image" className="absolute inset-s-0 -bottom-48 -z-5 h-75 dark:opacity-10" />
      </div>
    </section>
  )
}

export default About
