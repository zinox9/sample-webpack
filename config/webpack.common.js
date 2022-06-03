const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: "js/bundle.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "",
      assetModuleFilename: "images/[name][ext]", //dist location for images
   },
   module: {
      rules: [
         {
            test: /\.html$/,
            loader: "html-loader",
         },
         {
            test: /\.(png|jp(e*)g|svg)$/,
            type: "asset",
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/env"],
                  plugins: ["transform-class-properties"],
               },
            },
         },
         {
            test: /\.s?[ac]ss$/,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: "css-loader",
                  options: {
                     sourceMap: true,
                  },
               },
               {
                  loader: "postcss-loader",
                  options: {
                     postcssOptions: {
                        plugins: ["postcss-preset-env", "autoprefixer"],
                     },
                  },
               },
               {
                  loader: "sass-loader",
                  options: {
                     sourceMap: true,
                  },
               },
            ],
         },
      ],
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: "css/style.css",
      }),
      new CleanWebpackPlugin({
         verbose: true,
         cleanOnceBeforeBuildPatterns: ["**/*"],
      }),
      new HtmlWebpackPlugin({
         template: "./src/index.html",
         filename: "./index.html",
      }),
   ],
};
