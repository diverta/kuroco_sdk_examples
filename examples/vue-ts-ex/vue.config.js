module.exports = {
  chainWebpack: config => config.resolve.symlinks(false),
  devServer: {
    https: true,
    host: 'localhost',
    port: 9000,
  },
};
