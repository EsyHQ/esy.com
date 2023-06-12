
import React from "react"
import { graphql } from "gatsby"
import moment from 'moment'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Post from 'src/components/common/Post'
import PostDate from 'src/components/common/Post/postDate'
import PrimaryPostTag from 'src/components/common/Post/primaryPostTag'
import PostPagination from 'src/components/common/Post/postPagination'

import Layout from 'src/components/Layout'

import SEO from "src/components/SEO"

import { BlogPostWrapper, BlogPostInner, PrePostContainer, PostTitle, PostMeta, PrimaryMeta, FeatureImage } from 'src/components/common/Post/blogPostStyles'



export default function JournalPostTemplate({ data, pageContext: { nextPostSlug, prevPostSlug }}) {
  
  const { markdownRemark: { frontmatter, html } } = data 
  const { title, journal_name, date } = frontmatter
  const formattedPublishedDate = moment(date).local().format('MMM DD YYYY').split(' ')
  const featuredImage = getImage(frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)

return (
    <Layout className="blog-layout">
      <BlogPostWrapper>
        <BlogPostInner>
          <PrePostContainer>
            <PostTitle>{frontmatter.title}</PostTitle>
            <PostMeta>
                <PrimaryMeta>
                    <PrimaryPostTag postTag={"@Journal"} />
                    <span className="divider">•</span>
                    <PostDate publishedPostDate={formattedPublishedDate} />
                </PrimaryMeta>
            </PostMeta>

            <FeatureImage><GatsbyImage image={featuredImage} /> </FeatureImage>

          </PrePostContainer>
          <Post>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
          </Post>
        </BlogPostInner>
        
      </BlogPostWrapper>
    </Layout>
  )
}

export const Head = ({ data, location }) => {
  const siteUrl= data?.site?.siteMetadata?.siteUrl
  const domain = "https://www.esy.com"
  const assetsUrl = "https://assets.esy.com"
  const url = `${domain}${location.pathname}`
  const { title, journal_name, date, excerpt, featuredImagePath } = data?.markdownRemark?.frontmatter

  const meta = { 
    title,
    description: excerpt,
    url,
    type: 'article',
    twitterUsername: '@esyjournal',
    image: `${assetsUrl}${featuredImagePath}`,
  }

  return <SEO meta={meta} />
}



export const pageQuery = graphql`
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