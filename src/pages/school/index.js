import React from 'react'
import { graphql } from 'gatsby'

import { useSiteMetadata } from 'src/hooks/use-site-metadata'

import SEO from 'src/components/SEO'
import Layout from "src/components/Layout"
import PostsList from 'src/components/LearnTemplate/IndexPage/postsList'
import HeroSection from 'src/components/LearnTemplate/IndexPage/hero'
import NewsletterSection from 'src/components/LearnTemplate/newsletterSection'
import IntroSection from 'src/components/LearnTemplate/IndexPage/IntroSection'
import NewsletterHero from 'src/components/LearnTemplate/IndexPage/newsletterHero'

export default function SchoolIndexPage({ data }) {
  const { edges: featuredEdges } = data.featuredPosts
  const { edges: nonFeaturedEdges } = data.nonFeaturedPosts

  const title = "School"
  const descriptionStart = "Enhance your essay writing with AI and prompt engineering."
  const descriptionEnd = "Expert tips delivered to your inbox, no spam."


  return (
    <Layout>
      <main class="w-full antialiased">
        <IntroSection  title={title} descriptionStart={descriptionStart} descriptionEnd={descriptionEnd}/>
        <HeroSection data={{ allMarkdownRemark: { edges: featuredEdges } }} />
        <PostsList posts={nonFeaturedEdges} />
        <NewsletterSection newsletterTitle={title} descriptionStart={descriptionStart} descriptionEnd={descriptionEnd} />
      </main>
    </Layout>
  )
}


export const SchoolIndexQuery = graphql`
  query SchoolIndexQuery {
    featuredPosts: allMarkdownRemark(
      filter: { frontmatter: { featured: { gt: 0 }, slug: {  regex: "^/school/" } } }
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
    nonFeaturedPosts: allMarkdownRemark(
      filter: { frontmatter: { featured: { lte: 0 }, slug: {  regex: "^/school/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
  }
`

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
