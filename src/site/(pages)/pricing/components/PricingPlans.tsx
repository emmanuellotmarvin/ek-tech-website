'use client'

import Icon from '@/components/Icon'
import type { PricingPlan, SaasSystem } from '@/config/pricing'
import { fillText, localizePath, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Link from 'next/link'
import { useState } from 'react'

// Badge styles by card position
const planStyles = [
  { badgeBgClass: 'bg-primary-8', badgeShadowClass: 'shadow-[0_0_20px_rgba(3,105,161,0.4)]' },
  { badgeBgClass: 'bg-primary-2' },
  { badgeBgClass: 'bg-primary-1', colSpanClass: 'lg:col-span-1 md:col-span-2' },
]

// 2500 -> "2 500 MT" in Portuguese, "2,500 MT" in English
const formatPrice = (value: number, locale: Locale) => `${String(value).replace(/\B(?=(\d{3})+(?!\d))/g, locale === 'en' ? ',' : ' ')} MT`

type PricingPlansProps = {
  lang: Locale
  t: Dictionary['pricing']['plans']
  saasSystems: SaasSystem[]
}

const PricingPlans = ({ lang, t, saasSystems }: PricingPlansProps) => {
  const [isYearly, setIsYearly] = useState(false)
  const [systemId, setSystemId] = useState(saasSystems[0].id)
  const system = saasSystems.find((item) => item.id === systemId) ?? saasSystems[0]

  const paidMonthsPerYear = 12 - (system.yearlyFreeMonths ?? 0)
  const priceOf = (plan: PricingPlan) => (plan.monthlyPrice === undefined ? undefined : isYearly ? plan.monthlyPrice * paidMonthsPerYear : plan.monthlyPrice)
  const periodLabel = isYearly ? t.perYear : t.perMonth

  return (
    <section id="planos" className="scroll-mt-28 pb-20 md:pb-25 lg:pb-50">
      <div className="container">
        <div className="mb-7.5 text-center">
          <span className="border-default-200 text-default-800 inline-block rounded-full border bg-surface px-5 py-1 text-sm font-medium md:py-1.5">{t.badge}</span>
          <h2 className="text-default-900 mt-2.5 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">{t.title}</h2>

          <nav className="mt-5 flex flex-wrap justify-center gap-2.5 md:gap-5 lg:mt-10" aria-label={t.systemsLabel} role="tablist">
            {saasSystems.map((item) => {
              const isActive = item.id === system.id
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSystemId(item.id)}
                  className={`inline-flex items-center gap-x-2.5 rounded-xl border px-5 py-2.5 text-base font-medium transition-all md:text-lg ${isActive ? 'border-default-800 bg-default-100 text-default-900' : 'bg-default-100 border-default-200 text-default-500 hover:text-default-800'}`}
                >
                  <Icon icon={item.icon} />
                  {item.name}
                </button>
              )
            })}
          </nav>

          <div className="mt-5 flex items-center justify-center gap-4 lg:mt-8">
            <span className="text-default-800 text-base font-medium md:text-lg">{t.monthly}</span>

            <input
              type="checkbox"
              id="toggle-count"
              aria-label={t.yearlyToggleLabel}
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className="peer before:bg-default-900 relative h-9 w-15 cursor-pointer appearance-none rounded-full border-2 border-transparent bg-surface p-1 shadow-xl transition-colors duration-200 ease-in-out before:inline-block before:h-6 before:w-6 before:translate-x-0 before:transform before:rounded-full before:shadow before:transition before:duration-200 before:ease-in-out checked:bg-none checked:before:translate-x-full focus:ring-0 focus:ring-offset-0"
            />

            <span className="text-default-800 text-base font-medium md:text-lg">{t.yearly}</span>
          </div>

          {system.yearlyFreeMonths ? (
            <p className="text-primary mt-3 text-sm font-medium md:text-base">
              {fillText(t.yearlyNote, { paid: paidMonthsPerYear })}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3" role="tabpanel">
          {system.plans.map((plan, idx) => {
            const style = planStyles[idx % planStyles.length]
            const price = priceOf(plan)

            return (
              <div key={plan.name} className={`flex flex-col rounded-2xl bg-surface p-3.5 shadow-xl md:p-5 lg:p-7.5 ${plan.featured ? 'ring-primary ring-2' : ''} ${style.colSpanClass || ''}`}>
                <div className="mb-5 flex items-center justify-between gap-2.5">
                  <div className={`rounded-lg px-3.75 py-1 text-sm font-medium text-white lg:py-2 ${style.badgeBgClass} ${style.badgeShadowClass || ''}`}>{plan.name}</div>
                  {plan.featured && <span className="bg-primary-light text-primary-dark rounded-full px-3 py-1 text-xs font-semibold md:text-sm">{t.featured}</span>}
                </div>

                <div className="mb-2.5 lg:mb-5">
                  {price !== undefined ? (
                    <div className="flex items-baseline gap-2">
                      <p className="text-default-900 text-2xl font-semibold md:text-3xl lg:text-4xl">{formatPrice(price, lang)}</p>
                      <div className="text-lg">/{periodLabel}</div>
                    </div>
                  ) : (
                    <p className="text-default-900 text-2xl font-semibold md:text-3xl lg:text-4xl">{t.onRequest}</p>
                  )}
                  {isYearly && price !== undefined && system.yearlyFreeMonths ? <p className="text-primary mt-1.5 text-sm font-medium">{fillText(t.equivalent, { price: formatPrice(Math.round(price / 12), lang) })}</p> : null}
                  {plan.setupFee !== undefined && <p className="text-default-500 mt-1.5 text-sm">{fillText(t.setupFee, { price: formatPrice(plan.setupFee, lang) })}</p>}
                </div>

                <div>
                  <p className="text-default-700 text-base leading-relaxed md:text-lg">{plan.description}</p>
                </div>

                <div className="bg-default-200 my-6 h-px"></div>

                <ul className="mb-5 space-y-2.5 md:mb-7.5">
                  {plan.highlights.map((highlight) => (
                    <li key={highlight} className="text-default-600 flex items-start gap-2 text-base">
                      <Icon icon="lucide:circle-check" className="text-primary-2 mt-1 size-4 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link href={localizePath(lang, '/contact')} className="group bg-primary hover:bg-primary-dark relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 text-white shadow-xl! transition-all duration-300 hover:scale-95">
                    <div className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                      <div className="flex h-14 items-center gap-3">
                        <span className="font-medium">{t.choosePlan}</span>
                      </div>
                      <div className="absolute top-full flex h-14 items-center gap-3">
                        <span className="font-medium">{t.choosePlan}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {system.enterprise && (
          <div className="mt-7.5 flex flex-col items-start justify-between gap-5 rounded-2xl bg-surface p-3.5 shadow-xl md:flex-row md:items-center md:p-5 lg:p-7.5">
            <div>
              <div className="flex flex-wrap items-center gap-3.5">
                <div className="bg-default-900 rounded-lg px-3.75 py-1 text-sm font-medium text-default-50 lg:py-2">{t.enterprise}</div>
                <p className="text-default-900 text-xl font-semibold md:text-2xl">{t.onRequest}</p>
              </div>
              <p className="text-default-700 mt-2.5 text-base md:text-lg">{system.enterprise.description}</p>
            </div>
            <Link href={localizePath(lang, '/contact')} className="group bg-default-200 text-default-900 relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full px-5 transition-all duration-300 hover:scale-95">
              <div className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                <div className="flex h-14 items-center gap-3">
                  <span className="font-medium">{t.talkToUs}</span>
                </div>
                <div className="absolute top-full flex h-14 items-center gap-3">
                  <span className="font-medium">{t.talkToUs}</span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {system.setupNote && <p className="text-default-500 mt-5 text-center text-sm md:text-base">{system.setupNote}</p>}

        <div className="mt-20 md:mt-25 lg:mt-30">
          <h3 className="text-default-900 mb-5 text-center text-2xl font-medium md:mb-7.5 md:text-4xl">{fillText(t.compareTitle, { system: system.name })}</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-start">
              <thead className="bg-default-200">
                <tr>
                  <th className="text-default-900 rounded-s-lg px-2 py-2.5 text-start text-sm font-medium md:p-5 md:text-xl lg:text-2xl">{t.featuresColumn}</th>
                  {system.plans.map((plan, idx) => {
                    const price = priceOf(plan)
                    return (
                      <th key={plan.name} className={`px-2 py-2.5 text-center md:p-5 ${idx === system.plans.length - 1 ? 'rounded-r-2xl' : ''}`}>
                        <div className="text-default-900 text-sm font-medium md:text-xl lg:text-2xl">{plan.name}</div>
                        <div className="text-default-600 mt-1 text-xs font-medium md:text-lg">{price !== undefined ? `${formatPrice(price, lang)}/${periodLabel}` : t.onRequest}</div>
                      </th>
                    )
                  })}
                </tr>
              </thead>

              <tbody className="text-xs md:text-base lg:text-lg">
                {system.comparison.map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? 'bg-default-100' : ''}>
                    <td className="text-default-700 rounded-s-lg p-2.5 font-medium md:px-5 md:py-4">{row.label}</td>
                    {row.values.map((value, valueIdx) => (
                      <td key={valueIdx} className={`text-default-800 text-center font-medium ${valueIdx === row.values.length - 1 ? 'rounded-e-lg' : ''}`}>
                        {value === true ? (
                          <>
                            <Icon icon="lucide:circle-check" className="text-primary-5 inline-block size-3.75 md:size-6" />
                            <span className="sr-only">{t.included}</span>
                          </>
                        ) : value === false ? (
                          <>
                            <Icon icon="lucide:circle-x" className="text-default-400 inline-block size-3.75 md:size-6" />
                            <span className="sr-only">{t.notIncluded}</span>
                          </>
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
