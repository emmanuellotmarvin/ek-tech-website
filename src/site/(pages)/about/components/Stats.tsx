import Image from 'next/image'

import type { Dictionary } from '@/i18n/dictionaries/pt'

import cloud01 from '@/assets/images/locations/cloud-01.webp'
import cloud05 from '@/assets/images/locations/cloud-05.webp'
import globImage from '@/assets/images/locations/glob-image.png'

type StatItemType = {
  value: string
  suffix?: string
  colorClass: string
  colSpanClass?: string
}

const statsValues: StatItemType[] = [
  {
    value: '2026',
    colorClass: 'text-primary-8',
  },
  {
    value: '3',
    colorClass: 'text-primary-1',
  },
  {
    value: '3',
    colorClass: 'text-primary text-nowrap',
    colSpanClass: 'md:col-span-1 col-span-2',
  },
]

type StatsProps = {
  t: Dictionary['about']['stats']
}

const Stats = ({ t }: StatsProps) => {
  const statsData = statsValues.map((stat, idx) => ({ ...stat, ...t.items[idx] }))

  return (
    <section className="pb-20 md:pb-25 lg:pb-50">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-7.5 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-y-5 lg:gap-y-12.5">
            <div className="space-y-4">
              <span className="border-default-200 text-default-800 inline-block rounded-full border bg-surface px-5 py-1 text-sm font-medium md:py-1.5">{t.badge}</span>
              <h2 className="text-default-900 text-3xl leading-tight font-medium tracking-tight md:text-4xl lg:text-[50px]">
                {t.titleLine1}
                <br className="hidden lg:block" />
                {t.titleLine2}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-7.5 lg:grid-cols-1 lg:gap-10">
              {statsData.map((stat, idx) => (
                <div key={idx} className={`items-center gap-5 lg:flex lg:gap-7.5 ${stat.colSpanClass || ''}`}>
                  <div className="mb-2 min-w-25 text-center lg:mb-0 lg:text-start">
                    <span className={`text-2xl font-bold lg:text-4xl ${stat.colorClass}`}>{stat.value}</span>
                    {stat.suffix && <span className={`text-2xl font-bold lg:text-4xl ${stat.colorClass}`}>{stat.suffix}</span>}
                  </div>
                  <div className="bg-default-300 hidden h-16 w-px lg:block"></div>
                  <div className="text-center md:text-start">
                    <p className="text-default-900 mb-1.5 font-medium md:text-lg">{stat.title}</p>
                    <p className="text-default-500 text-sm">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-default-200 relative flex flex-col items-center justify-between overflow-hidden rounded-2xl md:min-h-125 lg:min-h-150">
            <div className="z-10 pt-12.5 pb-12.5 text-center lg:pb-8">
              <h3 className="text-primary-1 mb-3.75 text-4xl font-bold drop-shadow-[0_10px_15px_rgba(37,99,235,0.3)] md:text-5xl lg:text-[90px]">{t.highlight}</h3>
              <span className="border-default-200 text-default-800 inline-block rounded-full border bg-surface px-5 py-1 text-sm font-medium md:py-1.5">{t.highlightLabel}</span>
            </div>

            <div className="relative flex h-full w-full items-end">
              <Image src={globImage} alt="Globe" className="w-full object-cover" />

              <Image src={cloud01} className="absolute inset-e-0 -bottom-58 -left-50 z-20 w-full dark:opacity-10" alt="Clouds" />

              <Image src={cloud05} className="absolute -right-60 -bottom-45 z-20 w-full dark:opacity-10" alt="Clouds" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
