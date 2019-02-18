const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

let configHtmlWebpack = (name) => {
  return {
    filename: `${name}.html`,
    template: `./src/${name}.html`,
    chunks: [`${name}`]
  }
};

module.exports = ({mode}) => {
  return {
    entry: {
      'index': './src/index.js',
      'question1': './src/question1.js',
      'question2': './src/question2.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode,
    plugins: [
      new HtmlWebpackPlugin(configHtmlWebpack('question1')),
      new HtmlWebpackPlugin(configHtmlWebpack('question2')),
      new HtmlWebpackPlugin(configHtmlWebpack('index')),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ],
    },
  }
};