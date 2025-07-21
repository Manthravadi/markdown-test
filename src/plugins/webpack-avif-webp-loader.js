module.exports = function () {
  return {
    name: "custom-avif-webp-loader",
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.(avif|webp)$/i,
              type: "asset/resource",
              generator: {
                filename: "assets/img/[name].[hash][ext]",
              },
            },
          ],
        },
      };
    },
  };
};
