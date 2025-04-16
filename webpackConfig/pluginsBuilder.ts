import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";

export const pluginsBuilder = (isDev: boolean): WebpackPluginInstance[] => {
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: "index.html",
  });

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: isDev ? "css/[name].css" : "css/[name]-[contenthash].css",
  });

  const progressPlugin = new ProgressPlugin();

  return [htmlWebpackPlugin, miniCssExtractPlugin, progressPlugin];
};
