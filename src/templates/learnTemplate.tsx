import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import LearnPostHero from "src/components/LearnTemplate/PostPage/Hero";
import styled from "styled-components";


// Type definitions for the expected GraphQL query result
interface LearnPostTemplateQuery {
  markdownRemark: {
    html: string;
    frontmatter: {
      date: string;
      slug: string;
      title: string;
      journal_name?: string;
      excerpt: string;
      featuredImagePath?: string;
      featuredImage: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
}

// Define the props type, extending Gatsby's PageProps with the query result
type LearnPostTemplateProps = {
  data: LearnPostTemplateQuery; // Data from GraphQL query
};

const LearnPostTemplate: React.FC<LearnPostTemplateProps> = ({ data }) => {
  const { markdownRemark } = data; // Data fetched by the GraphQL query
  const { frontmatter, html } = markdownRemark;
  const {
    title,
    date,
    featuredImage,
    journal_name,
    excerpt,
    featuredImagePath,
    slug,
  } = frontmatter;

  // Use Gatsby's getImage helper to safely get the image data
  const postFeaturedImage = getImage(featuredImage.childImageSharp.gatsbyImageData);

  return (
    <Layout>
        <TemplateWrapper>
            <SEO title={title} description={excerpt} />
            <LearnPostHero
              postFeaturedImage={postFeaturedImage}
              metaData={{ title, journal_name, excerpt, date, slug }}
            />
            <ContentWrapper>
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
            </ContentWrapper>
        </TemplateWrapper>
    </Layout>
  );
};

export default LearnPostTemplate;

// GraphQL query to fetch data based on the slug passed in the page context
export const query = graphql`
  query LearnPostTemplateQuery($slug: String!) {
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



const TemplateWrapper = styled.div`
  background: rgb(12, 10, 29);
  padding: 0 2rem;
  width: 100%;

  p {  
    color: #fff;
    font-size: 1.13rem;
  }
  `;

  const ContentWrapper = styled.div`
    padding: 2rem;
    color: var(--color-white);
    display: flex;
    justify-content: flex-end;

    .blog-post-content {
        max-width: 70%;
        justify-content: end;
        line-height: 2rem;
        opacity: 0.8;
        }
`