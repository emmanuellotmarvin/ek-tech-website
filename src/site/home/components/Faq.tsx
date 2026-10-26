'use client'

import Icon from '@/components/Icon'
import { localizePath, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Link from 'next/link'
import { useState } from 'react'

type FaqProps = {
  lang: Locale
  t: Dictionary['faq']
}

const Faq = ({ lang, t }: FaqProps) => {
  const [activeId, setActiveId] = useState<string | null>('hs-collapse-0')
  const faqItems = t.items.map((item, idx) => ({ ...item, id: `hs-collapse-${idx}` }))

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className="py-6 md:pb-10 lg:py-25">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-7.5 md:grid-cols-3 lg:grid-cols-12 lg:gap-25">
          <div className="col-span-1 space-y-10 lg:col-span-5 lg:space-y-20">
            <div className="space-y-4">
              <span className="border-default-200 text-default-800 mb-2.5 inline-block rounded-full border bg-surface px-5 py-1.5 text-sm font-medium">{t.badge}</span>
              <h2 className="text-default-950 text-2xl leading-normal font-medium tracking-normal md:text-4xl lg:text-5xl">{t.title}</h2>
            </div>

            <div className="space-y-6 rounded-2xl bg-surface p-5 shadow-xl shadow-default-200/50 md:p-7.5">
              <div className="bg-primary-1 flex size-12.5 items-center justify-center rounded-full shadow-lg">
                <Icon icon="lucide:headset" className="size-6 text-white" />
              </div>
              <div className="space-y-6">
                <h3 className="text-default-950 mb-3.5 text-xl font-medium md:text-2xl">{t.notFoundTitle}</h3>
                <Link href={localizePath(lang, '/contact')} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary hover:bg-primary-dark px-8.5 text-nowrap text-white shadow-xl transition-all duration-300 hover:scale-95">
                  <span className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                    <span className="flex h-14 items-center gap-3">
                      <span className="font-medium">{t.contactButton}</span>
                    </span>
                    <span className="absolute top-full flex h-14 items-center gap-3">
                      <span className="font-medium">{t.contactButton}</span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2 space-y-4 lg:col-span-7">
            <div className="space-y-2.5 lg:col-span-7 lg:space-y-4">
              {faqItems.map((item) => {
                const isOpen = activeId === item.id
                return (
                  <div key={item.id} className={`rounded-2xl border border-default-100 bg-surface shadow-sm ${isOpen ? 'shadow-md' : ''} transition-all duration-300`}>
                    <button onClick={() => toggleAccordion(item.id)} className={`inline-flex w-full items-center justify-between p-3.5 text-start font-bold transition hover:text-default-500 lg:p-5 ${isOpen ? 'text-default-950' : 'text-default-900'}`} aria-controls={item.id}>
                      <h3 className="text-base font-medium md:text-xl">{item.question}</h3>
                      <div className={`bg-default-200 relative flex size-6.5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 md:size-8.5 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                        <Icon icon="lucide:plus" className="text-default-800 size-3 md:size-5" />
                      </div>
                    </button>
                    <div id={item.id} className={`w-full overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="px-3.5 pb-3.5 text-base leading-normal text-default-500 md:text-lg md:leading-relaxed lg:px-5 lg:pb-5">{item.answer}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
