<template>
  <div class="noku-input">
    <span class="label">
      {{ label }}
    </span>
    <input
      v-if="!disabled"
      v-model="value"
      class="input"
      type="text"
      :placeholder="placeholder"
    />
    <span v-if="!disabled" class="unit"> Noku </span>
    <div v-else class="disabled-input">
      <span class="noku-price"> {{ nokuFormattedPrice }} Noku </span>
      <span class="fiat-price"> ({{ fiatFormattedPrice }} {{ fiat }}) </span>
    </div>
  </div>
</template>
<script>
import localeNumberFormat from "@/mixins/localeNumberFormat";

export default {
  mixins: [localeNumberFormat],
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    nokuPrice: {
      type: Number,
      default: 0,
    },
    fiat: {
      type: String,
      default: "EUR",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  computed: {
    fiatPrice() {
      return this.nokuPrice * 0.5;
    },
    fiatFormattedPrice() {
      return this.localeNumberFormat(this.fiatPrice, 3);
    },
    nokuFormattedPrice() {
      return this.localeNumberFormat(this.nokuPrice, 3);
    },
  },
  watch: {
    value(newVal) {
      this.$emit("update:modelValue", newVal);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "NokuInputStyle";
</style>
