const path = require('path');


module.exports = {
  webpack: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'img' : path.resolve(__dirname, './img')
    },
  },
};
