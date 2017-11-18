const webpack = require('webpack');
const path = require('path');
const entry = require('webpack-glob-entry')

const resolvePath = (pathToResolve = '') => path.resolve(__dirname, pathToResolve);
const joinPath = (...pathToResolve) => path.join(__dirname, pathToResolve);
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: entry('./src/ts/app.ts', './src/ts/views/*.ts'),
	output: {
		path: resolvePath('build/assets/js'),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
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
            'window.jQuery': 'jquery',
            'toastr': 'toastr',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: 'commons.js'
        })
    ],
    devServer: {
        contentBase: resolvePath('build'),
        port: 9999,
        open: true
    },
}