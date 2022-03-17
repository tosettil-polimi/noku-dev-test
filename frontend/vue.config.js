const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/global.scss";`
      }
    }
  }
})
