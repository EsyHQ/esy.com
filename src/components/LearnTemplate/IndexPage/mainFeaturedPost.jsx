import React from 'react'
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { getCategoryColorTheme } from '../utils';

export default function MainFeaturedPost({ post }) {
  const categoryColorTheme = getCategoryColorTheme(post.frontmatter.category);


    return (
        <article>
        <Link to={`${post.frontmatter.slug}`} title={post.frontmatter.title}>
          <GatsbyImage image={getImage(post.frontmatter.featuredImage)} alt={post.frontmatter.title} className="object-cover w-full rounded-lg" />
        </Link>

        <div className="mt-5 space-y-4">
          <span className={`${categoryColorTheme} text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded`}>
            {post.frontmatter.category}
          </span>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white dark:text-white hover:underline">
            <Link to={`${post.frontmatter.slug}`} title={post.frontmatter.title}>
              {post.frontmatter.title}
            </Link>
          </h2>

          <div className="flex items-center gap-3">
            <GatsbyImage image={getImage(post.frontmatter.authorImage)} alt={post.frontmatter.author} className="w-8 h-8 rounded-full" />
            <div className="text-lg font-medium leading-tight text-white dark:text-white">
              <div>{post.frontmatter.author}</div>
              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Posted on {post.frontmatter.date}
              </div>
            </div>
          </div>

          <p className="text-base font-normal text-gray-500 dark:text-gray-400">{post.excerpt}</p>

          <Link to={`${post.frontmatter.slug}`} title={post.frontmatter.title} className="inline-flex items-center text-base font-semibold leading-tight text-white hover:underline dark:text-primary-500">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </article>

    )
}