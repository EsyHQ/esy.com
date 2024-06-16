import React from 'react'
import { graphql } from 'gatsby'
import HomePageComponent from 'src/components/Page/Home/'
import SEO from 'src/components/SEO'




export default function HomePage({ data }) {
    return <HomePageComponent data={data} />
}



export const homePageQuery = graphql`
    query HomePageQuery  {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { journal_name: { eq: "essays" } } }
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
    const meta = {
        title: 'Esy - Your Personal AI Essay Writer',
        description: 'Create unique, original essays that reflect your personal style with Esy. Our AI ensures authenticity and helps you maintain your academic integrity.',
    }

    return <SEO meta={meta} />
}

