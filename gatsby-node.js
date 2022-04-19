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
    const articlePostTemplate = path.resolve(`src/layouts/article.tsx`);

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
            path: `artykuly/${slugifiedTitle}`,
            component: articlePostTemplate,
            context: {
                id: post.id
            },
        });
    });
};