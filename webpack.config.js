module.exports = {
  mode: "development",
  entry: "./src/main.jsx",
  output: {
    path: __dirname,
    filename: "dist/bundle.js"
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-react"]
        }
      }
    ]
  }
};
