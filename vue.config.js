const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/css/main.scss";`,
      },
    },
  },
});