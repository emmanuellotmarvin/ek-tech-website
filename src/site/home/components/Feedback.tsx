import Icon from '@/components/Icon'
import { logoBackgroundClass, partnerLogos } from '@/config/partners'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Image from 'next/image'

type FeedbackProps = {
  t: Dictionary['home']['testimonials']
}

const Feedback = ({ t }: FeedbackProps) => {
  // One testimonial per column, each with the logo of the author's company
  const feedbacksColumnsData = t.map((item, idx) => [{ ...item, company: partnerLogos[idx] }])

  return (
    <section id="testemunhos" className="relative overflow-hidden pb-20 lg:pb-40">
      <div className="container">
        <div className="relative overflow-hidden lg:max-h-180">
          <div className="grid grid-cols-2 gap-3.5 md:gap-5 lg:grid-cols-3 lg:gap-7.5">
            {feedbacksColumnsData.map((column, colIdx) => (
              <div key={colIdx} className="space-y-3.5 md:space-y-5 lg:space-y-7.5">
                {column.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-default-200 flex flex-col justify-between rounded-2xl p-2.5 md:p-7.5">
                    <p className="text-default-800 mb-3.5 text-sm leading-snug font-medium md:mb-7.5 md:text-lg">{item.quote}</p>
                    <div className="flex items-center justify-between">
                      <div className="items-center gap-2.5 md:flex">
                        <div className={`border-default-300 flex size-7.5 shrink-0 items-center justify-center overflow-hidden rounded-full border p-1 md:size-12 md:p-1.5 ${logoBackgroundClass[item.company.background]}`}>
                          <Image src={item.company.logo} sizes="48px" className="max-h-full w-auto object-contain" alt={item.company.name} />
                        </div>
                        <div className="mt-1.25 md:mt-0">
                          <h3 className="text-default-900 text-sm leading-none font-medium md:text-lg">{item.name}</h3>
                          <p className="text-default-500 mt-1 text-xs md:text-sm">{item.role}</p>
                        </div>
                      </div>
                      <span className="inline-flex size-5.5 items-center justify-center rounded-full bg-surface md:size-10">
                        <Icon icon="tabler:quote" className="text-default-800 size-3 md:size-4" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
