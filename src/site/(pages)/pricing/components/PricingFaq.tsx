'use client'

import Icon from '@/components/Icon'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import { useState } from 'react'

type PricingFaqProps = {
  t: Dictionary['pricing']['faq']
}

const PricingFaq = ({ t }: PricingFaqProps) => {
  const [activeId, setActiveId] = useState<number | null>(0)

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className="pt-20 pb-20 md:pt-25 md:pb-25 lg:pt-30 lg:pb-50">
      <div className="container">
        <div className="mb-8 space-y-3.5 text-center md:mb-12.5">
          <span className="border-default-200 text-default-800 inline-block rounded-full border bg-surface px-5 py-1.5 text-sm font-medium">{t.badge}</span>

          <h3 className="text-2xl font-medium md:text-4xl lg:text-5xl">{t.title}</h3>
        </div>

        <div className="hs-accordion-group mx-auto space-y-2.5 lg:w-3xl">
          {t.items.map((faq, idx) => {
            const isOpen = activeId === idx
            return (
              <div key={idx} className={`hs-accordion hs-accordion-active:shadow-md rounded-2xl border border-default-100 bg-surface shadow-sm transition-all duration-300 ${isOpen ? 'active' : ''}`}>
                <button type="button" onClick={() => toggleAccordion(idx)} className="hs-accordion-toggle hs-accordion-active:text-default-950 text-default-900 inline-flex w-full items-center justify-between p-3.5 text-start font-bold transition hover:text-default-500 lg:p-5">
                  <h3 className="text-base font-medium md:text-xl">{faq.question}</h3>
                  <div className="hs-accordion-active:rotate-45 bg-default-200 relative flex size-6.5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 md:size-8.5">
                    <Icon icon="lucide:plus" className="text-default-800 size-3 md:size-5" />
                  </div>
                </button>

                <div className={`hs-accordion-content w-full overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-3.5 pb-3.5 text-base leading-normal text-default-500 md:text-lg md:leading-relaxed lg:px-5 lg:pb-5">{faq.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingFaq
