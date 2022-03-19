<template>
  <main>
    <HeaderComponent :services="services" />
    <SubHeaderComponent :tabs="tabs" :selected-name="tabs[0].name" />
    <MarketplaceComponent />
    <BidComponent />
  </main>
</template>

<script>
import HeaderComponent from "@/components/layout/Header/HeaderComponent";
import services from "@/json/services.json";
import tabs from "@/json/tabs.json";
import SubHeaderComponent from "@/components/layout/SubHeader/SubHeaderComponent";
import MarketplaceComponent from "@/components/section/Marketplace/MarketplaceComponent";
import BidComponent from "@/components/section/Bid/BidComponent";

export default {
  name: "App",
  components: {
    BidComponent,
    MarketplaceComponent,
    SubHeaderComponent,
    HeaderComponent,
  },
  data() {
    return {
      services,
      tabs,
    };
  },
};
</script>
