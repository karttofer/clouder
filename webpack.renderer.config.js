const rules = require('./webpack.rules')
const path = require('path')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

rules.push({
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader',
  ],
})

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/ui/components'),
      Assets: path.resolve(__dirname, 'src/assets'),
      Utils: path.resolve(__dirname, 'src/utils'),
      Env: path.resolve(__dirname, 'enviroment.js'),
    },
  },
}
