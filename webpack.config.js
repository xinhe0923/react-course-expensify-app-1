//
const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"), //absolute path
    filename: "bundle.js",
  },
  module: {
    rules: [{ 
        loader: "babel-loader", 
        test: /\.js$/, 
        exclude: /node_modules/ 
    },{
      test:/\.s?css$/,
      use:['style-loader','css-loader','sass-loader']//dump its contents into the DOM in a style tag
      //
      
      }],
    //check if the file is ended with .js and not in node_modules
  },
  devtool: 'cheap-module-eval-source-map',
  devServer:{
      contentBase: path.join(__dirname, "public"),
      historyApiFallback:true
  }
  //webpack configuration
  //webpack grab the file and run it
};
