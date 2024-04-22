import React from 'react';
import styled from 'styled-components';

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
        <HeroMetaWrapper>
            <HeroDate>Published on Dec 23, 2024</HeroDate>
            <h1>{title}</h1>
            <p>{excerpt}</p>
        </HeroMetaWrapper>
    );
}

export default HeroMeta;


// Styles
const HeroMetaWrapper = styled.div`
    // padding: 2rem;
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
        opacity: 0.4
    }
    `;  


const HeroDate = styled.div`
    font-size: .9rem;
    color: var(--color-gray-400);
    opacity: 0.7;
    `;