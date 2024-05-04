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
        title: 'esy.com - The Best Ai Essay Writer',
        description: 'esy Journal is the leading platform for crafting rich and expressive essays with the help of our powerful and trusted AI writing assistant. Unleash your creativity and produce your most impressive work today.',
        // description: 'esy Journal is the most advanced essay writing platform for composing rich and expressive essays. Unleash your most creative work today with our powerful and trusted AI writing assistant.',
    }

    return <SEO meta={meta} />
}

