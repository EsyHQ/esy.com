import React from "react"
import { useSiteMetadata } from "src/hooks/use-site-metadata"

interface SEOProps {
  meta: {
    title: string
    description: string
    image: string
    url: string
    type: string
    twitterUsername: string
    structuredData: object
  }

  pathname: string
  children: React.ReactNode
}


const SEO: React.FC<SEOProps> = ({ meta, pathname, children }) => {

  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername, type: defaultType, structuredData: {} } = useSiteMetadata()

  const seo = {
    title: meta?.title || defaultTitle,
    description: meta?.description || defaultDescription,
    image: meta?.image || `${image}`,
    url: meta?.url || `${siteUrl}${pathname || ``}`,
    type: meta?.type || defaultType,
    twitterUsername: meta?.twitterUsername || twitterUsername,
    structuredData: meta?.structuredData || {},
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
      <script type="application/ld+json">
        {JSON.stringify(seo.structuredData)}
      </script>
      {children}
    </>
  )
}

export default SEO