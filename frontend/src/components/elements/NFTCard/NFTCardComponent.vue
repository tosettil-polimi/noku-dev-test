<template>
  <div class="nft-card">
    <div class="img-holder">
      <div class="row">
        <div class="col-8 offset-2 text-center">
          <img class="nft-img" :src="imageSource" :alt="nftCard.name" />
        </div>
        <div class="col-2">
          <!-- hardcoding just to see "dynamic" clicking, no auth in this proj -->
          <img
            v-if="favorite"
            class="favorite"
            src="@/assets/img/card/heart-filled.svg"
            alt="Favorite"
            @click="favorite = !favorite"
          />
          <img
            v-else
            class="favorite"
            src="@/assets/img/card/heart.svg"
            alt="Favorite"
            @click="favorite = !favorite"
          />
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
          <div class="col-lg-6">
            <CardLabelComponent
              label="List price"
              :noku-price="nftCard.price"
            />
          </div>
          <div v-if="offerType === 'bid'" class="col-lg-6">
            <CardLabelComponent
              label="Last sale price"
              :noku-price="bid.lastSalePrice"
              orientation="right"
            />
          </div>
          <div class="col-lg-6">
            <CardLabelComponent
              label="Expire in"
              type="details"
              :content="displayTimer"
              :orientation="offerType === 'bid' ? 'left' : 'right'"
            />
          </div>
          <div v-if="offerType === 'bid'" class="col-lg-6">
            <CardLabelComponent
              label="Bid"
              type="details"
              :content="`${bid.bidNumber} Bid`"
              orientation="right"
            />
          </div>
        </div>
      </div>
      <div class="card-footer">
        <CardButtonComponent :type="offerType" @click="modalOpened = true" />
      </div>
    </div>
    <NFTActionModalComponent
      :expiration="expiration"
      :open="modalOpened"
      :nft-card="nftCard"
      :bid="bid"
      :type="offerType"
      @closing="modalOpened = false"
    />
  </div>
</template>
<script>
import CardLabelComponent from "@/components/typography/CardLabel/CardLabelComponent";
import CardButtonComponent from "@/components/elements/CardButton/CardButtonComponent";
import NFTActionModalComponent from "@/components/elements/NFTActionModal/NFTActionModalComponent";
import timerExpiration from "@/mixins/timerExpiration";

export default {
  name: "NFTCardComponent",
  components: {
    NFTActionModalComponent,
    CardButtonComponent,
    CardLabelComponent,
  },
  mixins: [timerExpiration],
  props: {
    // fields in the `card` schema
    nftCard: {
      type: Object,
      required: true,
    }, // { name: String, type: String, price: Number, rarity: String, image: String, type: String }
    offerType: {
      // bid | sell
      type: String,
      default: "sell",
    },
    // bidNumber, lastSalePrice will be calculated from backend db
    bid: {
      type: Object,
      required: false,
      default: null,
    }, // { bidNumber: Number, lastSalePrice: Number }
  },
  data() {
    return {
      favorite: false,
      modalOpened: false,
    };
  },
  computed: {
    imageSource() {
      return `${process.env.VUE_APP_S3_STORAGE_LINK}${this.nftCard.image}`;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "NFTCardStyle";
</style>
