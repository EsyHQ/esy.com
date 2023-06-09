import React from 'react'
import { graphql } from 'gatsby'
import JournalPostTemplate from 'src/components/Page/Journal/journalPostTemplate'



export default function JournalPostPage({ data }) {
  return <JournalPostTemplate data={data} />
}


export const journalPostQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        journal_name
        excerpt
        featuredImage {
            childImageSharp {
                gatsbyImageData(width: 1400)
            }
            publicURL
        }
      }
    }
  }
`