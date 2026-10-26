import Image from 'next/image'

import symbol from '@/assets/images/brand/ekt-symbol.png'

type LogoProps = {
  // Height of the logo and size of the name, e.g. "h-8 text-2xl"
  className: string
}

// EK Tech logo: the EKT symbol and the company name.
// The name is text, so it follows the light/dark theme; the blue symbol works on both.
const Logo = ({ className }: LogoProps) => {
  return (
    <span className={`font-heading text-default-900 flex items-center gap-[0.35em] leading-none font-semibold tracking-tight ${className}`}>
      <Image src={symbol} alt="" sizes="64px" className="h-full w-auto" />
      EK Tech
    </span>
  )
}

export default Logo
