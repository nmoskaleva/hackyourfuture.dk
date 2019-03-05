const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped'
          }
        },
        'sass-loader'
      ]
    })
    if (config.mode === 'production') {
      config.plugins.push(
        new CompressionPlugin(),
      );
    }
    
    return config
  }
}
