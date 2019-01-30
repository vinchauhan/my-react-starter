const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
    })
    
module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
              
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              }
        ]
    },
    plugins: [htmlPlugin]
}