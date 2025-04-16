import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

export const rulesBuilder = (isDev: boolean): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        //the options below are set for css-modules only
        options: {
          modules: {
            namedExport: false,
            auto: (resourcePath: string) =>
              resourcePath.endsWith(".module.css"),
            localIdentName: isDev
              ? "[path][name]__[local]-[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
    ],
  };

  const assetLoader = {
    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
    type: "asset",
  };

  return [tsLoader, styleLoader, assetLoader];
};
