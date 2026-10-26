export default function StaticRedirect({ href, lang }: { href: string; lang: string }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <link rel="canonical" href={`https://ek-tech.emmanuelmarvin.com${href}`} />
      <p><a href={href}>{lang === 'pt' ? 'Continuar para EK Tech' : 'Continue to EK Tech'}</a></p>
    </>
  )
}
