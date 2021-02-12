const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = (mode) => require(`./config/webpack.${mode}`)(mode);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 8192,
                },
              },
            ],
          },
        ],
      },
      entry: "./src/index.js",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./bundle.js",
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  );
};
