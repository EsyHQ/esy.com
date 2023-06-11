import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'
import { Grid } from '@mui/material'



import Layout from "src/components/Layout"
import SEO from "src/components/SEO" 
import PostList from 'src/components/Post/postList'

import PostCard from './postCard'

import { mainTheme, midTheme } from 'src/theme'


const EssayIndexPage = ({ data }) => {
    const { edges } = data?.allMarkdownRemark

    const totalPosts = edges.length

    

    return (<Layout>
                <PageWrapper>
                     <PostList posts={edges} />
                </PageWrapper>
            </Layout>)
}


export default EssayIndexPage



export const indexQuery = graphql`
    query EssaylIndexQuery  {
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


export const Head = ({ data }) => {
    return ( <>
       <title>Essays | esy</title>
       <meta name="description" content="Hello World" />
     </>)
}
    

const PageWrapper = styled.section`
    height: 100%;
    width: 100%;
    background: rgba(12,10,29);
    padding: 40px 5%;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-between;

    .gatsby-image-wrapper-constrained {
        width: 100%;
    }
    
    img {
        border-radius: 6px;
        border: 1px solid rgba(0,0,0,0.22);
        box-shadow: 0px 20px 20px 0px rgba(0,0,0,0.3);
    }
`