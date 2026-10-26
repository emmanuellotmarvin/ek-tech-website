'use client'

import Icon from '@/components/Icon'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

import projectAgrovet from '@/assets/images/gallery/projecto-agrovet.png'
import projectNamutequeliua from '@/assets/images/gallery/projecto-namutequeliua.png'
import projectCrm from '@/assets/images/gallery/projecto-crm.png'
import vector10 from '@/assets/images/icons/vector-10.png'

export type UsecaseTabType = {
  id: string
  targetId: string
  icon: string
  image: StaticImageData
  isActive?: boolean
}

const usecaseTabStyles: UsecaseTabType[] = [
  {
    id: 'tabs-item-1',
    targetId: '#tabs-1',
    icon: 'lucide:layout-dashboard',
    image: projectAgrovet,
    isActive: true,
  },
  {
    id: 'tabs-item-2',
    targetId: '#tabs-2',
    icon: 'lucide:layout-dashboard',
    image: projectNamutequeliua,
  },
  {
    id: 'tabs-item-3',
    targetId: '#tabs-3',
    icon: 'lucide:globe',
    image: projectCrm,
  },
]

type WorkProps = {
  t: Dictionary['home']['projects']
}

const Work = ({ t }: WorkProps) => {
  // Controlled by React (not Preline) so the tabs respond even before scripts finish loading
  const [activeId, setActiveId] = useState(usecaseTabStyles.find((tab) => tab.isActive)?.id ?? usecaseTabStyles[0].id)
  const usecaseTabsData = usecaseTabStyles.map((tab, idx) => {
    const project = t.items[idx]
    return { ...tab, label: project.name, alt: project.name, description: project.description, statValue: project.type, statLabel: project.typeLabel }
  })

  return (
    <section className="relative" id="projectos">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-60 dark:opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="relative z-10 container rounded-2xl bg-surface object-cover p-8.5 text-center lg:mx-auto lg:p-25" style={{ backgroundImage: `url(${vector10.src})` }}>
        <span className="border-default-200 text-default-800 mb-3.5 inline-block rounded-full border bg-surface px-5 py-1.5 text-sm font-medium">{t.badge}</span>

        <h2 className="text-default-900 mb-8 text-2xl leading-[1.1] font-medium tracking-normal md:mb-12.5 md:text-4xl lg:text-5xl">
          {t.titleLine1}
          <br className="hidden md:block" />
          {t.titleLine2}
        </h2>

        <nav className="mb-7.5 flex flex-wrap justify-center gap-2.5 md:gap-5" aria-label="Tabs" role="tablist">
          {usecaseTabsData.map((tab) => {
            const isActive = tab.id === activeId
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={`bg-default-100 hover:bg-default-100 inline-flex items-center gap-x-2.5 rounded-xl border px-5 py-2.5 text-base font-medium transition-all md:text-lg ${isActive ? 'border-default-800 text-default-900' : 'border-default-200 text-default-500'}`}
                id={tab.id}
                aria-controls={tab.targetId.substring(1)}
                role="tab"
                aria-selected={isActive}
              >
                <Icon icon={tab.icon} />
                {tab.label}
              </button>
            )
          })}
        </nav>

        <div className="relative mx-auto mt-8 max-w-5xl">
          {usecaseTabsData.map((tab) => (
            <div key={tab.targetId} id={tab.targetId.substring(1)} role="tabpanel" aria-labelledby={tab.id} className={`transition-all duration-300 ${tab.id === activeId ? '' : 'hidden'}`}>
              <div className="shadow-default-200/50 relative overflow-hidden rounded-2xl shadow-2xl">
                <Image src={tab.image} className="h-92 w-full object-cover object-left-top lg:h-138" alt={tab.alt} />
                <div className="bg-zinc-900/60 absolute right-2 bottom-2 w-70 rounded-3xl border border-white/10 p-3.5 text-left backdrop-blur-md md:right-4 md:bottom-4 md:w-100 md:p-5 lg:right-8 lg:bottom-8 lg:p-7.5">
                  <p className="text-zinc-300 mb-7.5 text-sm font-medium tracking-normal md:text-lg">{tab.description}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl leading-none font-bold text-white md:text-4xl">{tab.statValue}</h3>
                    <p className="text-zinc-400 text-sm font-medium tracking-tighter">{tab.statLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-12.5">
          <p className="text-default-800 mb-2.5 text-sm font-medium">{t.alsoTitle}</p>
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-6.5">
            {t.hashtags.map((tag, idx) => (
              <span key={idx} className="text-default-900 text-sm font-medium transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
