import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import MainFeaturedPost from './mainFeaturedPost';
import FeaturedPostsList from './featuredPostsList';

interface HeroSectionProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          frontmatter: {
            slug: string;
            title: string;
            date: string;
            category: string;
            description: string;
            tags: string[];
            featuredImage: {
              childImageSharp: {
                gatsbyImageData: any;
              };
            };
          };
        };
      }[];
    };
  };
}


const Hero: React.FC<HeroSectionProps> = ({ data }) => {
  const featuredPosts = data.allMarkdownRemark.edges;
  const mainFeaturedPost = featuredPosts[0].node;
  const otherFeaturedPosts = featuredPosts.slice(1);

  console.log('all of the fucking dataa', data)


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


export default Hero