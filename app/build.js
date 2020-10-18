const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:3000/"
  },
  devtool: "source-map",
  devServer: {
    port: 3000
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: require.resolve("babel-loader"),
        exclude: [/node_modules/],
        options: {
          presets: [require.resolve("@babel/preset-react")],
          cacheDirectory: false
        }
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      filename: "remoteEntry.js",
      remotes: {
        libs: "libs@http://localhost:3001/libs.js"
      },
      exposes: {}
      // shared: ["react", "react-dom"]
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
