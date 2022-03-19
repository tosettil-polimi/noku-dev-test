<template>
  <div
    :class="['slider', `slider-${type}`]"
    :style="{ backgroundImage: `url(${image})`, height: `${height}px` }"
  >
    <div :class="type">
      <h2 class="title">
        {{ content.title }}
      </h2>
      <h3 class="subtitle">
        {{ content.subtitle }}
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "SliderComponent",
  props: {
    type: {
      // banner | main
      type: String,
      default: "banner",
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      // { title: String, subtitle: String }
      type: Object,
      required: true,
    },
    height: {
      type: Number,
      default: 224,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "SliderStyle";
</style>
