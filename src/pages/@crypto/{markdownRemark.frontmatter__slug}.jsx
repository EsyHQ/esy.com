import * as React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"
import Layout from 'src/components/Layout'


export default function JournalTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (<PageWrapper>
                <Layout>
                    <PageInner>
                        <div>
                        <h1>{frontmatter.title}</h1>
                        <h2>{frontmatter.date}</h2>
                        <div
                        dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                    </PageInner>
                </Layout>
            </PageWrapper>)
        }


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



const PageWrapper = styled.div`
  color: #fff;

  h1 {
    color: #fff;
  }
`

const PageInner = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    background: rgba(12,10,29);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
`