import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

export const rulesBuilder = (
  mode: "development" | "production"
): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.css$/i,
    use: [
      mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
    ],
  };

  const assetLoader = {
    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
    type: "asset",
  };

  return [tsLoader, styleLoader, assetLoader];
};
