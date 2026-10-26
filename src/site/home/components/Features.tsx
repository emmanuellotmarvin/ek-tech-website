import Icon from '@/components/Icon'
import { localizePath, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import bellImage from '@/assets/images/icons/bell-image.png'
import icon46 from '@/assets/images/icons/icon-46.svg'
import icon47 from '@/assets/images/icons/icon-47.svg'
import icon48 from '@/assets/images/icons/icon-48.svg'
import featureBg1 from '@/assets/images/locations/feature-01.webp'
import featureBg2 from '@/assets/images/locations/feature-02.webp'
import featureBg3 from '@/assets/images/locations/feature-03.webp'
import followupEn from '@/assets/images/mockups/service-followup-en.svg'
import followupPt from '@/assets/images/mockups/service-followup-pt.svg'
import mobileEn from '@/assets/images/mockups/service-mobile-en.svg'
import mobilePt from '@/assets/images/mockups/service-mobile-pt.svg'
import saasCardEn from '@/assets/images/mockups/service-saas-card-en.svg'
import saasCardPt from '@/assets/images/mockups/service-saas-card-pt.svg'
import saasPhoneEn from '@/assets/images/mockups/service-saas-phone-en.svg'
import saasPhonePt from '@/assets/images/mockups/service-saas-phone-pt.svg'

export type StreakRule = {
  bgColorClass: string
  icon: string
}

export type PlannedHabit = {
  timeSuffix: string
  timeTextClass?: string
  cardBgClass: string
  isChecked: boolean
  rightTextClass: string
}

export type ReflectionMetric = {
  icon: StaticImageData
  imgClass: string
  value: string
  percentClass: string
}

export type ReflectionStat = {
  value: string
}

// Illustrations of each service, with the text in the page language
const mockups = {
  pt: { mobile: mobilePt, saasPhone: saasPhonePt, saasCard: saasCardPt, followup: followupPt },
  en: { mobile: mobileEn, saasPhone: saasPhoneEn, saasCard: saasCardEn, followup: followupEn },
}

const streakRuleStyles: StreakRule[] = [
  { bgColorClass: 'bg-primary-1', icon: 'tabler:brand-android' },
  { bgColorClass: 'bg-primary-6', icon: 'tabler:brand-apple' },
  { bgColorClass: 'bg-primary-8', icon: 'tabler:device-mobile-dollar' },
  { bgColorClass: 'bg-primary-2', icon: 'tabler:bell' },
  { bgColorClass: 'bg-primary-3', icon: 'tabler:map-pin' },
  { bgColorClass: 'bg-primary-4', icon: 'tabler:lock' },
  { bgColorClass: 'bg-primary-7', icon: 'tabler:wifi-off' },
]

const plannedHabitStyles: PlannedHabit[] = [
  {
    timeSuffix: '1',
    cardBgClass: 'bg-primary-2/30 border border-primary-2/20',
    isChecked: true,
    rightTextClass: 'text-zinc-200',
  },
  {
    timeSuffix: '2',
    cardBgClass: 'bg-primary-2/30 border border-primary-2/20',
    isChecked: true,
    rightTextClass: 'text-zinc-200',
  },
  {
    timeSuffix: '3',
    timeTextClass: 'text-white',
    cardBgClass: 'bg-zinc-900 border border-zinc-700',
    isChecked: false,
    rightTextClass: 'text-white',
  },
  {
    timeSuffix: '4',
    timeTextClass: 'text-white',
    cardBgClass: 'bg-zinc-900 border border-zinc-700',
    isChecked: false,
    rightTextClass: 'text-white',
  },
]

const reflectionMetricStyles: ReflectionMetric[] = [
  {
    icon: icon46,
    imgClass: 'size-20',
    value: '86',
    percentClass: 'text-lg',
  },
  {
    icon: icon47,
    imgClass: 'md:size-30 size-20',
    value: '100',
    percentClass: 'text-xl',
  },
  {
    icon: icon48,
    imgClass: 'size-20',
    value: '71',
    percentClass: 'text-lg',
  },
]

const reflectionStatValues: ReflectionStat[] = [{ value: '12' }, { value: '7' }]

type FeaturesProps = {
  lang: Locale
  t: Dictionary['home']['services']
}

const Features = ({ lang, t }: FeaturesProps) => {
  const mockup = mockups[lang]
  const streakRules = streakRuleStyles.map((rule, idx) => ({ ...rule, label: t.mobile.features[idx] }))
  const plannedHabits = plannedHabitStyles.map((habit, idx) => ({ ...habit, time: t.websites.weekLabel, label: t.websites.steps[idx].label, rightText: t.websites.steps[idx].status }))
  const reflectionMetrics = reflectionMetricStyles.map((metric, idx) => ({ ...metric, alt: t.support.metrics[idx], label: t.support.metrics[idx] }))
  const reflectionStats = [
    {
      title: (
        <>
          {t.support.updatesTitleLine1}
          <br />
          {t.support.updatesTitleLine2}
        </>
      ),
      value: reflectionStatValues[0].value,
      footer: t.support.updatesFooter,
    },
    { title: t.support.ticketsTitle, value: reflectionStatValues[1].value, footer: t.support.ticketsFooter },
  ]

  return (
    <section id="servicos" className="relative pb-8 md:pb-25 lg:pb-50">
      <div className="container">
        <div className="mb-12.5 grid grid-cols-1 items-center gap-3.5 md:grid-cols-2 lg:gap-8">
          <div>
            <div className="mb-3.5 inline-flex">
              <span className="border-default-200 text-default-800 inline-block rounded-full border bg-surface px-5 py-1.5 text-sm font-medium">{t.badge}</span>
            </div>
            <h2 className="text-3xl leading-tight font-medium md:text-4xl lg:w-lg lg:text-5xl">{t.title}</h2>
          </div>
          <div>
            <p className="text-default-600 float-end text-lg leading-normal lg:w-md">{t.text}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-2">
          <div className="bg-default-200 overflow-hidden rounded-3xl">
            <div className="px-3.5 py-3.5 md:px-5 md:py-5 lg:px-10 lg:pt-10 lg:pb-12.5">
              <h3 className="text-default-800 mb-2.5 text-xl font-semibold md:text-2xl">{t.mobile.title}</h3>
              <p className="text-default-600 max-w-md text-lg">{t.mobile.text}</p>
            </div>

            <div className="relative mb-7.5 overflow-hidden">
              <Image src={mockup.mobile} alt="" className="mx-auto w-62 rounded-lg object-cover md:h-75 md:w-100" />
            </div>

            <div className="relative overflow-hidden">
              <div className="animate-marquee flex w-max gap-5 pb-5 lg:pb-20">
                {streakRules.map((rule, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-full bg-surface py-2.5 ps-2.5 pe-5 backdrop-blur-sm">
                    <div className={`flex size-8 items-center justify-center rounded-full ${rule.bgColorClass}`}>
                      <Icon icon={rule.icon} className="size-3.5 text-white" />
                    </div>
                    <span className="text-default-800 text-sm font-medium whitespace-nowrap">{rule.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-5 rounded-3xl p-3.5 md:p-5 lg:gap-y-12.5 lg:p-10" style={{ backgroundImage: `url(${featureBg1.src})` }}>
            <div>
              <h3 className="mb-2.5 text-xl font-semibold text-white md:text-2xl">{t.websites.title}</h3>
              <p className="text-lg text-gray-400 lg:w-md">{t.websites.text}</p>
            </div>

            <div className="w-full rounded-3xl border border-white/30 bg-transparent text-white backdrop-blur-xl lg:max-w-xl">
              <div className="mb-7.5 flex items-start justify-between border-b border-white/30 p-5">
                <div>
                  <h2 className="text-lg font-medium tracking-normal text-white">{t.websites.planTitle}</h2>
                  <p className="text-zinc-400 text-sm">{t.websites.planSubtitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="border-zinc-800 rounded-full border bg-black/60 px-3 py-1 text-sm font-bold">50%</span>
                  <span className="text-zinc-300 text-sm font-medium">{t.websites.progressLabel}</span>
                </div>
              </div>

              <div className="space-y-4 pe-4 pb-5 md:pe-10">
                {plannedHabits.map((habit, idx) => (
                  <div key={idx} className="group flex items-stretch gap-4">
                    <div className="relative flex w-16 flex-col items-end justify-center">
                      <div className={`text-zinc-300 text-right text-sm leading-none font-bold ${habit.timeTextClass || ''}`}>
                        {habit.time}
                        <br />
                        {habit.timeSuffix}
                      </div>
                    </div>
                    <div className={`grow ${habit.cardBgClass} flex items-center justify-between rounded-xl p-3.5 transition-transform`}>
                      <div className="flex items-center gap-2">
                        {habit.isChecked ? (
                          <>
                            <div>
                              <Icon icon="lucide:circle-check" className="text-primary-2 size-3.5" />
                            </div>
                            <span className="text-sm font-medium md:text-base">{habit.label}</span>
                          </>
                        ) : (
                          <span className="ms-2 text-sm font-medium md:text-base">{habit.label}</span>
                        )}
                      </div>
                      <span className={`text-xs md:text-sm ${habit.rightTextClass}`}>{habit.rightText}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl bg-black p-3.5 md:p-5 lg:p-10" style={{ backgroundImage: `url(${featureBg2.src})` }}>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 grid grid-cols-1 items-center md:gap-10 gap-6 md:grid-cols-2">
                <div className="flex h-full flex-col justify-between">
                  <div className="lg:max-w-md">
                    <h3 className="md:text-2xl text-xl font-semibold leading-tight text-white mb-2.5">{t.saas.title}</h3>
                    <p className="md:text-lg text-base leading-relaxed text-zinc-400 md:mb-7.5 mb-5">{t.saas.text}</p>
                    <Link href={localizePath(lang, '/contact')} className="group inline-flex relative overflow-hidden rounded-full bg-primary hover:bg-primary-dark md:px-8.5 px-3.5 py-3 md:py-3 md:text-lg text-sm font-medium text-white transition-all duration-300 hover:scale-95">
                      <span className="relative block overflow-hidden">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">{t.saas.button}</span>
                        <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">{t.saas.button}</span>
                      </span>
                    </Link>
                  </div>
                  <p className="md:mt-14 mt-5 text-sm text-zinc-500">{t.saas.note}</p>
                </div>

                <div className="relative flex items-end justify-center lg:justify-end">
                  <Image src={mockup.saasPhone} alt="" className="-mb-68 md:w-97 w-60 lg:h-160 md:h-125 pt-5 z-30 object-contain" />
                  <Image src={mockup.saasCard} alt="" className="absolute top-25 z-30 hidden size-25 md:inset-e-92 md:block lg:size-45" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl p-3.5 md:p-5 lg:p-10" style={{ backgroundImage: `url(${featureBg3.src})` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
            <div className="relative z-10">
              <div className="mb-6 max-w-2xl md:mb-12.5">
                <h3 className="md:text-2xl text-xl font-semibold leading-tight text-white mb-2.5">{t.support.title}</h3>
                <p className="md:text-lg text-base leading-relaxed text-zinc-300 md:w-sm">{t.support.text}</p>
              </div>

              <div className="mx-auto max-w-5xl rounded-3xl bg-black/85 p-7.5 backdrop-blur-xl">
                <h4 className="text-center md:text-lg text-base font-semibold text-white">{t.support.reportTitle}</h4>

                <div className="mt-7.5 grid grid-cols-2 gap-7.5 text-center md:grid-cols-3">
                  {reflectionMetrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="relative flex items-center justify-center">
                        <Image src={metric.icon} alt={metric.alt} className={metric.imgClass} />
                        <div className="absolute flex items-center text-white">
                          <span className="text-xl font-medium">{metric.value}</span>
                          <span className={`mb-1 ${metric.percentClass} font-medium`}>%</span>
                        </div>
                      </div>
                      <p className="text-zinc-300 mt-3.5 text-base md:text-lg">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7.5 grid grid-cols-2 gap-2 md:gap-7.5">
                {reflectionStats.map((stat, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
                    <div className="items-start gap-6 md:flex md:justify-between">
                      <div>
                        <p className="text-lg leading-snug text-white">{stat.title}</p>
                      </div>
                      <h3 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">{stat.value}</h3>
                    </div>
                    <p className="text-zinc-400 mt-4 text-lg md:mt-7.5">{stat.footer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 relative overflow-hidden rounded-3xl p-5 lg:p-10">
            <div className="bg-primary/10 absolute top-1/2 left-1/2 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="max-w-xl">
                <h3 className="mb-2.5 text-xl leading-tight font-semibold text-white md:text-2xl">{t.followUp.title}</h3>
                <p className="text-zinc-300 w-sm text-lg leading-relaxed">{t.followUp.text}</p>
              </div>

              <div className="relative mt-6 flex justify-center lg:mt-14">
                <div className="absolute top-1/2 z-20 w-full max-w-md -translate-y-1/2 rounded-2xl p-6">
                  <div className="absolute -top-20 left-0 rotate-[-20deg] md:-top-22 md:left-4">
                    <div className="relative">
                      <Image src={bellImage} alt="Bell" className="size-10 object-contain md:size-18" />
                      <div className="bg-primary-7 absolute top-2 right-2 hidden size-7 items-center justify-center rounded-full text-xs font-bold text-white md:flex">7</div>
                    </div>
                  </div>
                </div>
                <Image src={mockup.followup} loading="lazy" alt="" className="mt-6 h-54 w-90 md:mt-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
