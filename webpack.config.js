const config = {
  entry: `${__dirname}/app/src/app.js`,
  output: {
    path: `${__dirname}/app/public/js`,
    filename: 'bundle.js'
  },
  mode: 'development'
}

module.exports = config