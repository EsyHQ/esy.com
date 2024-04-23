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
      <HeroDate>Published on Dec 23, 2024</HeroDate>
      <h1>{title}</h1>
      <p>{excerpt}</p>
      <div className="author-meta flex items-center gap-3">
        <div className="flex items-center gap-3">
        {imageData && (
          <GatsbyImage
            image={imageData}
            alt={author}
            className="w-10 h-10 rounded-full"
          />
        )}
        <div className="text-lg font-medium leading-tight text-white dark:text-white">
          <div>{author}</div>
          <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
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
  color: var(--color-white);
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  color: #fff;
  padding-right: 50px;

  h1 {
    font-size: 3rem;
    line-height: 3.8rem;
  }

  p {
    font-size: 1.13rem;
    opacity: 0.4;
  }

  .author-meta {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const HeroDate = styled.div`
  font-size: 0.9rem;
  color: var(--color-gray-400);
  opacity: 0.7;
`;