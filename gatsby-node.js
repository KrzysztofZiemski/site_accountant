const path = require(`path`);
const slugify = require('slugify')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith("develop")) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    "react-dom": "@hot-loader/react-dom",
                },
            },
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/layouts/article.tsx`);

    const result = await graphql(`
      query queryCMSPage {
        allDatoCmsArticle{
          nodes{
            title
            id
          }
        }
      }
    `);

    result.data.allDatoCmsArticle.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.title, { lower: true });

        createPage({
            path: `articles/${slugifiedTitle}`,
            component: blogPostTemplate,
            context: {
                id: post.id
            },
        });
    });
};