const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  watch: true,
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: "css-loader",
          options: {
            modules: true
          }
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        query: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },

  plugins: [new ExtractTextPlugin("style.css")],

  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
};
