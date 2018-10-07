module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "dist/bundle.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
