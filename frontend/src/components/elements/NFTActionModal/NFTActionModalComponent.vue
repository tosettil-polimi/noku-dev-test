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
          <div class="row body-row">
            <div class="col-sm-6">
              <NokuInputComponent label="Place your bid" placeholder="1.000" />
            </div>
            <div class="col-sm-6">
              <NokuInputComponent
                label="Starts from"
                :noku-price="59"
                :disabled="true"
              />
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
                {{ type === "bid" ? "Make an offer" : "Buy now" }}
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
import NokuInputComponent from "@/components/form/NokuInput/NokuInputComponent";

export default {
  name: "NFTActionModalComponent",
  components: { NokuInputComponent },
  mixins: [timerExpiration],
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
  },
  data() {
    return {
      modalStyle: { display: "none" },
      modalClass: { "modal fade": true, show: false },
    };
  },
  computed: {
    imageSrc() {
      return `${process.env.VUE_APP_S3_STORAGE_LINK}${this.nftCard.image}`;
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

      this.triggerBodyScroll(newVal);
    },
  },
  methods: {
    closing() {
      this.$emit("closing", true);
    },
    triggerBodyScroll(open) {
      if (open)
        document.getElementsByTagName("body")[0].classList.add("no-scroll");
      else
        document.getElementsByTagName("body")[0].classList.remove("no-scroll");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "NFTActionModalStyle";
</style>
