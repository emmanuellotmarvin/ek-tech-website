import SitePage, { generateMetadata as pageMetadata } from '@/site/(pages)/about/page'

const params = Promise.resolve({ lang: 'pt' })
export const generateMetadata = () => pageMetadata({ params })

export default function Page() {
  return <SitePage params={params} />
}