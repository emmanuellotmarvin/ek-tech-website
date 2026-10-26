import type { Locale } from '@/i18n/config'
import type { StaticImageData } from 'next/image'

import processIcon from '@/assets/images/mockups/process-icon.svg'
import phoneEn from '@/assets/images/mockups/process-phone-en.svg'
import phonePt from '@/assets/images/mockups/process-phone-pt.svg'
import step1En from '@/assets/images/mockups/process-step-1-en.svg'
import step1Pt from '@/assets/images/mockups/process-step-1-pt.svg'
import step2En from '@/assets/images/mockups/process-step-2-en.svg'
import step2Pt from '@/assets/images/mockups/process-step-2-pt.svg'
import step3En from '@/assets/images/mockups/process-step-3-en.svg'
import step3Pt from '@/assets/images/mockups/process-step-3-pt.svg'

type ProcessMockups = {
  // Consultation meeting, requirements, proposal
  steps: StaticImageData[]
  // Project proposal on a phone
  phone: StaticImageData
}

// Illustrations of how a project starts, with the text in the page language
export const processMockups: Record<Locale, ProcessMockups> = {
  pt: { steps: [step1Pt, step2Pt, step3Pt], phone: phonePt },
  en: { steps: [step1En, step2En, step3En], phone: phoneEn },
}

export { processIcon }
