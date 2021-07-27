const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "production",
  plugins: [
    new ModuleFederationPlugin({
      name: "beta",
      filename: "remoteEntry.js",
      remotes: {
        alpha:
          "alpha@https://micro-frontends-demo-alpha.netlify.app/remoteEntry.js",
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public/**/*",
          to: "[name][ext]",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  output: {
    clean: true,
  },
};
