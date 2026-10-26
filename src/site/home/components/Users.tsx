import Icon from '@/components/Icon'
import { logoBackgroundClass, partnerLogos } from '@/config/partners'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Image from 'next/image'

const cardStyles = {
  white: { card: 'bg-white border-zinc-200 dark:border-transparent', text: 'text-zinc-900', muted: 'text-zinc-500' },
  black: { card: 'bg-black border-transparent dark:border-white/10', text: 'text-white', muted: 'text-white/60' },
}

type UsersProps = {
  t: Dictionary['home']['partners']
}

const Users = ({ t }: UsersProps) => {
  const partners = t.items.map((partner, idx) => ({ ...partner, logo: partnerLogos[idx].logo, background: partnerLogos[idx].background }))
  // Shown twice so the sliding row stays full while there are only a few partners
  const partnerCards = [...partners, ...partners]

  const cards = partnerCards.map((partner, idx) => {
    const style = cardStyles[partner.background]
    return (
      <div key={idx} className={`flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl border p-7.5 md:h-128 ${style.card}`}>
        <p className={`text-lg font-medium ${style.text}`}>
          <span>{partner.sector}</span> <span className={`text-sm font-medium ${style.muted}`}>— {partner.city}</span>
        </p>
        <div className="flex min-h-0 flex-1 items-center justify-center py-4 md:py-8">
          <Image src={partner.logo} sizes="320px" className="max-h-full w-auto max-w-[85%] object-contain md:max-h-56" alt={partner.name} />
        </div>
        <div>
          <h3 className={`mb-1 text-2xl leading-tight font-bold whitespace-normal md:text-3xl ${style.text}`}>{partner.name}</h3>
          <p className={`font-medium ${style.muted}`}>
            {t.projectLabel}: {partner.project}
          </p>
        </div>
      </div>
    )
  })

  return (
    <section className="py-25 lg:py-50" id="parceiros">
      <div className="container">
        <div className="mb-8 flex flex-col items-end justify-between gap-4 md:mb-12.5 md:flex-row md:gap-8">
          <div>
            <div className="mb-3.5 inline-flex">
              <span className="border-default-200 text-default-800 inline-block rounded-full border bg-surface px-5 py-1.5 text-sm font-medium">{t.badge}</span>
            </div>
            <h2 className="text-default-900 text-[25px] leading-tight font-medium tracking-tight md:w-lg md:text-[31px] lg:text-[43px]">{t.title}</h2>
          </div>

          <div className="flex flex-col items-start justify-start space-y-2.5 text-start md:items-end md:justify-end">
            <div className="flex items-center justify-start md:justify-end">
              <div className="flex -space-x-4">
                {partners.map((partner) => (
                  <div key={partner.name} className={`border-default-800 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 p-1 ${logoBackgroundClass[partner.background]}`}>
                    <Image src={partner.logo} sizes="40px" className="max-h-full w-auto object-contain" alt={partner.name} />
                  </div>
                ))}
                <div className="border-default-800 bg-default-900 flex h-10 w-10 items-center justify-center rounded-full border-2 text-[8px] font-medium text-default-50">{t.you}</div>
              </div>
            </div>
            <div className="text-primary-1 flex gap-1.75">
              <Icon icon="tabler:star-filled" className="size-4" />
              <Icon icon="tabler:star-filled" className="size-4" />
              <Icon icon="tabler:star-filled" className="size-4" />
              <Icon icon="tabler:star-filled" className="size-4" />
              <Icon icon="tabler:star-filled" className="size-4" />
            </div>
            <div className="text-default-600 text-lg font-medium">{t.trustText}</div>
          </div>
        </div>
      </div>

      <div className="relative flex gap-7.5 overflow-hidden">
        <div className="animate-marquee flex gap-7.5 py-4 whitespace-nowrap">{cards}</div>
        <div className="animate-marquee flex gap-7.5 py-4 whitespace-nowrap" aria-hidden="true">
          {cards}
        </div>
      </div>
    </section>
  )
}

export default Users
