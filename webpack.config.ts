import path from "path";
import { rulesBuilder } from "./webpackConfig/rulesBuilder";
import { pluginsBuilder } from "./webpackConfig/pluginsBuilder";
import { WebpackConfig } from "./webpackConfig/interfaces";

const isDevMode = process.env.NODE_ENV === "development";

const config: WebpackConfig = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: isDevMode ? "inline-source-map" : undefined,
  //devServer runs only in dev mode and on 3000 port by default
  devServer: isDevMode
    ? {
        open: true,
        port: +process.env.PORT || 3000,
      }
    : undefined,
  plugins: pluginsBuilder(isDevMode),
  module: {
    rules: rulesBuilder(isDevMode),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default () => {
  isDevMode ? (config.mode = "development") : (config.mode = "production");
  return config;
};
