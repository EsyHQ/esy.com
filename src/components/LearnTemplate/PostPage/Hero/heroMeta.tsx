import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { getCategoryColorTheme } from 'src/components/LearnTemplate/utils';
interface HeroMetaProps {
  metaData: {
    title: string;
    journal_name?: string;
    excerpt: string;
    date: string;
    slug: string;
    category: string;
    author: string;
    authorImage?: {
      childImageSharp?: {
        gatsbyImageData?: IGatsbyImageData;
      };
    };
  };
}

const HeroMeta: React.FC<HeroMetaProps> = ({
  metaData: { title, author, authorImage, excerpt, date, category },
}) => {
  const imageData = authorImage?.childImageSharp?.gatsbyImageData;
//   const gatsbyImageData = getImage(imageData); Investigate why this had to be removed for type purposes. 
const categoryColorTheme = getCategoryColorTheme(category);

  return (
    <HeroMetaWrapper>
      <div className="text-sm font-normal text-shadow-purple opacity-70">Published on {date}</div>
      <div className="article-meta ">
        <h1 className="font-medium text-white">{title}</h1>
        <p className="text-shadow-purple font-light excerpt ">{excerpt}</p>
      </div>
     
      <div className="author-meta flex items-center gap-3">
        <div className="flex items-center gap-3">
        {imageData && (
          <GatsbyImage
            image={imageData}
            alt={author}
            className="w-10 h-10 rounded-full"
          />
        )}
        <div className="text-md font-medium leading-tight text-white dark:text-white">
          <div>{author}</div>
          <div className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">
            Founder, esy.com
          </div>
        </div>
        </div>
       

        <div className="bg-gray-600 w-px h-10"></div>
        <span className={`${categoryColorTheme} text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded`}>
            {category}
        </span>
      </div>
    </HeroMetaWrapper>
  );
};

export default HeroMeta;

// Styles
const HeroMetaWrapper = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding-right: 50px;

  h1 {
    font-size: 3rem;
    line-height: 3.8rem;
  }

  p {
    font-size: 1.13rem;
    margin-top: 1rem;
  }

  .author-meta {
    gap: 1rem;
    margin-top: 1rem;
  }
`;