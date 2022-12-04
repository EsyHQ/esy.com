import React from 'react'
import styled from 'styled-components'


const PostDate = ({ publishedPostDate }) => {
    const [ month, day, year ] = publishedPostDate
    
    return (
        <PostDateWrapper>
            <p><span>{`${month} ${day}`}</span> <span>{`${year}`}</span></p>
        </PostDateWrapper>
    )
}


export default PostDate


const PostDateWrapper = styled.div`
    color: rgb(255, 255, 255);
    // font-family: "Roboto", sans-serif, "Helvetica","Arial";
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.44px;

    span:last-child {
        color: rgb(138, 138, 138);
    }
`