import React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import LearnPostHero from "src/components/LearnTemplate/PostPage/Hero";
// Import styled components as needed






// Define the expected shape of the GraphQL query result
interface LearnPostBySlugQuery {
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

// Define the props type, extending the default PageProps with your query result
type LearnPostTemplateProps = PageProps<LearnPostBySlugQuery>;

const LearnPostTemplate: React.FC<LearnPostTemplateProps> = ({ data }) => {
  const { markdownRemark } = data;
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
  const postFeaturedImage = getImage(featuredImage.childImageSharp.gatsbyImageData);

  const heroMeta = {
    title,
    journal_name,
    excerpt,
    date,
    slug,
  };

  return (
    <Layout className="blog-layout">
      {/* <SEO /> */}
      <LearnPostHero
        postFeaturedImage={postFeaturedImage}
        metaData={heroMeta}
      />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export default LearnPostTemplate;

export const query = graphql`
  query LearnPostBySlug($slug: String!) {
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
