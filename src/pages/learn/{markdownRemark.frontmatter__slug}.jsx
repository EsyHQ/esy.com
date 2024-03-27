import React from "react"
import { graphql } from "gatsby"
import moment from 'moment'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from 'src/components/Layout'
import SEO from "src/components/SEO"
import { BlogPostWrapper, BlogPostInner, PrePostContainer, PostTitle, PostMeta, PrimaryMeta, FeatureImage } from 'src/theme/essays'



export default function LearnPostTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, date, featuredImage, journal_name, excerpt, featuredImagePath, slug } = frontmatter;
  const formattedPublishedDate = moment(date).format('MMM DD, YYYY').split(' ');
  const image = getImage(featuredImage?.childImageSharp?.gatsbyImageData);

  return (
    <Layout className="blog-layout">
      <SEO title={title} description={excerpt} image={featuredImagePath} />
      <BlogPostWrapper>
        <BlogPostInner>
          <PrePostContainer>
            <PostTitle>{title}</PostTitle>
            <PostMeta>
              <PrimaryMeta>
                <span>@Journal</span> {/* Updated for simplification */}
                <span className="divider">•</span>
                <span>{formattedPublishedDate.join(' ')}</span>
              </PrimaryMeta>
            </PostMeta>
            {image && <FeatureImage><GatsbyImage image={image} alt="Featured" /></FeatureImage>}
          </PrePostContainer>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </BlogPostInner>
      </BlogPostWrapper>
    </Layout>
  );
}


export const query = graphql`
  query LearnPostBySlug($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        journal_name
        excerpt
        featuredImagePath
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1400)
          }
        }
      }
    }
  }
`;
