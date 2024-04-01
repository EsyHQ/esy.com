import React from 'react';


interface HeroMetaProps {
    metaData: {
        title: string;
        journal_name?: string;
        excerpt: string;
        date: string;
        slug: string;
    };
}



const HeroMeta: React.FC<HeroMetaProps> = ({ metaData: { title, excerpt } }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{excerpt}</p>
        </div>
    );
}

export default HeroMeta;