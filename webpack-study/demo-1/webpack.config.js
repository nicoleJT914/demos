var path = require('path')

module.exports = {
  watch: true,
  context: path.resolve(__dirname, "src/app"),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: './bundle.js'
  }

}