import React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "src/components/Layout";
import LearnPostHero from "src/components/LearnTemplate/PostPage/Hero";
import styled from "styled-components";
import Sidebar from "src/components/LearnTemplate/PostPage/sidebar";

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
type LearnPostTemplateProps = PageProps<LearnPostTemplateQuery>;

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
    slug,
    author,
    authorImage,
  } = frontmatter;

  // Use Gatsby's getImage helper to safely get the image data
  const postFeaturedImage = getImage(featuredImage.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <div className="bg-[#0c0a1d] p-5 w-full max-w-[1300px]">
        <LearnPostHero
          postFeaturedImage={postFeaturedImage}
          metaData={{ title, author, authorImage, journal_name, excerpt, date, slug, category }}
        />
        <div className="flex flex-col lg:flex-row w-full text-white justify-end">
          <Sidebar />
          <div
            className="text-base flex-none mt-24 lg:mt-0 justify-end leading-8 opacity-80 lg:pl-12 lg:max-w-70p"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default LearnPostTemplate;

export const Head: React.FC<{ data: LearnPostTemplateQuery }> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, excerpt } = frontmatter;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={excerpt} />
    </>
  );
};

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
`;