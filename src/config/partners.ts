import type { StaticImageData } from 'next/image'

import agrovetLogo from '@/assets/images/partners/agrovet.png'
import auraLogo from '@/assets/images/partners/aura.png'
import namutequeliuaLogo from '@/assets/images/partners/namutequeliua.png'

export type PartnerLogo = {
  name: string
  logo: StaticImageData
  // The logos are transparent: each one needs the background it was designed for
  background: 'white' | 'black'
}

// In the same order as the partners and the testimonials in the dictionaries
export const partnerLogos: PartnerLogo[] = [
  { name: 'Agrovet e Serviços', logo: agrovetLogo, background: 'white' },
  { name: 'Namutequeliua Comercial', logo: namutequeliuaLogo, background: 'white' },
  { name: 'Aura Imobiliária', logo: auraLogo, background: 'black' },
]

export const logoBackgroundClass: Record<PartnerLogo['background'], string> = {
  white: 'bg-white',
  black: 'bg-black',
}
