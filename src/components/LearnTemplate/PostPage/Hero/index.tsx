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
        category: string;
        author: string;
    };
}


const Hero: React.FC<HeroProps> = ({ postFeaturedImage, metaData }) => {
    return (
            <div className="relative mt-24 mx-0 mb-6 flex flex-col justify-between lg:flex-row">
                <HeroImage postFeaturedImage={postFeaturedImage} />
                <HeroMeta metaData={metaData} />
            </div>

    );
}

export default Hero;



// Styles

const HeroWrapper = styled.div`
    position: relative;
    margin: 100px 0 25px 0;
    display: flex;
    justify-content: space-between;
`;  