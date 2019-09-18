const HtmlWebpackPlugin = require("html-webpack-plugin");
const path              = require('path');

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

  resolve: {
    extensions: [ ".js", ".jsx" ],
    // root: path.resolve(__dirname, 'src'),
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, 'src/components'),
      "@banners": path.resolve(__dirname, 'src/banners'),
    }
  },

  module: {
    rules: [
      {
        test: /.\jsx$/,
        exclude: /node_modules/,
        // include: [helpers.root('src')],
        use: {
          loader: "babel-loader",
          query: {
            presets: ['@babel/react']
          }
        }
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        // include: [helpers.root('src')],
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "stylus-loader" // compiles Stylus to CSS
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          "file-loader"
        ]
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