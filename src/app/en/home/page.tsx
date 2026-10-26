import SitePage, { generateMetadata as pageMetadata } from '@/site/home/page'

const params = Promise.resolve({ lang: 'en' })
export const generateMetadata = () => pageMetadata({ params })

export default function Page() {
  return <SitePage params={params} />
}