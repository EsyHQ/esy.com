import React from "react"
import { useSiteMetadata } from "src/hooks/use-site-metadata"

const SEO = ({ meta, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername, type: defaultType } = useSiteMetadata()

  const seo = {
    title: meta.title || defaultTitle,
    description: meta.description || defaultDescription,
    image: meta.image || `${siteUrl}${image}`,
    url: meta.url || `${siteUrl}${pathname || ``}`,
    type: meta.type || defaultType
  }

  console.log(seo, 'seooooo')

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title}/>
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      {children}
    </>
  )
}

export default SEO