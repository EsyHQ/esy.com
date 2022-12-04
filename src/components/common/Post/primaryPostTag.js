import React from 'react'
import styled from 'styled-components'


const PrimaryPostTag = ({ postTag }) => {
    return <PostTagWrapper>{postTag}</PostTagWrapper>
}


export default PrimaryPostTag


const PostTagWrapper = styled.div`
    // color: rgb(119, 175, 239);
    color: #d14eff;
    opacity: 0.7;
    // font-family: "Roboto", sans-serif, "Helvetica","Arial";
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.44px;
    text-transform: uppercase;
`