const withSass = require('@zeit/next-sass');

const withCSS = require('@zeit/next-css')

module.exports = withCSS(withSass({
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  }
}));