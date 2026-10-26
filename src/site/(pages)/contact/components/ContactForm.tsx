'use client'

import Icon from '@/components/Icon'
import { fillText } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Image from 'next/image'
import { FormEvent, useState } from 'react'

import contactPhoto from '@/assets/images/locations/contact.jpg'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID
const WHATSAPP_NUMBER = '258851903771'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

const whatsappLink = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

const inputClassName = 'bg-default-200/80 text-default-800 placeholder:text-default-600 w-full rounded-xl border-none px-5 py-4 transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none'

type ContactFormProps = {
  t: Dictionary['contact']['form']
}

const ContactForm = ({ t }: ContactFormProps) => {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [senderName, setSenderName] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setSenderName(String(data.get('name') ?? ''))

    if (!FORMSPREE_ID) {
      console.error('NEXT_PUBLIC_FORMSPREE_ID is not set, so the contact form cannot send emails.')
      setStatus('error')
      return
    }

    setStatus('sending')
    data.append('_subject', `Novo contacto pelo site: ${data.get('name')}`)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error(`Formspree responded with ${response.status}`)
      form.reset()
      setStatus('sent')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section className="pt-32.5 md:pt-36 lg:pt-50">
      <div className="container">
        <div className="mb-12 text-center lg:mb-20">
          <span className="border-default-200 text-default-800 inline-block rounded-full border bg-surface px-5 py-1 text-sm font-medium md:py-1.5">{t.badge}</span>

          <h1 className="text-default-900 my-2.5 text-4xl font-medium tracking-tight md:text-5xl lg:text-[90px]">{t.title}</h1>

          <p className="mx-auto md:w-lg">{t.text}</p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-surface shadow-xl md:flex">
          <div className="relative order-2! min-h-90 overflow-hidden bg-white md:order-1 md:min-h-125 md:w-6/8 lg:w-2/5">
            {/* Aligned to the left so the handset stays in view when the photo is cropped */}
            <Image src={contactPhoto} sizes="(min-width: 1024px) 480px, 100vw" alt="" className="absolute inset-0 h-full w-full object-cover object-left" />
          </div>

          <div className="order-1! px-5 py-7.5 md:order-2 md:p-5 lg:w-3/5 lg:p-12.5">
            {status === 'sent' ? (
              <div className="flex h-full flex-col items-start justify-center gap-5" role="status">
                <div className="bg-primary flex size-12.5 items-center justify-center rounded-full">
                  <Icon icon="lucide:circle-check" className="text-xl text-white" />
                </div>
                <div>
                  <h2 className="text-default-900 mb-2.5 text-2xl font-medium md:text-3xl">{t.sentTitle}</h2>
                  <p className="text-default-600 text-lg">{fillText(t.sentText, { name: senderName ? `, ${senderName}` : '' })}</p>
                </div>
                <p className="text-default-600">{t.sentWhatsappHint}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={whatsappLink(fillText(t.whatsappAfterSent, { name: senderName || t.whatsappFallbackName }))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary-dark inline-flex items-center gap-2.5 rounded-full px-8 py-4 font-medium text-white shadow-xl transition-all hover:scale-95"
                  >
                    <Icon icon="tabler:brand-whatsapp" className="size-5" />
                    {t.continueOnWhatsapp}
                  </a>
                  <button type="button" onClick={() => setStatus('idle')} className="bg-default-200 text-default-900 rounded-full px-8 py-4 font-medium transition-all hover:scale-95">
                    {t.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-3.5 md:space-y-8">
                <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:gap-8">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-default-600 mb-2.5 text-sm font-medium">
                      {t.labels.name}
                    </label>
                    <input type="text" id="name" name="name" placeholder={t.placeholders.name} required className={inputClassName} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-default-600 mb-2.5 text-sm font-medium">
                      {t.labels.phone}
                    </label>
                    <input type="tel" id="phone" name="phone" placeholder={t.placeholders.phone} className={inputClassName} />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-default-600 mb-2.5 text-sm font-medium">
                    {t.labels.email}
                  </label>
                  <input type="email" id="email" name="email" placeholder={t.placeholders.email} required className={inputClassName} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-default-600 mb-2.5 text-sm font-medium">
                    {t.labels.message}
                  </label>
                  <textarea id="message" name="message" rows={5} placeholder={t.placeholders.message} className={`${inputClassName} resize-none`}></textarea>
                </div>

                {status === 'error' && (
                  <p className="rounded-xl bg-red-50 px-5 py-4 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300" role="alert">
                    {t.errorText}{' '}
                    <a href={whatsappLink(t.whatsappDefault)} target="_blank" rel="noopener noreferrer" className="font-medium underline">
                      {t.errorWhatsapp}
                    </a>{' '}
                    {t.errorOr}{' '}
                    <a href="mailto:info@ek-tech.co.mz" className="font-medium underline">
                      info@ek-tech.co.mz
                    </a>
                    .
                  </p>
                )}

                <div className="pt-4">
                  <button type="submit" disabled={status === 'sending'} className="bg-primary hover:bg-primary-dark rounded-full px-8 py-4 font-medium text-white shadow-xl transition-all hover:scale-95 disabled:opacity-60 disabled:hover:scale-100">
                    {status === 'sending' ? t.sending : t.submit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
