import Icon from '@/components/Icon'
import type { Dictionary } from '@/i18n/dictionaries/pt'

type MissionItemType = {
  bgClass: string
  icon: string
}

const missionStyles: MissionItemType[] = [
  {
    bgClass: 'bg-primary-3',
    icon: 'lucide:sparkles',
  },
  {
    bgClass: 'bg-primary-7',
    icon: 'lucide:handshake',
  },
  {
    bgClass: 'bg-primary-6',
    icon: 'lucide:file-text',
  },
  {
    bgClass: 'bg-primary-2',
    icon: 'lucide:shield-check',
  },
]

type MissionProps = {
  t: Dictionary['about']['mission']
}

const Mission = ({ t }: MissionProps) => {
  const missionData = missionStyles.map((item, idx) => ({ ...item, ...t.values[idx] }))

  return (
    <section>
      <div className="container">
        <div className="lg:max-w-4xl">
          <h2 className="text-default-900 mb-3.75 text-2xl leading-tight font-medium tracking-tight lg:mb-5 lg:text-4xl">{t.title}</h2>
          <p className="text-default-800 max-w-2xl leading-relaxed lg:text-lg">{t.text}</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5 md:mt-12 md:gap-7.5 lg:mt-12.5 lg:grid-cols-4">
          {missionData.map((item, idx) => (
            <div key={idx} className="group flex h-full flex-col justify-between gap-y-6.5 rounded-2xl bg-surface p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
              <div className={`flex size-10 items-center justify-center rounded-full md:size-12.5 ${item.bgClass}`}>
                <Icon icon={item.icon} className="text-md text-white md:text-xl" />
              </div>
              <div>
                <h4 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">{item.title}</h4>
                <p className="text-default-700 text-sm leading-normal md:text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission
