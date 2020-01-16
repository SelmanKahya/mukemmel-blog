const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
module.exports = withSass(withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    },
    {
      test: /\.css$/i,
      use: 'css-loader',
    }
    );
    return config;
  }
}));