import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

export const rulesBuilder = (): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    },
  };

  const styleLoader = {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
  };

  const assetLoader = {
    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
    type: "asset",
  };

  return [tsLoader, babelLoader, styleLoader, assetLoader];
};
