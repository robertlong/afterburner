var path = require("path");

module.exports = {
  entry: {
    app: ["./example/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devtool: "eval-source-map"
};