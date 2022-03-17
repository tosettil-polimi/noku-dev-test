<template>
  <div  :class="{'slider': true, 'slider-banner': type === 'banner', 'slider-main': type === 'main'}"
        :style="{ backgroundImage: `url(${image})`, height: `${height}px` }" >
    <div :class="type" >
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
  name: 'SliderComponent',
  data() {
    return {}
  },
  props: {
    type: String,   // banner | main
    image: String,
    content: Object, // { title: String, subtitle: String }
    height: {
      type: Number,
      default: 224
    }
  }
}
</script>
<style lang="scss">
@import "SliderStyle";
</style>
