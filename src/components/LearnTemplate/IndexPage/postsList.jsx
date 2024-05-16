import React from 'react';
import { Link } from 'gatsby';
import { getCategoryColorTheme } from '../utils';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


import Sidebar from './sidebar';

export default function PostsList({ posts }) {
  console.log(posts, 'posts');
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:pb-16">
        <div className="flex flex-col gap-12 lg:gap-20 md:flex-row md:items-start">
          <div className="flex-1 min-w-0">
            <div className="border-b border-gray-100 dark:border-gray-800">
              <nav className="flex items-center gap-8 pb-4 -mb-px">
                <Link
                  to="#"
                  className="text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Relevant
                </Link>
                <Link
                  to="#"
                  className="text-base font-medium text-primary-700 dark:text-primary-500"
                >
                  Latest
                </Link>
                <Link
                  to="#"
                  className="text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Top
                </Link>
              </nav>
            </div>

            <div className="mt-8 space-y-12 sm:mt-12">
              {posts.map((post, index) => {
                const categoryColorTheme = getCategoryColorTheme(
                  post.node.frontmatter.category
                );

                return (
                  <div key={post.node.id} className="flex flex-col items-start gap-8 xl:flex-row">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full xl:aspect-[4/3] xl:w-80 lg:shrink-0">
                      <Link to={`${post.node.frontmatter.slug}`} title={post.node.frontmatter.title}>
                        <GatsbyImage image={getImage(post.node.frontmatter.featuredImage)} alt={post.node.frontmatter.title} className="absolute inset-0 object-cover w-full h-full bg-gray-200 rounded-lg" />
                      </Link>
                    </div>


                    <div className="space-y-4">
                      <span
                        className={`${categoryColorTheme} text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded !important`}
                      >
                        {post.node.frontmatter.category}
                      </span>

                      <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                        <Link
                          to={post.node.frontmatter.slug}
                          className="hover:underline"
                          title={post.node.frontmatter.title}
                        >
                          {post.node.frontmatter.title}
                        </Link>
                      </h2>

                      <div className="flex items-center gap-3">
                        <Link to={`${post.node.frontmatter.slug}`} title={post.node.frontmatter.title}>
                          <GatsbyImage image={getImage(post.node.frontmatter.authorImage)} alt={post.node.frontmatter.author} className="w-8 h-8 rounded-full" />
                        </Link>
                  
                        <div className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                          <div>{post.node.frontmatter.author}</div>
                          <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Posted on {post.node.frontmatter.date}
                          </div>
                        </div>
                      </div>

                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        {post.node.excerpt}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <nav aria-label="Page navigation example" className="mt-8 sm:mt-12">
              {/* ... */}
            </nav>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  );
}