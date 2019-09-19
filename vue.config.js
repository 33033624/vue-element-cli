const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@comp", resolve("src/components"))
      .set("@views", resolve("src/views"));
  },
  devServer: {
    disableHostCheck: true,
    port: 8080,
    proxy: {
      "/kssfyz": {
        target: "http://192.168.1.100:8080",
        changeOrigin: true
      }
    }
  }
};
