import React from 'react'
import { graphql } from 'gatsby'
import AIIndexComponent from 'src/components/Page/AI/index.js'
import SEO from 'src/components/SEO'
import { useSiteMetadata } from 'src/hooks/use-site-metadata'


export default function AIIndexPage({ data }) {
  return <AIIndexComponent data={data} />
}


export const aiIndexQuery = graphql`
  query JournalIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { journal_name: { eq: "@ai" } } }
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
        title: "Journal | esy",
        description,
        image,
        url: `${siteUrl}/@journal`,
        type,
        twitterUsername,
    }
    
    return (<SEO meta={meta} />)
}
