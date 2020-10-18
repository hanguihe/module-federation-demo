const path = require("path");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:3001/"
  },
  devtool: "source-map",
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
        options: {
          presets: [require.resolve("@babel/preset-react")],
          cacheDirectory: false
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "libs",
      filename: "libs.js",
      library: { type: "var", name: "libs" },
      remotes: {},
      exposes: {
        "./Text": "./src/text.js"
      }
      // shared: {}
    })
  ]
};
