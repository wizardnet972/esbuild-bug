const path = require("path");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "eval-cheap-source-map",
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].module.js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsConfigPathsPlugin()],
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              loader: "ts",
              target: "es2015",
              tsconfigRaw: require("./tsconfig.json"),
            },
          },
        ],
      },
    ],
  },
};
