import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { rulesBuilder } from "./webpackConfig/rulesBuilder";
import { WebpackConfig } from "./webpackConfig/interfaces";

const isProduction = process.env.NODE_ENV === "production";

const config: WebpackConfig = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: !isProduction && "inline-source-map",
  //devServer runs only in dev mode and on 3000 port by default
  devServer: !isProduction && {
    open: true,
    port: +process.env.PORT || 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: isProduction
        ? "css/[name]-[contenthash].css"
        : "css/[name].css",
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: rulesBuilder(),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};

export default () => {
  isProduction ? (config.mode = "production") : (config.mode = "development");
  return config;
};
