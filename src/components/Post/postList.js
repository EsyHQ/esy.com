import React from "react"
import styled from "styled-components"
import { Grid } from "@mui/material"

// Custom Imports
import { mainTheme, midTheme } from "src/theme"
import PostCard from "./postCard"



export default function PostList({ posts }) {

    const renderPosts = posts.map((post, index) => {
        const { excerpt } = post?.node?.frontmatter;
        const [firstSentence, secondSentence] = excerpt.split('.');
        const theme = index === 0 ? mainTheme : midTheme;
        
        return (
                  <Grid item xs={12}>
                    <PostCard
                      theme={theme}
                      postData={post}
                      firstSentence={firstSentence}
                      secondSentence={secondSentence}
                    />
                  </Grid>
        );
      });
           
    return (<PostListWrapper>
                <Grid 
                    container 
                    direction="row"
                    spacing={[{ xs: 0, sm: 3, md: 6 }]}
                >
                    {renderPosts}
                </Grid>
            </PostListWrapper>)
}


const PostListWrapper = styled.div``




