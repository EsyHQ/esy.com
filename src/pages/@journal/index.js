import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'
import { Grid } from '@mui/material'


import Layout from "src/components/Layout"
import SEO from "src/components/SEO" 
import PostCard from './postCard'


const mainTheme = {
    type: 'mainTheme',

    container: {
        maxWidth: '1300px',
        flexFlow: 'row nowrap',
    },

    title: {
        fontSize: '32px',
    },

    featuredImg: {
        maxWidth: '742px',
        maxHeight: '415px'
    },
    postCardTitle: {
        margin: '0 0 10px 0'
    },
      postCardContent: {
        padding: '0 2%',
    }
}


const midTheme = {
    type: 'midTheme',
    container: {
        maxWidth: '625px',
        maxHeight: '300px',
        flexFlow: 'row wrap',
    },
    title: {
        fontSize: '22px',
    },
    featuredImg: {
        maxWidth: '625px',
        maxHeight: '227px',
        objectFit: 'cover',
        // objectPosition: '0 20%',
    },
    postCardTitle: {
        margin: '20px 0 0 0'
    },
    postCardContent: {
        padding: '0',
    },
}

const thumbnailTheme = {
    type: 'thumbnailTheme',
    container: {
        maxWidth: '400px',
        flexFlow: 'row wrap',
    },
    title: {
        fontSize: '22px',
    },
    featuredImg: {
        maxWidth: '400px',
        maxHeight: '195px'
    },
    postCardTitle: {
        margin: '20px 0 0 0'
    },
      postCardContent: {
        padding: '0',
    }

}


const JournalIndexPage = ({ data }) => {
    const { edges } = data?.allMarkdownRemark

    const totalPosts = edges.length

    

    return (<Layout>
                <BlogWrapper>
                <Grid 
                    container 
                    direction="row"
                    spacing={{ xs: 0, sm: 3, md: 6, }}
                >
                    {edges.map((edge, index) => {
                        const { excerpt } = edge?.node?.frontmatter
                        const [ firstSentence, secondSentence ] = excerpt.split('.')
                        const theme = index === 0 ? mainTheme : midTheme

                        if (index === 0) {
                            return <ThemeProvider key={index} theme={mainTheme}><Grid item xs={12}><PostCard theme={mainTheme} postData={edge} firstSentence={firstSentence} secondSentence={secondSentence}  /></Grid></ThemeProvider>
                        } else if (index > 0 && index < 3) {
                            return <ThemeProvider key={index} theme={midTheme}><Grid item xs={12} sm={6}><PostCard theme={midTheme} postData={edge} firstSentence={firstSentence} secondSentence={secondSentence} /></Grid></ThemeProvider>
                        } else if (index > 2 && index < 6 ) {
                            return <ThemeProvider  key={index} theme={midTheme}><Grid item xs={12} sm={6}><PostCard  theme={midTheme} postData={edge} firstSentence={firstSentence} secondSentence={secondSentence} /></Grid></ThemeProvider>
                        } else {
                            return <ThemeProvider  key={index} theme={midTheme}><Grid item xs={12} sm={6}><PostCard theme={midTheme} postData={edge} firstSentence={firstSentence} secondSentence={secondSentence} /></Grid></ThemeProvider>
                        }
                        })}
                </Grid>
                </BlogWrapper>
            </Layout>)
}


export default JournalIndexPage



export const indexQuery = graphql`
    query JournalIndexQuery  {
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


export const Head = () => {
    console.log('from blog index head')
    return ( <>
       <title>Journal | esy</title>
       <meta name="description" content="Hello World" />
     </>)
}
    

const BlogWrapper = styled.section`
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

