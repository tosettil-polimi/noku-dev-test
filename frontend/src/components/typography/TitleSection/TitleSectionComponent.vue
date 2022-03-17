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
  name: 'TitleSectionComponent',
  data() {
    return {}
  },
  props: {
    title: String,
    subtitle: String
  }
}
</script>
<style lang="scss">
@import "TitleSectionStyle";
</style>
