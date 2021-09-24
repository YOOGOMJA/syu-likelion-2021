const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/example/webpack/index.js",
  output: {
    path: path.resolve(__dirname, "dist/webpack"),
    filename: "app.js",
  },
  devServer: {
    port: 8000,
    static: {
      directory: path.join(__dirname, "dist/webpack"),
    },
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/example/webpack/index.html",
      inject: true,
    }),
  ],
};
