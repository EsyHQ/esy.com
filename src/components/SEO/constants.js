const blogPostMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
     property: `og:type`,
     content: "article",
    },
   //  {
   //   property: `og:image`,
   //   content: og_image,
   //  },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
     name: `twitter:card`,
     content: `summary`,
    }, 
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]


  export default blogPostMeta