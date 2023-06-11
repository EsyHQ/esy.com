
import styled, { css } from 'styled-components'


const PostCardContainer = styled.div`

    >a {
        text-decoration: none;
    }

    p {
        margin: 8px 0;
    }


    max-width: ${({ theme }) => theme?.container?.maxWidth };
    @media(max-width: 600px) {
        max-width: 100% ;
    }
`
const PostCardWrapper = styled.div`
    display: flex;
    flex-flow: ${({theme}) => theme?.container?.flexFlow};

    @media(max-width: 768px) {
        flex-flow: row wrap;
    }

`
const PostCardTitle = styled.h1`
        margin: ${({ theme }) => theme?.postCardTitle?.margin };
        font-size: ${({ theme }) => theme?.title?.fontSize };
        font-weight: bold;
        letter-spacing: 0px;
        color: rgba(255, 255, 255, 1);

        @media(max-width: 600px) {
            font-size: 22px;
            margin: 20px 0 0 0;
        }
`

const PostCardContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgba(255, 255, 255, 0.5);
    padding: ${({theme}) => theme?.postCardContent?.padding};

    @media(max-width: 768px) {
        padding: 0;
    }
`


const PostCardExcerpt = styled.p`
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 24px;
        max-width: 527px;
`


const FeaturedImageWrapper = styled.div`
    width: 100%;
    background: #000 url('${props => props?.featuredImg}') cover no-repeat;
    
    img {
        width: 100%;
        max-width: ${props => props?.theme?.featuredImg?.maxWidth};
        max-height: ${({ theme }) => theme?.featuredImg?.maxHeight};
        min-height: 195px;

        @media(max-width: 600px) {
            max-width: 100%;
            max-height: 100%;
        }

        ${props =>  props?.theme?.type === 'midTheme' && css`
            object-position: ${props?.theme.featuredImg.objectPosition};
            object-fit: ${props?.theme?.featuredImg?.objectFit};
        `}
`

const PostCardMeta = styled.div`
    display: flex;
    align-items: center;

    >span:first-child {
        // color: rgb(119, 175, 239);
        color: #d14eff;
        opacity: 0.7;
        // font-family: "Roboto", sans-serif, "Helvetica","Arial";
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.44px;
        text-transform: uppercase;
    }

    .divider {
        color: rgb(138, 138, 138);
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.44px;
        padding: 0 4px;
    }
`


export { PostCardContainer, PostCardWrapper, PostCardTitle, PostCardContent, PostCardExcerpt, FeaturedImageWrapper, PostCardMeta }