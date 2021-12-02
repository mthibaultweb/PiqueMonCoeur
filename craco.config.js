const path = require('path');


module.exports = {
  webpack: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'data' : path.resolve(__dirname, './src/data'),
      'contexts' : path.resolve(__dirname, './src/contexts')
    },
  },
};
