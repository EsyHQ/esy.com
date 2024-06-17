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
        description: 'Write your next paper with Esy, an AI assistant that learns your writing style to create original, authentic essays.',
        
        structuredData: {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            name: 'Esy - Your Personal AI Essay Writer',
            description: 'Write your next paper with Esy, an AI assistant that learns your writing style to create original, authentic essays.',
            url: 'https://www.esy.com',
            logo: 'https://www.esy.com/images/esy-brand-512.png',
            image: 'https://www.esy.com/images/esy-brand-bg.jpeg',
            sameAs: [
                'https://x.com/esydotcom',
                'https://www.facebook.com/@esydotcom',
                'https://www.linkedin.com/company/esydotcom',
                'https://www.instagram.com/esydotcom',
            ],
        }
    }

    return <SEO meta={meta} />
}

