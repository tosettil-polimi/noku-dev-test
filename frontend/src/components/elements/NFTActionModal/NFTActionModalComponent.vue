<template>
  <div :class="modalClass" :style="modalStyle">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="row header-row">
            <div class="col-8 offset-2">
              <img class="header-img" :src="imageSrc" :alt="nftCard.name" />
            </div>
            <div class="col-2">
              <button class="modal-close" @click="closing()">
                <img
                  class="cross"
                  src="@/assets/img/icons/cross.svg"
                  alt="Close"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <h3 class="modal-title">Buy {{ nftCard.name }} Card</h3>
              <span class="amenties">
                <!-- i don't know what is "15/500", maybe "in stock"? -->
                {{ nftCard.type }} | {{ nftCard.rarity }} | 15/500
              </span>
              <div :class="{ expiration: true, sell: !isBid }">
                <img
                  class="clock"
                  src="@/assets/img/icons/clock.svg"
                  alt="Expiration"
                />
                Expire in: {{ displayTimer }}
              </div>
            </div>
            <div class="col-sm-6">
              <NokuInputComponent
                v-if="isBid"
                label="Place your bid"
                placeholder="1.000"
              />
              <NokuInputComponent v-else :noku-price="59" :disabled="true" />
              <div class="current-balance">
                Current Balance: <span class="amount"> {{ amount }} NOKU </span>
              </div>
            </div>
            <div v-if="isBid" class="col-sm-6 mt-3 mt-sm-0">
              <NokuInputComponent
                label="Starts from"
                :noku-price="59"
                :disabled="true"
              />
              <div class="current-balance right">{{ bid.bidNumber }} bid</div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="row footer-row align-items-center">
            <div class="col-6">
              <button class="cancel-btn" @click="closing()">Cancel</button>
            </div>
            <div class="col-6">
              <button class="main-btn">
                {{ isBid ? "Make an offer" : "Buy now" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import timerExpiration from "@/mixins/timerExpiration";
import localeNumberFormat from "@/mixins/localeNumberFormat";
import NokuInputComponent from "@/components/form/NokuInput/NokuInputComponent";

export default {
  name: "NFTActionModalComponent",
  components: { NokuInputComponent },
  mixins: [timerExpiration, localeNumberFormat],
  props: {
    open: Boolean,
    nftCard: {
      type: Object,
      required: true,
    },
    type: {
      // bid | sell
      type: String,
      required: true,
    },
    bid: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      modalStyle: { display: "none" },
      modalClass: { "modal fade": true, show: false },
    };
  },
  computed: {
    isBid() {
      return this.type === "bid";
    },
    imageSrc() {
      return `${process.env.VUE_APP_S3_STORAGE_LINK}${this.nftCard.image}`;
    },
    amount() {
      // random generate balance amount, should be a value in vuex store
      return this.localeNumberFormat(Math.floor(Math.random() * 10000));
    },
  },
  watch: {
    // animation triggering
    open(newVal) {
      if (newVal) {
        this.modalStyle = { display: newVal ? "block" : "none" };
        setTimeout(
          () => (this.modalClass = { "modal fade": true, show: newVal }),
          120
        );
      } else {
        this.modalClass = { "modal fade": true, show: newVal };
        setTimeout(
          () => (this.modalStyle = { display: newVal ? "block" : "none" }),
          120
        );
      }

      this.triggerBodyScroll();
    },
  },
  methods: {
    closing() {
      this.$emit("closing", true);
    },
    triggerBodyScroll() {
      if (this.open) document.body.classList.add("no-scroll");
      else document.body.classList.remove("no-scroll");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "NFTActionModalStyle";
</style>
