const path = require('path');
var isProduction = true;

var distPath = path.join(__dirname, './dist');

module.exports = {
   entry: './src/index.ts',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: [
               !isProduction && {
                  loader: 'babel-loader'
               },
              'ts-loader'
            ].filter(Boolean),
            exclude: /node_modules/
          },
      ]
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js']
   },
   output: {
      filename: 'barcode-event.js',
      path: distPath,
      library: 'barcodeEvent',
      libraryTarget: 'umd'
   }
   , devServer: {
      contentBase: distPath,
      hot: true,
      inline: true,
      historyApiFallback: true,
      stats: 'minimal',
      clientLogLevel: 'warning'
   }
};