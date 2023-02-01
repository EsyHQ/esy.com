import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

import Layout from 'src/components/Layout'



const IndexPage = (props) => {
    const { data, location } = props
    const { edges } = data && data.allMarkdownRemark
    const totalPosts = edges.length

    return (<PageWrapper>
                <Layout>
                    <PageInner>
                        <PageTitle>@Crypto</PageTitle>
                        <ListElement>
                            {edges.map((edge, index) => {
                                const { frontmatter } = edge.node
                                console.log(frontmatter, 'frontmatter')
                                const { title, slug, tags } = frontmatter
                                const path = location.pathname + slug

                                if (tags.includes('@crypto')) {
                                    return <ListItem><Link to={path}>{title}</Link></ListItem>
                                }
                            })}
                        </ListElement>
                    </PageInner>
                </Layout>
            </PageWrapper>)
}



export default IndexPage



export const pageQuery = graphql`
  query CryptoIndexQuery {
    allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              date
              tags
            }
          }
        }
      }
    }
`


const PageWrapper = styled.div`
    color: #fff;
    width: 100%;
    height: 100%;
`

const PageInner = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    background: rgba(12,10,29);
`


const PageTitle = styled.h1`
    color: #fff;
    margin: 0;
    width: 100%;
    text-align: center;
    font-size: 42px;
`

const ListElement = styled.ul`
    list-style-type: none;
    width: 100%;
    margin-top: 50px;
`

const ListItem = styled.li`
    color: #fff;
    text-align: center;
    font-size: 21px;
    margin-top: 25px;
`