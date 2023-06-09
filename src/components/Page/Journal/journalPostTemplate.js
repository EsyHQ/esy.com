
import React from "react"
import moment from 'moment'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Post from 'src/components/common/Post'
import PostDate from 'src/components/common/Post/postDate'
import PrimaryPostTag from 'src/components/common/Post/primaryPostTag'

import Layout from 'src/components/Layout'

import SEO from "src/components/SEO"

import { BlogPostWrapper, BlogPostInner, PrePostContainer, PostTitle, PostMeta, PrimaryMeta, FeatureImage } from './styles'


export default function JournalPostTemplate({ data }) {
  const { markdownRemark: { frontmatter, html } } = data 
  const { title, journal_name, date } = frontmatter

  const formattedPublishedDate = moment(date).local().format('MMM DD YYYY').split(' ')

  const featuredImage = getImage(frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)

return (
    <Layout className="blog-layout">
      <BlogPostWrapper>
        <BlogPostInner>
          <PrePostContainer>
            <PostTitle>{title}</PostTitle>
            <PostMeta>
                <PrimaryMeta>
                    <PrimaryPostTag postTag={"@Journal"} />
                    <span className="divider">•</span>
                    <PostDate publishedPostDate={formattedPublishedDate} />
                </PrimaryMeta>
                {/* <ReadingTime time={reading_time} /> */}
            </PostMeta>

            <FeatureImage><GatsbyImage image={featuredImage} /> </FeatureImage>

          </PrePostContainer>
          
        <Post>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
        </Post>

        {/* <PostPagination nextPostSlug={nextPostSlug} prevPostSlug={prevPostSlug} /> */}
        </BlogPostInner>
        
      </BlogPostWrapper>
    </Layout>
  )
}





export const Head = ({ data, location }) => {
  const siteUrl = data?.site?.siteMetadata?.siteUrl
  const domain = "https://www.esy.com"
  const url = `${domain}${location.pathname}`
  const { title, journal_name, date, excerpt, featuredImage: { publicURL } } = data?.markdownRemark?.frontmatter

  const meta = { 
    title,
    description: excerpt,
    url,
    type: 'article',
    twitterUsername: '@esyjournal',
    image: `${domain}${publicURL}`,
  }

  return <SEO meta={meta} />
}


