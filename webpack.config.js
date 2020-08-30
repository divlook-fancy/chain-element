const path = require('path')
const { ProgressPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    devServer: {
        contentBase: './dist',
        port: 3000,
        host: '0.0.0.0',
    },
    stats: 'minimal',
    entry: {
        main: dir('src/main.ts'),
        example: dir('src/example.ts'),
        browser: dir('src/browser.ts'),
    },
    output: {
        filename: 'chain-element.[name].js',
        path: dir('dist'),
        publicPath: '/',
    },
    resolve: {
        alias: {
            '~': dir('src/'),
        },
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
        ],
    },
    plugins: [
        new ProgressPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Create Element',
            filename: 'index.html',
            chunks: ['example'],
            minify: false,
        }),
    ],
}

function dir(...p) {
    return path.resolve(__dirname, ...p)
}
