const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/planeta/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/css/main.scss";`,
      },
    },
  },
});
