const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    config.module.rules.push({
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    });

    return config;
  }
});
