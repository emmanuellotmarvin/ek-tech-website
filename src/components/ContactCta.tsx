import Icon from '@/components/Icon'
import { localizePath, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import cloud01 from '@/assets/images/locations/cloud-01.webp'
import cloud04 from '@/assets/images/locations/cloud-04.webp'
import deviceAndroid from '@/assets/images/workspace/device-android.png'
import deviceIphone from '@/assets/images/workspace/device-iphone.png'

export type DeviceSlide = {
  device: keyof Dictionary['cta']['devices']
  image: StaticImageData
  animationClass: string
}

// The same app on Android and on iPhone, fading from one to the other
const deviceSlides: DeviceSlide[] = [
  { device: 'android', image: deviceAndroid, animationClass: 'animate-pairSwap' },
  { device: 'iphone', image: deviceIphone, animationClass: 'animate-pairSwap2' },
]

// Font Awesome 6 icons, inlined so they render without loading anything
const platforms = [
  { device: 'android' as const, viewBox: '0 0 576 512', path: 'M420.55 301.93a24 24 0 1 1 24-24a24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24m273.7-144.48l47.94-83a10 10 0 1 0-17.27-10l-48.54 84.07a301.25 301.25 0 0 0-246.56 0l-48.54-84.07a10 10 0 1 0-17.27 10l47.94 83C64.53 202.22 8.24 285.55 0 384h576c-8.24-98.45-64.54-181.78-146.85-226.55' },
  { device: 'iphone' as const, viewBox: '0 0 384 512', path: 'M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8c-18.8-26.9-47.2-41.7-84.7-44.6c-35.5-2.8-74.3 20.7-88.5 20.7c-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2c25.2-.6 43-17.9 75.8-17.9c31.8 0 48.3 17.9 76.4 17.9c48.6-.7 90.4-82.5 102.6-119.3c-65.2-30.7-61.7-90-61.7-91.9m-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5c-24.1 1.4-52 16.4-67.9 34.9c-17.5 19.8-27.8 44.3-25.6 71.9c26.1 2 49.9-11.4 69.5-34.3' },
  { device: 'computer' as const, viewBox: '0 0 576 512', path: 'M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h176l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-69.3L336 416h176c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm448 64v224H64V64z' },
]

type ContactCtaProps = {
  lang: Locale
  t: Dictionary['cta']
}

const ContactCta = ({ lang, t }: ContactCtaProps) => {
  return (
    <section className="relative overflow-hidden pt-20 pb-8 lg:pt-30">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-7.5 md:grid-cols-3 md:gap-0">
          <div className="order-1 flex flex-col items-center text-center md:me-10 md:text-left lg:items-start">
            <h3 className="text-default-900 text-2xl font-medium tracking-tight lg:text-4xl">{t.title}</h3>

            <p className="text-default-600 mt-2.5 text-lg lg:mt-5">{t.text}</p>

            <div className="relative z-40 mt-3.5 flex flex-col gap-4 lg:mt-8">
              <Link href={localizePath(lang, '/contact')} className="group relative inline-flex overflow-hidden rounded-full bg-primary hover:bg-primary-dark px-3.5 text-white shadow-xl transition-all duration-300 hover:scale-95 lg:px-8.5">
                <span className="relative flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                  <span className="flex h-14 items-center gap-3">
                    <Icon icon="tabler:file-invoice" className="size-5" />
                    <span className="text-sm lg:text-base">{t.quoteButton}</span>
                  </span>
                  <span className="absolute top-full flex h-14 items-center gap-3">
                    <Icon icon="tabler:file-invoice" className="size-5" />
                    <span className="text-sm lg:text-base">{t.quoteButton}</span>
                  </span>
                </span>
              </Link>

              <a href="https://wa.me/258851903771" target="_blank" rel="noopener noreferrer" className="group bg-default-200 relative inline-flex overflow-hidden rounded-full px-3.5 text-default-950 transition-all duration-300 hover:scale-95 lg:px-8.5">
                <span className="relative flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                  <span className="flex h-14 items-center gap-2.5">
                    <Icon icon="tabler:brand-whatsapp" className="size-5" />
                    <span className="text-sm lg:text-base">{t.whatsappButton}</span>
                  </span>
                  <span className="absolute top-full flex h-14 items-center gap-2.5">
                    <Icon icon="tabler:brand-whatsapp" className="size-5" />
                    <span className="text-sm lg:text-base">{t.whatsappButton}</span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="order-3 flex justify-center md:order-2">
            <div className="relative z-10 w-full md:h-80 md:max-w-56 lg:h-156 lg:max-w-114">
              {deviceSlides.map((slide, idx) => (
                <Image key={idx} src={slide.image} alt={t.devices[slide.device]} className={`h-full w-full ${idx === 0 ? 'relative' : 'absolute inset-0'} ${slide.animationClass}`} />
              ))}
            </div>
          </div>

          <div className="order-2 flex flex-col items-center md:order-3 md:ms-10 lg:items-end">
            <div className="text-center md:text-start lg:max-w-xl">
              <h3 className="text-default-900 mb-2.5 text-2xl font-medium tracking-tight lg:mb-5 lg:text-4xl">{t.devicesTitle}</h3>

              <p className="text-default-600 mb-5 text-lg">{t.devicesText}</p>

              <div className="text-default-500 relative z-30 flex items-center justify-center gap-7.5 md:justify-start lg:gap-10">
                {platforms.map((platform) => (
                  <svg key={platform.device} viewBox={platform.viewBox} className="h-10 w-auto lg:h-14" fill="currentColor" role="img" aria-label={t.devices[platform.device]}>
                    <title>{t.devices[platform.device]}</title>
                    <path d={platform.path} />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-body-bg absolute top-auto -bottom-18 left-0 z-20 h-30 w-full blur-[20px] md:h-40 md:blur-[35px] lg:-bottom-30 lg:h-55"></div>
      </div>

      <Image src={cloud04} alt="" className="pointer-events-none absolute -bottom-12.5 -left-25 -z-20 h-72.5 w-218 dark:opacity-10" />

      <Image src={cloud01} alt="" className="pointer-events-none absolute inset-e-25 -bottom-25 -z-6 h-72.5 w-224 -translate-x-1/2 lg:z-10 dark:opacity-10" />

      <Image src={cloud04} alt="" className="pointer-events-none absolute inset-e-0 top-auto -bottom-50 z-0 h-87.5 w-full dark:opacity-10" />
    </section>
  )
}

export default ContactCta
