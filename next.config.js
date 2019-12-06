const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssLoaderOptions: {
    url: false
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    

    return config;
  }
});
