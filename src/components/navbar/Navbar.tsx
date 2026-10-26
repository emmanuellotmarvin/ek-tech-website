'use client'

import Icon from '@/components/Icon'
import Logo from '@/components/Logo'
import { localizePath, stripLocale, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import LanguageSelector from './LanguageSelector'
import ThemeToggle from './ThemeToggle'

type NavbarProps = {
  lang: Locale
  t: Dictionary['navbar']
}

const Navbar = ({ lang, t }: NavbarProps) => {
  const pathname = usePathname().replace(/\/+$/, '') || '/'
  const [currentHash, setCurrentHash] = useState('')

  const navItems = t.items.map((item) => ({ ...item, href: localizePath(lang, item.href) }))
  const homePath = localizePath(lang, '/home')

  useEffect(() => {
    setCurrentHash(window.location.hash)
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const closeMenu = () => {
    const overlay = document.getElementById('mobile-menu')
    if (overlay && (window as any).HSOverlay) {
      ;(window as any).HSOverlay.close(overlay)
    }
  }

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
    setCurrentHash(window.location.hash)
    closeMenu()
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const stickyNav = document.querySelector('.nav-sticky')
      if (stickyNav) {
        const scTop = window.pageYOffset || document.documentElement.scrollTop
        if (scTop >= 100) {
          stickyNav.classList.add('nav-sticky-on')
        } else {
          stickyNav.classList.remove('nav-sticky-on')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (stripLocale(pathname) !== '/home') return

    const handleScrollSpy = () => {
      const sections = navItems.map((item) => item.href.split('#')[1])
      const scrollPosition = window.scrollY + window.innerHeight / 3

      if (window.scrollY < 100) {
        setCurrentHash('')
        return
      }

      let currentActive = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            currentActive = `#${id}`
          }
        }
      }

      setCurrentHash(currentActive)
    }

    window.addEventListener('scroll', handleScrollSpy)
    handleScrollSpy()
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [pathname])

  const checkActive = (href: string) => {
    const [basePath, hash] = href.split('#')
    if (pathname !== basePath) return false
    if (hash) {
      return currentHash === `#${hash}`
    }
    return !currentHash
  }

  return (
    <header>
      <div className="nav-sticky navbar fixed inset-x-0 top-0 z-120 w-full">
        <div className="container py-3.5 md:py-5 lg:py-7.5">
          <div className="bg-surface flex w-full items-center justify-between rounded-lg md:rounded-2xl lg:justify-center lg:bg-transparent">
            <div className="bg-surface flex min-w-[175px] rounded-[20px] px-3 py-1.5 md:py-4 lg:p-4 lg:shadow-lg">
              <Link href={homePath} onClick={() => setCurrentHash('')} aria-label="EK Tech">
                <Logo className="h-7.5 text-2xl md:h-8" />
              </Link>
            </div>

            <div className="hidden h-2.5 w-full transition-all duration-500 ease-in-out in-[.nav-sticky-on]:w-2.5 lg:flex"></div>

            <div className="flex items-center justify-between">
              <div className="bg-surface hidden rounded-[20px] p-1.5 whitespace-nowrap lg:block lg:shadow-lg">
                <ul id="navbar" className="flex items-center">
                  {navItems.map((item, index) => {
                    const isActive = checkActive(item.href)
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          onClick={() => {
                            const hash = item.href.split('#')[1]
                            setCurrentHash(hash ? `#${hash}` : '')
                          }}
                          className={`flex items-center justify-center rounded-2xl px-7 py-4 text-sm font-medium transition-all ${isActive ? 'bg-default-200 text-default-800' : 'text-default-700 hover:bg-default-200 hover:text-default-800'}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="hidden h-2.5 w-full transition-all duration-500 ease-in-out in-[.nav-sticky-on]:w-2.5 lg:flex"></div>

            <div className="bg-surface flex items-center gap-1.25 rounded-[20px] p-1.5 shadow-lg lg:shadow-lg">
              <LanguageSelector lang={lang} hash={currentHash} labels={t.languages} buttonLabel={t.languageButton} />
              <ThemeToggle labels={t.theme} />

              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="mobile-menu"
                  data-hs-overlay="#mobile-menu"
                  aria-label={t.openMenu}
                  className="bg-default-200 text-default-800 flex size-8.75 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 md:h-12.5 md:w-12.5 md:rounded-2xl"
                >
                  <Icon icon="tabler:align-right" className="size-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="hs-overlay hs-overlay-open:translate-y-0 md:hs-overlay-open:top-24 hs-overlay-open:top-18 hs-overlay-open:opacity-100 fixed inset-x-0 top-0 z-110 mx-4 hidden h-50 -translate-y-full transform overflow-hidden bg-surface rounded-lg opacity-0 shadow-xl transition-all duration-300 [--body-scroll:true] md:mx-5"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="mobile-menu-label"
      >
        <div className="flex max-h-50 flex-col overflow-y-auto p-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => {
                const hash = item.href.split('#')[1]
                setCurrentHash(hash ? `#${hash}` : '')
                closeMenu()
              }}
              className="group text-default-600 hover:text-primary flex items-center p-1.5 text-base font-medium transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
