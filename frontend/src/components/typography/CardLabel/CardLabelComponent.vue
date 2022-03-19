<template>
  <div v-if="type === 'price'" :class="['price-label', orientation ]">
    <span class="label">
      {{ label }}
    </span>
    <span class="price noku-price">
      {{ nokuFormattedPrice }} Noku
    </span>
    <span class="price fiat-price">
      ({{ fiatFormattedPrice }} EUR)
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
</template>
<script>
import locale_number_format from "@/mixins/locale_number_format";

export default {
  name: "CardLabelComponent",
  props: {
    nokuPrice: {        // used for type `price`
      type: Number,
      default: 0
    },
    content: String,    // used for type `details`
    label: String,
    orientation: {
      type: String,
      default: 'left'
    },
    type: {
      type: String,
      default: 'price'  // price | details
    }
  },
  computed: {
    nokuFormattedPrice() {
      return locale_number_format(this.nokuPrice)
    },
    fiatPrice() {
      return this.nokuPrice * 0.5  // hardcoding Noku val to 0.5 €
    },
    fiatFormattedPrice() {
      return locale_number_format(this.fiatPrice)
    }
  }
}
</script>
<style lang="scss">
@import "CardLabelStyle";
</style>
