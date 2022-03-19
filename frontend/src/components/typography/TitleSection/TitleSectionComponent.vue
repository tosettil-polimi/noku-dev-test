<template>
  <div class="title-section">
    <h3 class="title">
      {{ title }}
    </h3>
    <h4 class="subtitle">
      {{ subtitle }}
    </h4>
  </div>
</template>
<script>
export default {
  name: "TitleSectionComponent",
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "TitleSectionStyle";
</style>
