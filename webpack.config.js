const path = require('path');
const distPath = path.join(__dirname, './dist');
const TerserPlugin = require('terser-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

const config = {
   mode: isProduction ? 'production' : 'development',
   entry: './src/index.ts',
   module: {
      rules: [
         {
            test: /\.tsx?$/i,
            use: 'babel-loader',
            exclude: /node_modules/,
         }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
   },
   output: {
      filename: 'barcode-event.js',
      path: distPath,
      library: 'barcodeEvent',
      libraryTarget: 'umd'
   }
};

if (isProduction) {
   config.optimization = {
     minimizer: [
       new TerserPlugin(),
     ],
   };
 }

 module.exports = config;