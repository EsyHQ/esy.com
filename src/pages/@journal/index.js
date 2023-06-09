import React from 'react'
import { graphql } from 'gatsby'
import JournalIndexComponent from 'src/components/Page/Journal/index.js'



export default function JournalIndexPage({ data }) {
  return <JournalIndexComponent data={data} />
}



export const journalIndexQuery = graphql`
  query JournalIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { journal_name: { eq: "@journal" } } }
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
