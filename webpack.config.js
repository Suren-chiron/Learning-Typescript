// info : i configured this webpack config for creating bundle of Module folder

const path = require('path');

module.exports = {
   entry: './Module/result.ts',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   devtool: 'inline-source-map',
   module: {
      rules: [{ test: /\.ts$/, use: 'ts-loader', exclude: '/node_modules/' }],
   },
   resolve: { extensions: ['.ts', '.js'] },
};
