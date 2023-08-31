import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'src/components/SEO'
import JournalPostTemplate from 'src/components/Page/Journal/journalPostTemplate'



export default function AfricaPostPage({ data }) {
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



export const Head = ({ data, location }) => {
  const siteUrl = data?.site?.siteMetadata?.siteUrl
  const domain = "https://www.esy.com"
  const url = `${domain}${location.pathname}`
  const { title, journal_name, date, excerpt, featuredImagePath } = data?.markdownRemark?.frontmatter
  const assetURL = "https://assets.esy.com"
  const meta = { 
    title,
    description: excerpt,
    url,
    type: 'article',
    twitterUsername: '@esyjournal',
    image: `${assetURL}${featuredImagePath}`,
  }
  
  return <SEO meta={meta} />
}