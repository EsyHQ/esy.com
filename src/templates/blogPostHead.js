import React from "react"
import SEO from "src/components/SEO"


export const Head = ({ data: { ghostPost } }) =>  {
    const { title,  feature_image, og_title, og_image, og_url, twitter_image, 
            meta_description, excerpt, slug } = ghostPost


    const ogTitle = og_title || title
    const ogType = `article`
    const ogImage = og_image || twitter_image || feature_image
    const ogURL = og_url || `https://www.esy.com/blog/${slug}`
    const ogDescription = meta_description || excerpt

    const meta = {
        "title": ogTitle,
        "description": ogDescription,
        "image": ogImage,
        "url": ogURL,
        "type": ogType,
      }

      console.log('hello from Blog Head', ghostPost)
      console.log(meta, 'meta')
    return (<SEO meta={meta} />)
  }


// export default Head