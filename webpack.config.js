const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].js'
    }, 
    module: {
        rules:[
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']            
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }           
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'public', 'index.html')
    })],
    devServer: {
        //contentBase: path.join(__dirname, 'build')
    }
};