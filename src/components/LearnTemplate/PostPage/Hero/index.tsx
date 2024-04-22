import React from 'react';
import styled from 'styled-components';


import HeroImage from './heroImage';
import HeroMeta from './heroMeta';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface HeroProps {
    postFeaturedImage?: IGatsbyImageData;
    metaData: {
        title: string;
        journal_name?: string;
        excerpt: string;
        date: string;
        slug: string;
    };
}


const Hero: React.FC<HeroProps> = ({ postFeaturedImage, metaData }) => {
    return (
            <HeroWrapper>
                <HeroImage postFeaturedImage={postFeaturedImage} />
                <HeroMeta metaData={metaData} />
            </HeroWrapper>

    );
}


export default Hero;



// Styles

const HeroWrapper = styled.div`
    position: relative;
    background-color: var(--color-gray-800);
    margin: 150px 0 50px 0px;
    display: flex;
    `;  