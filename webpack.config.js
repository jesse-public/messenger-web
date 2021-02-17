const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const src = path.resolve(__dirname, "src");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    modules: [src, "node_modules"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Messenger",
    }),
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    stats: "minimal",
  },
};
