const path = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

function resolve(name) {
  return path.resolve(__dirname, `./src/${name}`)
}

module.exports = {
  mode: "production",
  devtool: false,
  entry: resolve("index.js"),
  output: {
    publicPath: "./",
    path: path.resolve(__dirname, "../dist/packages")
  },
  resolve: {
    extensions: [".js"],
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve("babel-loader"),
        exclude: [/node_modules/],
        options: {
          cacheDirectory: false,
          presets: [
            require.resolve("@babel/preset-react"),
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {exModule: true}
          },
          {
            loader: 'css-loader',
            options: {},
          },
        ],
      },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "libs",
      library: {type: "var",name: "libs"},
      filename: "packages.js",
      remotes: {},
      exposes: {
        antd: resolve("antd.js"),
        react: resolve("react.js"),
        "react-dom": resolve("react-dom.js"),
      }
    })
  ]
}