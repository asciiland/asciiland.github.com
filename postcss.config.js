module.exports = ctx => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: {
    'autoprefixer': {},
    'postcss-import': {},
    'postcss-extend': {},
    'postcss-custom-media': {},
    'postcss-preset-env': {
      'stage': 1,
      'browsers': 'last 2 versions'
    },
    'cssnano': ctx.env === 'production' ? {preset: 'default'} : false
  }
})

