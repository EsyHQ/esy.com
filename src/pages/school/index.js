import React from 'react'
import { graphql } from 'gatsby'



import { useSiteMetadata } from 'src/hooks/use-site-metadata'

import SEO from 'src/components/SEO'
import Layout from "src/components/Layout"
import PostsList from 'src/components/LearnTemplate/IndexPage/postsList'
import HeroSection from 'src/components/LearnTemplate/IndexPage/hero'
import NewsletterSection from 'src/components/LearnTemplate/newsletterSection'
import NewsletterHero from 'src/components/LearnTemplate/IndexPage/newsletterHero'


export default function LearnIndexPage({ data }) {
  const { edges } = data?.allMarkdownRemark

  return (<Layout>
    <main class="w-full antialiased">
      <HeroSection data={data} />
      <PostsList posts={edges} />
      <NewsletterSection />
    </main>
  </Layout>)
}

export const indexQuery = graphql`
   query LearnIndexQuery  {
      allMarkdownRemark(
        filter: { frontmatter: { featured: { gt: 0 } } }
        sort: { fields: [frontmatter___featured], order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              date(formatString: "MMM D, YYYY")
              author
              authorImage {
                childImageSharp {
                  gatsbyImageData(width: 1000, layout: FULL_WIDTH, placeholder: BLURRED, quality: 100, formats: [AUTO, WEBP, AVIF])
                }
              }
              category
              featured
              featuredImagePath
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 1000, layout: FULL_WIDTH, placeholder: BLURRED, quality: 100, formats: [AUTO, WEBP, AVIF])
                }
              }
            }
            excerpt
          }
        }
      }
    }`


export const Head = () => {
  const { description, image, siteUrl, type, twitterUsername } = useSiteMetadata()

  const meta = {
    title: "School | Esy",
    description,
    image,
    url: `${siteUrl}/school/`,
    type,
    twitterUsername,
  }

  return <SEO meta={meta} />
}
