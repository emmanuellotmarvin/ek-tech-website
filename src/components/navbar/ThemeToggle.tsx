'use client'

import Icon from '@/components/Icon'
import { useEffect, useState } from 'react'

type ThemeToggleProps = {
  labels: { light: string; dark: string }
}

const ThemeToggle = ({ labels }: ThemeToggleProps) => {
  // null until mounted: the real theme is only known in the browser
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {}
    setIsDark(next)
  }

  const label = isDark ? labels.light : labels.dark

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="bg-default-200 text-default-800 group relative flex size-8.75 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 md:h-12.5 md:w-12.5 md:rounded-2xl"
    >
      <div className="relative flex items-center justify-center overflow-hidden">
        <Icon icon="lucide:moon" className="size-4.5 transition-transform duration-300 group-hover:-translate-y-6 md:size-5 dark:hidden" />
        <Icon icon="lucide:moon" className="absolute size-4.5 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 md:size-5 dark:hidden" />
        <Icon icon="lucide:sun" className="hidden size-4.5 transition-transform duration-300 group-hover:-translate-y-6 md:size-5 dark:block" />
        <Icon icon="lucide:sun" className="absolute hidden size-4.5 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 md:size-5 dark:block" />
      </div>
    </button>
  )
}

export default ThemeToggle
