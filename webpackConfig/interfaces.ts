import { Configuration } from "webpack";

export interface WebpackConfig extends Configuration {
  devServer: {
    open: boolean;
    port: number;
  };
}
