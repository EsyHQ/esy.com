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
  