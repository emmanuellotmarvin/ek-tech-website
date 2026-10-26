'use client'

import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/pt'
import { preline } from '@/utils/preline'
import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

type AppProvidersWrapperProps = {
  children: React.ReactNode
  lang: Locale
  navbar: Dictionary['navbar']
  footer: Dictionary['footer']
}

const AppProvidersWrapper = ({ children, lang, navbar, footer }: AppProvidersWrapperProps) => {
  useEffect(() => {
    preline.init()
  }, [])

  return (
    <>
      <Navbar lang={lang} t={navbar} />
      {children}
      <Footer lang={lang} t={footer} />
    </>
  )
}

export default AppProvidersWrapper
