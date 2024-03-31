import React from 'react';

import HeroImage from './HeroImage';
import HeroMeta from './HeroMeta';

// Define the structure of the props expected by the Hero component.
interface HeroProps {
  data: {
    featuredImage?: IGatsbyImageData; // Optional, adjust according to your needs
    // Add other properties from `data` as required, for example:
    // title?: string;
    // date?: string;
    // author?: {
    //   name: string;
    //   avatar: IGatsbyImageData;
    // };
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { featuredImage } = data;
  return (
    <div className="hero">
      <HeroMeta metaData={data} />
      <HeroImage heroImage={featuredImage} /> // Assuming HeroImage expects a prop named `heroImage`
    </div>
  );
};

export default Hero;
