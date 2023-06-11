import React from 'react'
import styled from 'styled-components'

import { PostList } from 'src/components/Post/postList'

export default function EssaySection({ data }) {
    const { edges } = data?.allMarkdownRemark

    return (<EssaySectionContainer>
                <h2>@Essays</h2>
                {/* <PostList posts={edges} /> */}
            </EssaySectionContainer>)
} 


const EssaySectionContainer = styled.div`
    background: #000;
    display: flex;
    min-height: 30vh;
    padding: 0px 50px;
    color: #fff;
    display: flex;

    h2 {
        font-weight: 400;
        font-size: 36px;
        width: 100%;
        text-align: right;
    }
`