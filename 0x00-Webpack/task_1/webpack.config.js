const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: '[main]bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'production'
};
