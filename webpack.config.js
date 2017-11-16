const webpack = require('webpack');
const path = require('path');

const resolvePath = (pathToResolve = '') => path.resolve(__dirname, pathToResolve);
const isProductionEnvironment = process.env.NODE_ENV === 'production'

module.exports = {
    entry: resolvePath('src/ts/app.ts'),
    output: {
        path: resolvePath('build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.less$/,
                include: [resolvePath('src/less')],
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.webpack.js', '.web.js', '.js', '.json', '.ts', '.less'],
        alias: {
            "@styles": resolvePath('src/less'),
            "@scripts": resolvePath('src/ts')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ],
    devServer: {
        contentBase: resolvePath('build'),
        port: 9999,
        open: true
    },
}