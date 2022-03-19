<template>
  <div class="nft-card">
    <div class="img-holder">
      <div class="row">
        <div class="col-sm-8 offset-sm-2 text-center">
          <img class="nft-img" :src="imageSource" :alt="nftCard.name">
        </div>
        <div class="col-sm-2">
          <!-- hardcoding just to see "dynamic" clicking, no auth in this proj -->
          <img v-if="favorite" @click="favorite = !favorite"
               class="favorite" src="@/assets/img/card/heart-filled.svg" alt="Favorite">
          <img v-else  @click="favorite = !favorite"
               class="favorite" src="@/assets/img/card/heart.svg" alt="Favorite">
        </div>
      </div>
    </div>
    <div class="info-holder">
      <div class="card-header">
        <h5 class="nft-name">
          {{ nftCard.name }}
        </h5>
        <span class="nft-type">
          {{ nftCard.type }}
        </span>
      </div>
      <div class="card-content">
        <div class="row">
          <div class="col-sm-6">
            <CardLabelComponent label="List price" :noku-price="nftCard.price"/>
          </div>
          <div class="col-sm-6" v-if="offerType === 'bid'">
            <CardLabelComponent label="Last sale price" :noku-price="bid.lastSalePrice"
                                orientation="right"/>
          </div>
          <div class="col-sm-6">
            <CardLabelComponent label="Expire in" type="details" :content="displayTimer"
                                :orientation="offerType === 'bid' ? 'left' : 'right'"/>
          </div>
          <div class="col-sm-6" v-if="offerType === 'bid'">
            <CardLabelComponent label="Bid" type="details" :content="`${bid.bidNumber} Bid`"
                                orientation="right"/>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <!-- todo: @click for modal -->
        <CardButtonComponent :type="offerType" />
      </div>
    </div>
  </div>
</template>
<script>
import CardLabelComponent from "@/components/typography/CardLabel/CardLabelComponent";
import { DateTime, Duration } from "luxon";
import CardButtonComponent from "@/components/elements/CardButton/CardButtonComponent";

export default {
  name: 'NFTCardComponent',
  components: {CardButtonComponent, CardLabelComponent},
  data() {
    return {
      now: DateTime.local(),
      favorite: false,
      timer: null
    }
  },
  props: {
    // fields in the `card` schema
    nftCard: Object,    // { name: String, type: String, price: Number, image: String, type: String }
    offerType: {        // bid | sell
      type: String,
      default: 'sell'
    },
    // bidNumber, lastSalePrice will be calculated from backend db
    bid: Object,         // { bidNumber: Number, lastSalePrice: Number }
    expiration: Object  // expiration of the sell or bid
  },
  mounted() {
    this.timer = setInterval(() => this.now = DateTime.local(), 1000)
  },
  unmounted() {
    clearInterval(this.timer)
  },
  computed: {
    imageSource() {
      return `${process.env.VUE_APP_S3_STORAGE_LINK}${this.nftCard.image}`
    },
    remaining() {
      return this.expiration.diff(this.now).toObject()
    },
    displayTimer() {
      return Duration.fromObject(this.remaining).toFormat(`d'd' : hh'h' : mm'm' : ss's'`)
    }
  }
}
</script>
<style lang="scss">
@import "NFTCardStyle";
</style>
