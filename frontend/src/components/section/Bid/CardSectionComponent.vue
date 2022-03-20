<template>
  <div class="container card-section">
    <div class="row align-items-sm-baseline">
      <div class="col-sm-10">
        <TitleSectionComponent :title="title" :subtitle="subtitle" />
      </div>
      <div class="col-sm-2">
        <ViewAllComponent />
      </div>
    </div>
    <div class="row">
      <div v-for="card in cards" :key="card._id" class="col-md-6 col-xl-4">
        <NFTCardComponent
          :offer-type="type"
          :nft-card="card"
          :expiration="card.expiration_date"
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
  name: "CardSectionComponent",
  components: { NFTCardComponent, ViewAllComponent, TitleSectionComponent },
  data() {
    return {
      cards: [],
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    fetchingUrl: {
      type: String,
      required: true,
    },
    type: {
      // sell | bid
      type: String,
      required: true,
    },
  },
  mounted() {
    this.fetchCardData();
  },
  methods: {
    fetchCardData() {
      axios.get(`${process.env.VUE_APP_BACKEND_URL}${this.fetchingUrl}`).then(
        (res) =>
          (this.cards = res.data.map((card) => ({
            ...card,
            expiration_date: DateTime.fromISO(card.expiration_date),
            price: this.type === "bid" ? card.starting_price : card.price,
          })))
      );
    },
  },
};
</script>
<style lang="scss" scoped>
@import "CardSectionStyle";
</style>
