const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: __dirname + "/src/app.jsx",  // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + "/build/", // Folder to store generated bundle
    filename: "bundle.js", // Name of generated bundle after build
    //publicPath: __dirname + "/build/" // public URL of the output directory when referenced in a browser
  },
  devServer: {  // configuration for webpack-dev-server
    contentBase: './build',  //source of static assets
    port: 3000, // port to run dev-server
  },

  module: {
    rules: [
      {
        test: /.\jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ['@babel/react']
          }
        }
      },
      {
        test: /.\json$/,
        exclude: /node_modules/,
        use: {
          loader: 'json-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Bannermaker 2.0",
      template: __dirname + "/src/index.html",
      filename: __dirname + "/build//index.html"
    })
  ]
};