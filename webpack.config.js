// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './src/app.jsx',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  devServer: { 
    static: { 
      publicPath: '/build/', 
    }, 
    port: 8080,
    proxy: { 
      '/api': 'localhost:3000', 
    },
  },

module: {
  rules: [
    {
      test: /\.(js|jsx)$/, 
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react' ]
        }
      }
    },
    {
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
   ,
    {
      // Now we apply rule for images
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [
      {
      // Using file-loader for these files
      loader: "file-loader",
      
      // In options we can set different things like format
      // and directory to save
      options: {
      outputPath: 'images'
      }
      }
      ]
    }
  ]
  
},


  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development
  mode: 'process.env.NODE_ENV',
  resolve: {
    extensions: ['.ts', '.jsx', '.js', '.svg', '.png']
    }, 
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html'})]
};
