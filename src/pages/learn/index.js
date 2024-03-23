import React from 'react'
import { graphql } from 'gatsby'



import { useSiteMetadata } from 'src/hooks/use-site-metadata'

import SEO from 'src/components/SEO'
import Layout from "src/components/Layout"
import PostsList from 'src/components/LearnTemplate/IndexPage/postsList'
import CategorySection from 'src/components/LearnTemplate/categorySection'
import FeaturedPostsSection from 'src/components/LearnTemplate/IndexPage/featuredPostsSection'
import NewsletterSection from 'src/components/LearnTemplate/newsletterSection'



export default function LearnIndexPage({ data }) {
    const { edges } = data?.allMarkdownRemark

    return (<Layout>
              <main class="w-full antialiased">
                <FeaturedPostsSection posts={edges} />
                <CategorySection />
                <PostsList posts={edges} />
                <NewsletterSection />
              </main>
            </Layout>)
}



export const indexQuery = graphql`
    query LearnIndexQuery  {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { journal_name: { eq: "learn" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            date
                            title
                            slug
                            author
                            category
                            journal_name
                            excerpt
                            featured
                            featuredImagePath
                            featuredImage {
                                childImageSharp {
                                    gatsbyImageData(width: 800)
                                }
                            }
                        }
                    }
                }
            }
      }
`



export const Head = () => {
    const { description, image, siteUrl, type, twitterUsername } = useSiteMetadata()

    const meta = {
        title: "Learn | esy",
        description,
        image,
        url: `${siteUrl}/learn/`,
        type,
        twitterUsername,
    }

    return <SEO meta={meta} />
}
