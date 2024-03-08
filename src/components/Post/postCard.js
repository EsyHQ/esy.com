import React from 'react'
import moment from 'moment'
import { Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PostDate from 'src/components/common/Post/postDate'

import { 
    PostCardContainer,
    PostCardWrapper, 
    PostCardContent, 
    PostCardTitle, 
    PostCardMeta, 
    PostCardExcerpt, 
    FeaturedImageWrapper 
} from 'src/theme/postCard'



const PostCard = props => {
    const { postData = {}, theme, firstSentence, secondSentence } = props

    const frontmatter = postData?.node?.frontmatter || {}
    const gatsbyImageData = frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData || {}
    const { title = "", excerpt = "", tags = [], journal_name = "", published_at = "", slug = "", reading_time = 0, date } = frontmatter 

    let featuredImage = getImage(gatsbyImageData)
    
    const formattedPublishedDate = moment(date).local().format('MMM DD YYYY').split(' ')
    const primaryTag = journal_name || "blog"
    

    const tagMap = {
        "learn": { path: "/learn"},
        "essays": { path: "/essays"},
    }
    const postPath = `${tagMap[primaryTag].path}${slug}` 


    return (<ThemeProvider theme={theme}>
                <PostCardContainer>
                    <Link to={postPath}>
                        <PostCardWrapper>
                            <FeaturedImageWrapper><GatsbyImage image={featuredImage} /></FeaturedImageWrapper>
                            <PostCardContent>
                                    <PostCardTitle>{title}</PostCardTitle>
                                    <PostCardMeta>
                                        <span>{primaryTag}</span>
                                        <span className="divider">•</span>
                                        <PostDate publishedPostDate={formattedPublishedDate} />
                                    </PostCardMeta>
                                    {theme?.type === 'mainTheme' && <PostCardExcerpt><p>{firstSentence}.</p></PostCardExcerpt>}
                                    {theme?.type === 'midTheme' && <PostCardExcerpt><p>{firstSentence}.</p></PostCardExcerpt>}
                                    {theme?.type === 'thumbnailTheme' && <PostCardExcerpt><p>{firstSentence.substring(0,100)}...</p></PostCardExcerpt>}
                                    </PostCardContent>
                        </PostCardWrapper>
                    </Link>
                </PostCardContainer>
            </ThemeProvider>)
    }

export default PostCard

