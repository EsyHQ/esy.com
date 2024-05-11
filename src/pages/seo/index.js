import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'

import Layout from "src/components/Layout"
import SEO from 'src/components/SEO'
import { useSiteMetadata } from 'src/hooks/use-site-metadata'
import PostList from 'src/components/Post/postList'



const SEOIndexPage = ({ data }) => {
    const { edges } = data?.allMarkdownRemark

    const totalPosts = edges.length
    const posts = [
        {
            id: 1,
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png',
            category: 'Article',
            title: 'Our first office',
            description: 'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.',
            author: {
                name: 'Jese Leos',
                avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
                date: 'Aug 15, 2021',
                readTime: '16 min read',
            },
        },
        {
            id: 2,
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png',
            category: 'Article',
            title: 'We partnered up with Google',
            description: 'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.',
            author: {
                name: 'Roberta Casas',
                avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png',
                date: 'Aug 15, 2021',
                readTime: '16 min read',
            },
        },
        {
            id: 3,
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png',
            category: 'Article',
            title: 'Our first project with React',
            description: 'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.',
            author: {
                name: 'Sofia McGuire',
                avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
                date: 'Aug 15, 2021',
                readTime: '16 min read',
            },
        },
    ];


    return (<Layout>
        <PageWrapper>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Essays</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="mb-5 rounded-lg" src={post.image} alt={post.title} />
                                </a>
                                <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">{post.category}</span>
                                <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">{post.title}</a>
                                </h2>
                                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">{post.description}</p>
                                <div className="flex items-center space-x-4">
                                    <img className="w-10 h-10 rounded-full" src={post.author.avatar} alt={`${post.author.name} avatar`} />
                                    <div className="font-medium dark:text-white">
                                        <div>{post.author.name}</div>
                                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{post.author.date} · {post.author.readTime}</div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    </Layout>)
}


export default SEOIndexPage



export const indexQuery = graphql`
    query SEOIndexQuery  {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { journal_name: { eq: "essays" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            date
                            title
                            slug
                            journal_name
                            excerpt
                            featuredImage {
                                childImageSharp {
                                    gatsbyImageData(width: 800)
                                }
                            }
                        }
                    }
                }
            }
      }
`


export const Head = () => {
    const { description, image, siteUrl, type, twitterUsername } = useSiteMetadata()

    const meta = {
        title: "SEO Pages | esy Journal",
        description,
        image,
        url: `${siteUrl}/essays`,
        type,
        twitterUsername,
    }

    return <SEO meta={meta} />
}


const PageWrapper = styled.section`
    height: 100%;
    width: 100%;
    background: rgba(12,10,29);
    // padding: 100px 0%;
    display: flex;
    flex-direction: column;
    // flex-flow: row wrap;
    // justify-content: space-between;

    .gatsby-image-wrapper-constrained {
        width: 100%;
    }
    
    img {
        border-radius: 6px;
        border: 1px solid rgba(0,0,0,0.22);
        box-shadow: 0px 20px 20px 0px rgba(0,0,0,0.3);
    }
`