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
        <CardButtonComponent @click="modalOpened = true" :type="offerType" />
      </div>
    </div>
  </div>
</template>
<script>
import CardLabelComponent from "@/components/typography/CardLabel/CardLabelComponent";
import CardButtonComponent from "@/components/elements/CardButton/CardButtonComponent";
import timer_expiration from "@/mixins/timer_expiration";

export default {
  name: 'NFTCardComponent',
  components: {CardButtonComponent, CardLabelComponent},
  data() {
    return {
      favorite: false,
      modalOpened: false
    }
  },
  mixins: [timer_expiration],
  props: {
    // fields in the `card` schema
    nftCard: Object,    // { name: String, type: String, price: Number, image: String, type: String }
    offerType: {        // bid | sell
      type: String,
      default: 'sell'
    },
    // bidNumber, lastSalePrice will be calculated from backend db
    bid: Object,         // { bidNumber: Number, lastSalePrice: Number }
  },
  computed: {
    imageSource() {
      return `${process.env.VUE_APP_S3_STORAGE_LINK}${this.nftCard.image}`
    }
  }
}
</script>
<style lang="scss">
@import "NFTCardStyle";
</style>
