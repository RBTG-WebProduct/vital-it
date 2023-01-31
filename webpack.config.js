/**
 * We need to package our front-end's dependencies so that the React library can load on our client.
 * We also need webpack to convert our React Typescript files into valid Javascript so that the server can serve them.
 * This is also a quick and easy way to uglify and minify our client-side code.
 */
const { resolve } = require('path');
const { readdirSync } = require('fs');
const TerserPlugin = require('terser-webpack-plugin');
const { parseJsonSourceFileConfigFileContent } = require('typescript');

/**
 * Creating a list of target React files and their location.
 */
let targetFiles = {};
readdirSync('./pages').forEach(page => {
    /**
     * Only allowing those with a .tsx extension.
     */
    if (page.split('.tsx').length > 1) {
        targetFiles = { ...targetFiles, [page.split('.tsx')[0]]: `./pages/${page}` }
    }
});

/**
 * Our Webpack configuration.
 * This one can be extremely annoying to get right, but if you want more documentation it can be found here: https://webpack.js.org/guides/typescript/
 * Otherwise I wouldn't worry too much, it's just getting the correct syntax for webpack.config so that webpack can bundle the React files without interferring with our tsconfig.
 */
module.exports = {
    entry: targetFiles,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
    output: {
        filename: '[name].js',
        path: resolve('./src/public/js/'),
    },

    /**
     * CHANGE TO 'production' ON A PRODUCTION BUILD
     */
    mode: 'development',

    /**
     * ENABLE ON A PRODUCTION BUILD
     */
    /**
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
    */
};