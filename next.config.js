const withCSS = require('@zeit/next-css')
module.exports = withCSS({
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
});