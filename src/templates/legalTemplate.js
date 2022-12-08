import React from 'react'
import styled from 'styled-components'



const LegalTemplate = () => {
    return (<PageWrapper>
        
            </PageWrapper>)
}


export default LegalTemplate



export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`



const PageWrapper = styled.div``
