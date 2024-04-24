import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import LearnPostHero from "src/components/LearnTemplate/PostPage/Hero";
import styled from "styled-components";
import Sidebar from "src/components/LearnTemplate/PostPage/Sidebar";

// Type definitions for the expected GraphQL query result
interface LearnPostTemplateQuery {
  markdownRemark: {
    html: string;
    frontmatter: {
      date: string;
      slug: string;
      title: string;
      category: string;
      author: string;
      authorImage: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
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
    category,
    featuredImage,
    journal_name,
    excerpt,
    featuredImagePath,
    slug,
    author,
    authorImage,
  } = frontmatter;

  // Use Gatsby's getImage helper to safely get the image data
  const postFeaturedImage = getImage(featuredImage.childImageSharp.gatsbyImageData);

  return (
    <Layout>
        <TemplateWrapper>
            <SEO title={title} description={excerpt} />
            <LearnPostHero
              postFeaturedImage={postFeaturedImage}
              metaData={{ title, author, authorImage, journal_name, excerpt, date, slug, category }}
            />
            <ContentWrapper className="w-full">
                <Sidebar />
                <div className="blog-post-content flex-none max-w-70p justify-end leading-8 opacity-80 pl-12" dangerouslySetInnerHTML={{ __html: html }} />
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
        category
        author
        authorImage {
          childImageSharp {
            gatsbyImageData(width: 100)
          }
        }
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
  padding: 2rem;
  width: 100%;
  max-width: 1300px;

  p {  
    font-size: 1.13rem;
  }
  `;

  const ContentWrapper = styled.div`
    color: var(--color-white);
    display: flex;
    justify-content: flex-end;
`