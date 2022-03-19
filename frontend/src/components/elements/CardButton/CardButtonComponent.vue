<template>
  <button :class="['card-button', type]">
    <img v-if="type === 'bid'" :alt="type" src="@/assets/img/icons/gavel.svg" class="card-button-icon">
    <img v-if="type === 'sell'" :alt="type" src="@/assets/img/icons/shopping-cart.svg" class="card-button-icon">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "CardButtonComponent",
  props: {
    type: {           // bid | sell
      type: String,
      default: 'bid'
    }
  },
  computed: {
    text() {
      return this.type === 'bid' ? 'Place your bid' : 'Buy now'
    }
  }
}
</script>
<style lang="scss">
@import "CardButtonStyle";
</style>
