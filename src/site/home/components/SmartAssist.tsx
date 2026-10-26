import Icon from '@/components/Icon'
import { processIcon, processMockups } from '@/config/process-mockups'
import { localizePath, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Image from 'next/image'
import Link from 'next/link'

import suggestionImage from '@/assets/images/workspace/suggestion-image.webp'

type SmartAssistProps = {
  lang: Locale
  t: Dictionary['home']['process']
}

const SmartAssist = ({ lang, t }: SmartAssistProps) => {
  const mockup = processMockups[lang]

  return (
    <section className="pb-25 lg:pb-50" id="comece-aqui">
      <div className="container">
        <div className="mb-20 grid grid-cols-1 items-center gap-7.5 md:grid-cols-2">
          <div>
            <span className="border-default-200 text-default-800 mb-2.5 inline-block rounded-full border bg-surface px-5 py-1.5 text-sm font-medium">{t.badge}</span>
            <h3 className="text-default-900 mb-2.5 text-3xl leading-tight font-medium tracking-tight md:text-4xl lg:text-5xl">
              {t.titleLine1}
              <br className="hidden md:block" />
              {t.titleLine2}
            </h3>
            <p className="text-default-500 mb-6 max-w-lg text-base leading-normal md:text-lg md:leading-relaxed">{t.text}</p>
            <div>
              <Link href={localizePath(lang, '/contact')} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary hover:bg-primary-dark px-8.5 text-white shadow-xl transition-all duration-300 hover:scale-95">
                <span className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                  <span className="flex h-14 items-center gap-3">
                    <span className="font-medium">{t.button}</span>
                  </span>
                  <span className="absolute top-full flex h-14 items-center gap-3">
                    <span className="font-medium">{t.button}</span>
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="group relative mx-auto flex h-100 w-full items-center justify-center overflow-hidden rounded-2xl shadow-2xl md:aspect-video lg:aspect-[4/3] lg:h-142 lg:max-w-4xl" style={{ backgroundImage: `url(${suggestionImage.src})` }}>
            <div className="absolute top-10 -right-16 transition-transform duration-700 ease-out md:top-20 lg:-right-24">
              <Image src={mockup.phone} alt="" className="h-auto -rotate-20 lg:w-xs" />
            </div>

            <div className="absolute top-12 left-4 z-30 hidden flex-col gap-4 md:top-20 lg:flex">
              <div className="animate-float">
                <Image src={mockup.steps[0]} alt="" className="w-48 md:w-64" />
              </div>
              <div className="animate-float">
                <Image src={mockup.steps[1]} alt="" className="ms-2 w-48 md:ms-4 md:w-64" />
              </div>
              <div className="animate-float">
                <Image src={mockup.steps[2]} alt="" className="w-48 md:w-64" />
              </div>
            </div>

            <div className="animate-pulse-slow absolute bottom-20 left-40 z-30 hidden lg:block">
              <div>
                <Image src={processIcon} alt="" className="size-18 rounded-2xl shadow-inner" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-2.5 md:gap-7.5 lg:grid-cols-4">
          <div className="group flex flex-col justify-end gap-y-6.5 rounded-2xl bg-surface p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-3 flex size-12.5 items-center justify-center rounded-full">
              <Icon icon="lucide:messages-square" className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">{t.steps[0].title}</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">{t.steps[0].text}</p>
            </div>
          </div>

          <div className="group flex flex-col justify-end gap-y-6.5 rounded-2xl bg-surface p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-7 flex size-12.5 items-center justify-center rounded-full">
              <Icon icon="lucide:clipboard-list" className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">{t.steps[1].title}</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">{t.steps[1].text}</p>
            </div>
          </div>

          <div className="group flex flex-col justify-end gap-y-6.5 rounded-2xl bg-surface p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-6 flex size-12.5 items-center justify-center rounded-full">
              <Icon icon="lucide:code" className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">{t.steps[2].title}</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">{t.steps[2].text}</p>
            </div>
          </div>

          <div className="group flex flex-col justify-end gap-y-6.5 rounded-2xl bg-surface p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-2 flex size-12.5 items-center justify-center rounded-full">
              <Icon icon="lucide:rocket" className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">{t.steps[3].title}</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">{t.steps[3].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartAssist
