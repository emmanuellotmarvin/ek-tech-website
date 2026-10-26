import Icon from '@/components/Icon'
import type { Dictionary } from '@/i18n/dictionaries/pt'

type ReachUsCardType = {
  icon: string
  iconBgClass: string
  title: string
  value: string
  href?: string
}

const getReachUsData = (t: Dictionary['contact']['reachUs']): ReachUsCardType[] => [
  {
    icon: 'lucide:mail',
    iconBgClass: 'bg-primary-3',
    title: t.email,
    value: 'info@ek-tech.co.mz',
    href: 'mailto:info@ek-tech.co.mz',
  },
  {
    icon: 'tabler:brand-whatsapp',
    iconBgClass: 'bg-primary-8',
    title: t.phone,
    value: '+258 85 190 3771',
    href: 'https://wa.me/258851903771',
  },
  {
    icon: 'lucide:map-pin',
    iconBgClass: 'bg-primary-6',
    title: t.location,
    value: t.locationValue,
  },
]

type ReachUsProps = {
  t: Dictionary['contact']['reachUs']
}

const ReachUs = ({ t }: ReachUsProps) => {
  const reachUsData = getReachUsData(t)

  return (
    <section className="py-20 md:py-25 lg:py-50">
      <div className="container">
        <div className="mb-8 text-center md:mb-12.5">
          <h3 className="text-4xl font-medium lg:text-5xl">{t.title}</h3>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7.5 lg:w-5xl">
          {reachUsData.map((item, idx) => (
            <div key={idx} className="group flex flex-col justify-end gap-y-3.5 rounded-2xl bg-surface p-3.5 text-center shadow-lg md:gap-y-10 md:p-5 md:text-start lg:gap-y-12.5 lg:p-7.5">
              <div className={`mx-auto flex size-10 items-center justify-center rounded-full md:mx-0 md:size-12.5 ${item.iconBgClass}`}>
                <Icon icon={item.icon} className="text-xl text-white" />
              </div>
              <div>
                <h4 className="text-default-900 mb-2.5 text-xl font-medium md:mb-5 md:text-2xl">{item.title}</h4>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="hover:text-default-800 decoration-2 underline-offset-4 hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReachUs
