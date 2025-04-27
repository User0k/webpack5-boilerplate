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

  const fontLoader = {
    test: /\.(eot|svg|ttf|woff|woff2)$/i,
    type: "asset/resource",
  };

  const imageLoader = {
    test: /\.(png|jpg|gif|svg)$/i,
    type: "asset/resource",
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.(js|jsx|ts|tsx)$/,
    type: "javascript/auto", // Disable webpack's default handling
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
        },
      },
    ],
  };

  return [tsLoader, styleLoader, fontLoader, imageLoader, svgLoader];
};
