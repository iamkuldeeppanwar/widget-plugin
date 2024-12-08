const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "widget.min.js",
    path: path.resolve(__dirname, "dist"),
    library: "Widget",
    libraryTarget: "umd",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: ["style-loader", "css-loader"], // Load CSS and inject into the DOM
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
