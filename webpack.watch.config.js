const path = require("path");

module.exports = {
  entry: {
    app: ["./src/index.tsx"]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  output: {
    // path: path.resolve(__dirname, "public"),
    // publicPath: "/",
    filename: "bundle.js"
  }
};