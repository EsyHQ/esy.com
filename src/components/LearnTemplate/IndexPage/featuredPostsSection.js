import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby'
import { getCategoryColorTheme } from '../utils';

const FeaturedPostsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { featured: { gt: 0 } } }
        sort: { fields: [frontmatter___featured], order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              date(formatString: "MMM D, YYYY")
              author
              authorImage {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
              category
              featured
              featuredImagePath
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `);

  const featuredPosts = data.allMarkdownRemark.edges;
  const mainFeaturedPost = featuredPosts[0].node;
  const otherFeaturedPosts = featuredPosts.slice(1);

  const categoryColorTheme = getCategoryColorTheme(mainFeaturedPost.frontmatter.category);


  const renderOtherFeaturedPosts = () => { 
    return otherFeaturedPosts.map((post) => {
      const categoryColorTheme = getCategoryColorTheme(post.node.frontmatter.category);

      return (
        <article key={post.node.id}>
          <div className="space-y-4">
            <span className={`${categoryColorTheme} text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded`} >
              {post.node.frontmatter.category}
            </span>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white dark:text-white hover:underline">
              <Link to={`/${post.node.frontmatter.slug}`} title={post.node.frontmatter.title}>
                {post.node.frontmatter.title}
              </Link>
            </h2>

            <p className="text-base font-normal text-gray-500 dark:text-gray-400">{post.node.excerpt}</p>

            <Link to={`/${post.node.frontmatter.slug}`} title={post.node.frontmatter.title} className="inline-flex items-center text-base font-semibold leading-tight text-white hover:underline dark:text-primary-500">
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


  return (
    <section className="border-t border-b border-gray-100 bg-primary dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24 pt-20 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <article>
            <Link to={`/${mainFeaturedPost.frontmatter.slug}`} title={mainFeaturedPost.frontmatter.title}>
              <img className="object-cover w-full rounded-lg" src={mainFeaturedPost.frontmatter.featuredImagePath} alt={mainFeaturedPost.frontmatter.title} />
            </Link>

            <div className="mt-5 space-y-4">
              <span className={`${categoryColorTheme}  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded`}>
                {mainFeaturedPost.frontmatter.category}
              </span>

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white dark:text-white hover:underline">
                <Link to={`/${mainFeaturedPost.frontmatter.slug}`} title={mainFeaturedPost.frontmatter.title}>
                  {mainFeaturedPost.frontmatter.title}
                </Link>
              </h2>

              <div className="flex items-center gap-3">
                <img className="w-8 h-8 rounded-full" src={mainFeaturedPost.frontmatter.authorImage} alt={mainFeaturedPost.frontmatter.author} />
                <div className="text-lg font-medium leading-tight text-white dark:text-white">
                  <div>{mainFeaturedPost.frontmatter.author}</div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Posted on {mainFeaturedPost.frontmatter.date}
                  </div>
                </div>
              </div>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">{mainFeaturedPost.excerpt}</p>

              <Link to={`/${mainFeaturedPost.frontmatter.slug}`} title={mainFeaturedPost.frontmatter.title} className="inline-flex items-center text-base font-semibold leading-tight text-white hover:underline dark:text-primary-500">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </article>

          <div className="space-y-8">
            {/* {otherFeaturedPosts.map((post) => (

              <article key={post.node.id}>
                <div className="space-y-4">
                  <span className={`bg-${post.node.frontmatter.category.toLowerCase()}-100 text-${post.node.frontmatter.category.toLowerCase()}-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-${post.node.frontmatter.category.toLowerCase()}-900 dark:text-${post.node.frontmatter.category.toLowerCase()}-300`}>
                    {post.node.frontmatter.category}
                  </span>

                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-white dark:text-white hover:underline">
                    <Link to={`/${post.node.frontmatter.slug}`} title={post.node.frontmatter.title}>
                      {post.node.frontmatter.title}
                    </Link>
                  </h2>

                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">{post.node.excerpt}</p>

                  <Link to={`/${post.node.frontmatter.slug}`} title={post.node.frontmatter.title} className="inline-flex items-center text-base font-semibold leading-tight text-white hover:underline dark:text-primary-500">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))} */}
            {renderOtherFeaturedPosts()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;