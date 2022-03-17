<template>
  <main>
    <HeaderComponent :services="services"/>
    <SubHeaderComponent :tabs="tabs" :selected-name="tabs[0].name"/>
    <MarketplaceComponent/>
  </main>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import services from '@/json/services.json';
import tabs from '@/json/tabs.json';
import SubHeaderComponent from "@/components/SubHeaderComponent";
import MarketplaceComponent from "@/components/MarketplaceComponent";

export default {
  name: 'App',
  data() {
    return {
      services,
      tabs
    }
  },
  components: {
    MarketplaceComponent,
    SubHeaderComponent,
    HeaderComponent
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
