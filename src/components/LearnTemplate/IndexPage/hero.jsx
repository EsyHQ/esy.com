import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import MainFeaturedPost from './mainFeaturedPost';
import FeaturedPostsList from './featuredPostsList';



export default function HeroSection({ posts }) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { featured: { gt: 0 } } }
        sort: { fields: [frontmatter___featured], order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              date(formatString: "MMM D, YYYY")
              author
              authorImage {
                childImageSharp {
                  gatsbyImageData(width: 100)
                }
              }
              category
              featured
              featuredImagePath
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `);

  const featuredPosts = data.allMarkdownRemark.edges;
  const mainFeaturedPost = featuredPosts[0].node;
  const otherFeaturedPosts = featuredPosts.slice(1);



  return (
    <section className="border-t border-b border-gray-100 bg-primary dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24 pt-20 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <MainFeaturedPost post={mainFeaturedPost} />
          
          <div className="space-y-8">
            <FeaturedPostsList posts={otherFeaturedPosts} />
          </div>
        </div>
      </div>
    </section>
  );
};
