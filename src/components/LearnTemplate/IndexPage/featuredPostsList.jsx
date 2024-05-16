import React from 'react';
import { Link } from 'gatsby';
import { getCategoryColorTheme } from '../utils';


export default function FeaturedPostsList ({ posts }) { 
    return posts.map((post) => {
      const categoryColorTheme = getCategoryColorTheme(post.node.frontmatter.category);

      return (
        <article key={post.node.id}>
          <div className="space-y-4">
            <span className={`${categoryColorTheme} text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded`} >
              {post.node.frontmatter.category}
            </span>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white dark:text-white hover:underline">
              <Link to={`${post.node.frontmatter.slug}`} title={post.node.frontmatter.title}>
                {post.node.frontmatter.title}
              </Link>
            </h2>

            <p className="text-base font-normal text-gray-500 dark:text-gray-400">{post.node.excerpt}</p>

            <Link to={`${post.node.frontmatter.slug}`} title={post.node.frontmatter.title} className="inline-flex items-center text-base font-semibold leading-tight text-white hover:underline dark:text-primary-500">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </article>
      );
    });
  }