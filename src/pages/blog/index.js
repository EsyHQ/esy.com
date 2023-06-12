import React from 'react'
import { graphql } from 'gatsby'
import { BlogWrapper } from '../../components/Page/Journal/styles'
import Layout from "src/components/Layout"
import PostList from 'src/components/Post/postList'
import SEO from 'src/components/Seo'
import { useSiteMetadata } from 'src/hooks/use-site-metadata'



export default function BlogIndexPage({ data }) {
    const { edges } = data?.allMarkdownRemark

    return (<Layout>
                <BlogWrapper>
                    <PostList posts={edges} />
                </BlogWrapper>
            </Layout>)
}


export const indexQuery = graphql`
    query BlogIndexQuery  {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { journal_name: { eq: "blog" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            date
                            title
                            slug
                            journal_name
                            excerpt
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
        title: "Blog | esy",
        description,
        image,
        url: `${siteUrl}/blog`,
        type,
        twitterUsername,
    }
    
    return <SEO meta={meta} />
}
