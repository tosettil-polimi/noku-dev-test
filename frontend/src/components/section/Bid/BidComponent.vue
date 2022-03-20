<template>
  <div class="container bid-section">
    <div class="row align-items-sm-baseline">
      <div class="col-sm-10">
        <TitleSectionComponent title="NFTs BID" subtitle="make an offer" />
      </div>
      <div class="col-sm-2">
        <ViewAllComponent />
      </div>
    </div>
    <div class="row">
      <div v-for="bid in bids" :key="bid._id" class="col-md-6 col-xl-4">
        <NFTCardComponent
          offer-type="bid"
          :nft-card="bid"
          :expiration="bid.expiration_date"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { DateTime } from "luxon";
import axios from "axios";
import TitleSectionComponent from "@/components/typography/TitleSection/TitleSectionComponent";
import ViewAllComponent from "@/components/typography/ViewAll/ViewAllComponent";
import NFTCardComponent from "@/components/elements/NFTCard/NFTCardComponent";

export default {
  name: "BidComponent",
  components: { NFTCardComponent, ViewAllComponent, TitleSectionComponent },
  data() {
    return {
      bids: [],
    };
  },
  mounted() {
    this.fetchBids();
  },
  methods: {
    fetchBids() {
      axios.get(`${process.env.VUE_APP_BACKEND_URL}/bid`).then(
        (res) =>
          (this.bids = res.data.map((bid) => ({
            ...bid,
            expiration_date: DateTime.fromISO(bid.expiration_date),
            price: bid.starting_price,
          })))
      );
    },
  },
};
</script>
<style lang="scss" scoped>
@import "BidStyle";
</style>
