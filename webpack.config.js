const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode }) => {
  return {
    mode: mode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "lib"),
      filename: "./bundle.js",
    },
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
  };
};
