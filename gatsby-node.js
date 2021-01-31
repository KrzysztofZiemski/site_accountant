//resolve issue "React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.""

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