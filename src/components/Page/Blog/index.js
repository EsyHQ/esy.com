import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'


import Layout from "src/components/Layout"
import SEO from "src/components/SEO"


const BlogIndexPage = ({ data }) => {
    const { edges } = data.allGhostPost

    return (<Layout>
                <SEO title="Blog" />
                {edges.map(edge => {
                    const { title, slug } = edge.node
                    return <div>{title}</div>
                })}
            </Layout>)
}


export default BlogIndexPage

export const pageQuery = graphql`
  query MyQuery {
    allGhostPost {
            edges {
            node {
                title
            }
            }
        }

  }
`