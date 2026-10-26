import SiteLayout, { generateMetadata as siteMetadata } from '@/site/layout'

const params = Promise.resolve({ lang: 'en' })
export const generateMetadata = () => siteMetadata({ params })

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteLayout params={params}>{children}</SiteLayout>
}
