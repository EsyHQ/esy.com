import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Grid } from '@mui/material'
import Layout from 'src/components/Layout'
import PostCard from './postCard'
import { mainTheme, midTheme } from './theme'
import { BlogWrapper } from './styles'



export default function AIIndexComponent ({ data }) {
  const { edges } = data?.allMarkdownRemark || {}

  return (
    <Layout>
      <BlogWrapper>
        <Grid
          container
          direction="row"
          spacing={{ xs: 0, sm: 3, md: 6 }}
        >
          {edges?.map((edge, index) => {
            const { excerpt } = edge?.node?.frontmatter
            const [firstSentence, secondSentence] = excerpt.split('.')
            const theme = index === 0 ? mainTheme : midTheme

            if (index === 0) {
              return (
                <ThemeProvider key={index} theme={mainTheme}>
                  <Grid item xs={12}>
                    <PostCard
                      theme={mainTheme}
                      postData={edge}
                      firstSentence={firstSentence}
                      secondSentence={secondSentence}
                    />
                  </Grid>
                </ThemeProvider>
              )
            } else if (index > 0 && index < 3) {
              return (
                <ThemeProvider key={index} theme={midTheme}>
                  <Grid item xs={12} sm={6}>
                    <PostCard
                      theme={midTheme}
                      postData={edge}
                      firstSentence={firstSentence}
                      secondSentence={secondSentence}
                    />
                  </Grid>
                </ThemeProvider>
              )
            } else if (index > 2 && index < 6) {
              return (
                <ThemeProvider key={index} theme={midTheme}>
                  <Grid item xs={12} sm={6}>
                    <PostCard
                      theme={midTheme}
                      postData={edge}
                      firstSentence={firstSentence}
                      secondSentence={secondSentence}
                    />
                  </Grid>
                </ThemeProvider>
              )
            } else {
              return (
                <ThemeProvider key={index} theme={midTheme}>
                  <Grid item xs={12} sm={6}>
                    <PostCard
                      theme={midTheme}
                      postData={edge}
                      firstSentence={firstSentence}
                      secondSentence={secondSentence}
                    />
                  </Grid>
                </ThemeProvider>
              )
            }
          })}
        </Grid>
      </BlogWrapper>
    </Layout>
  )
}


export { Head } from './head'
