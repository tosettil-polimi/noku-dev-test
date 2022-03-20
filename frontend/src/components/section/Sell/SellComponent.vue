<template>
  <div class="container sell-section">
    <div class="row align-items-sm-baseline">
      <div class="col-sm-10">
        <TitleSectionComponent title="NFTs SELL" subtitle="buy now" />
      </div>
      <div class="col-sm-2">
        <ViewAllComponent />
      </div>
    </div>
    <div class="row">
      <div v-for="card in cards" :key="card._id" class="col-md-6 col-xl-4">
        <NFTCardComponent
          offer-type="sell"
          :nft-card="card"
          :expiration="generateExpiration()"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { DateTime } from "luxon";
import TitleSectionComponent from "@/components/typography/TitleSection/TitleSectionComponent";
import ViewAllComponent from "@/components/typography/ViewAll/ViewAllComponent";
import NFTCardComponent from "@/components/elements/NFTCard/NFTCardComponent";
import cards from "@/json/sells.json";

export default {
  name: "SellComponent",
  components: { NFTCardComponent, ViewAllComponent, TitleSectionComponent },
  data() {
    return {
      cards,
    };
  },
  methods: {
    generateExpiration() {
      return DateTime.now().plus({
        seconds: Math.floor(Math.random() * 10000),
        days: Math.floor(Math.random() * 10),
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "SellStyle";
</style>
