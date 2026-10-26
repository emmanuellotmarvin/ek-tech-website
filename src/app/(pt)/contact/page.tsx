import SitePage, { generateMetadata as pageMetadata } from '@/site/(pages)/contact/page'

const params = Promise.resolve({ lang: 'pt' })
export const generateMetadata = () => pageMetadata({ params })

export default function Page() {
  return <SitePage params={params} />
}