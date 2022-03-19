<template>
  <div>
    <div v-if="type === 'price'" :class="['price-label', orientation]">
      <span class="label">
        {{ label }}
      </span>
      <span class="price noku-price"> {{ nokuFormattedPrice }} Noku </span>
      <span class="price fiat-price">
        ({{ fiatFormattedPrice }} {{ fiat }})
      </span>
    </div>
    <div v-if="type === 'details'" :class="['price-label', orientation]">
      <span class="label">
        {{ label }}
      </span>
      <span class="price fiat-price">
        {{ content }}
      </span>
    </div>
  </div>
</template>
<script>
import localeNumberFormat from "@/mixins/localeNumberFormat";

export default {
  name: "CardLabelComponent",
  mixins: [localeNumberFormat],
  props: {
    nokuPrice: {
      // used for type `price`
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      required: false,
      default: "",
    }, // used for type `details`
    label: {
      type: String,
      required: true,
    },
    orientation: {
      type: String,
      default: "left",
    },
    type: {
      // price | details
      type: String,
      default: "price",
    },
    fiat: {
      type: String,
      default: "EUR",
    },
  },
  computed: {
    nokuFormattedPrice() {
      return this.localeNumberFormat(this.nokuPrice);
    },
    fiatPrice() {
      return this.nokuPrice * 0.5; // hardcoding Noku val to 0.5 €
    },
    fiatFormattedPrice() {
      return this.localeNumberFormat(this.fiatPrice);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "CardLabelStyle";
</style>
