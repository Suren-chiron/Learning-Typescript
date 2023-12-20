const path = require('path');

module.export = {
   entry: './src/index.ts',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
};
