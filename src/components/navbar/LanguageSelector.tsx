'use client'

import Icon from '@/components/Icon'
import { localizePath, locales, stripLocale, type Locale } from '@/i18n/config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

type LanguageSelectorProps = {
  lang: Locale
  hash: string
  labels: Record<Locale, string>
  buttonLabel: string
}

const LanguageSelector = ({ lang, hash, labels, buttonLabel }: LanguageSelectorProps) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return
    const handleClick = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={buttonLabel}
        title={buttonLabel}
        className="bg-default-200 text-default-800 group relative flex size-8.75 items-center justify-center overflow-hidden rounded-lg text-xs font-semibold transition-all duration-300 md:h-12.5 md:w-12.5 md:rounded-2xl md:text-sm"
      >
        <div className="relative flex items-center justify-center overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-6">{lang.toUpperCase()}</span>
          <span className="absolute block translate-y-6 transition-transform duration-300 group-hover:translate-y-0">
            <Icon icon="lucide:languages" className="size-4.5 md:size-5" />
          </span>
        </div>
      </button>

      {isOpen && (
        <div role="menu" className="bg-surface absolute end-0 top-full z-130 mt-2 min-w-40 rounded-xl p-2.5 shadow-xl">
          {locales.map((locale) => {
            const isCurrent = locale === lang
            return (
              <Link
                key={locale}
                role="menuitem"
                href={localizePath(locale, stripLocale(pathname)) + hash}
                hrefLang={locale}
                aria-current={isCurrent ? 'true' : undefined}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between gap-x-3.5 rounded-lg px-2.5 py-1.5 text-sm transition-all ${isCurrent ? 'bg-default-200 text-default-800 font-medium' : 'text-default-600 hover:text-default-800 hover:bg-default-200'}`}
              >
                {labels[locale]}
                {isCurrent && <Icon icon="lucide:check" className="size-4" />}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
