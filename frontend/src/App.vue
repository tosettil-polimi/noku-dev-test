<template>
  <main>
    <HeaderComponent :services="services" />
    <SubHeaderComponent :tabs="tabs" :selected-name="tabs[0].name" />
    <MarketplaceComponent />
    <CardSectionComponent
      type="bid"
      title="NFTs BID"
      subtitle="make an offer"
      fetching-url="/bid"
    />
    <CardSectionComponent
      type="sell"
      title="NFTs SELL"
      subtitle="buy now"
      fetching-url="/sell"
    />
  </main>
</template>

<script>
import tabs from "@/json/tabs.json";
import services from "@/json/services.json";
import HeaderComponent from "@/components/layout/Header/HeaderComponent";
import CardSectionComponent from "@/components/section/Bid/CardSectionComponent";
import SubHeaderComponent from "@/components/layout/SubHeader/SubHeaderComponent";
import MarketplaceComponent from "@/components/section/Marketplace/MarketplaceComponent";

export default {
  name: "App",
  components: {
    CardSectionComponent,
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
