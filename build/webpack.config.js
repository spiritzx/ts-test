/*
 * @Descripttion: webpack 自定义配置
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-08 14:40:40
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-03-08 15:21:08
 */

const htmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: "/\.tst?$/",
        use: "ts-loader",
        exclude: "/node_modules"
      }
    ]
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  devServer: {
    contentBase: "./dist",
    stats: "errors-only",
    compress: false,
    host: "localhost",
    port: 8081
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dust"]
    }),
    new htmlPlugin({
      template: "./src/views/index.html"
    })
  ]
}