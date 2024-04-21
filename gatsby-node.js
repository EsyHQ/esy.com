// Gatsby NodeAPI Reference: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path')


exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.xml$/,
                    use: [ 'xml-loader' ],
                },
            ],
        },
    })
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
      type MarkdownRemarkFrontmatter {
        featuredImagePath: String
        featuredImage: File @fileByRelativePath
      }
      type MarkdownRemark implements Node {
        frontmatter: MarkdownRemarkFrontmatter
      }
    `;
    createTypes(typeDefs);
  };



  exports.createPages = async ({ actions, graphql, reporter }) => {
    console.log('creating pages')
    const { createPage } = actions;
  
    const result = await graphql(`
      query {
        allMarkdownRemark(filter: { frontmatter: { slug: { regex: "^/learn/" } } }) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `);
  
    if (result.errors) {
      reporter.panicOnBuild('Error while running GraphQL query.');
      return;
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug } = node.frontmatter;
      console.log(slug, 'the sluggggggggg')
      createPage({
        path: `${slug}`,

        component: path.resolve(`./src/templates/learnTemplate.tsx`),
        context: {
          slug: `${slug}`,
        },
      });
    });
  };