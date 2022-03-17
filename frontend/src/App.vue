<template>
  <HeaderComponent :services="services"/>
  <img alt="Vue logo" src="@/assets/img/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderComponent from "@/components/Header";
import services from '@/json/services.json';

export default {
  name: 'App',
  data() {
    return {
      services: services
    }
  },
  components: {
    HeaderComponent,
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "scss/style";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
