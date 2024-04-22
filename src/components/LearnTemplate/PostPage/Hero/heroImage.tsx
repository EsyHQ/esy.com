import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';


// Define the prop types for the component
interface HeroImageProps {
    postFeaturedImage?: IGatsbyImageData;
}


const HeroImage: React.FC<HeroImageProps> = ({ postFeaturedImage }) => {
    const data = useStaticQuery(graphql`
        query {
            defaultImage: file(relativePath: { eq: "images/mdImages/esy-bg-img.jpeg" }) {
                childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    `);

     // Use default image if heroImage is not provided
  const displayImage = postFeaturedImage ?? data.defaultImage.childImageSharp.gatsbyImageData;

  return <HeroImageWrapper><GatsbyImage image={displayImage} alt="Hero Image" /></HeroImageWrapper>;
}

export default HeroImage;

const HeroImageWrapper = styled.div`
    overflow: hidden;
    order: 1;
    width: 100%;
    .gatsby-image-wrapper {
        height: 100%;
        border-radius: 16px;
    }
    `;