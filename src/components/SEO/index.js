import React from "react"
import { useSiteMetadata } from "src/hooks/use-site-metadata"



const SEO = ({ meta, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername, type: defaultType } = useSiteMetadata()

  const seo = {
    title: meta?.title || defaultTitle,
    description: meta?.description || defaultDescription,
    image: meta?.image || `${image}`,
    url: meta?.url || `${siteUrl}${pathname || ``}`,
    type: meta?.type || defaultType,
    twitterUsername: meta?.twitterUsername || twitterUsername,
  }


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
      {children}
    </>
  )
}

export default SEO