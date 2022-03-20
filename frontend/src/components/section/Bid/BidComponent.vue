<template>
  <div class="container bid-section mb-5">
    <!-- fixme: remove mb-5 -->
    <div class="row align-items-sm-baseline">
      <div class="col-sm-10">
        <TitleSectionComponent title="NFTs BID" subtitle="make an offer" />
      </div>
      <div class="col-sm-2">
        <ViewAllComponent />
      </div>
    </div>
    <div class="row card-row">
      <div v-for="card in cards" :key="card._id" class="col-md-6 col-xl-4">
        <NFTCardComponent
          offer-type="sell"
          :bid="card.bid"
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
import cards from "@/json/cards.json";

export default {
  name: "BidComponent",
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
@import "BidStyle";
</style>
