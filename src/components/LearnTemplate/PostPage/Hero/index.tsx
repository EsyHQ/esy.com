import React from 'react';

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
        <>
            <div className="relative bg-gray-800">
                <HeroImage postFeaturedImage={postFeaturedImage} />
                <HeroMeta metaData={metaData} />
            </div>
        </>

    );
}


export default Hero;