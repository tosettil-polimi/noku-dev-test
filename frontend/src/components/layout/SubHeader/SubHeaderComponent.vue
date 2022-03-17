<template>
  <div class="sub-header container-fluid">
    <div class="row align-items-center">
      <div class="col-12 tab-headers-container">
        <div class="tab-header" v-for="tab in tabs" :key="tab.name">
          <span
              :class="{'tab-header-name': true, 'active': tab.name === selected }"
              @click="selected = tab.name">
            {{ tab.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SubHeaderComponent',
  data() {
    return {
      selected: this.selectedName
    }
  },
  props: {
    tabs: Array,
    selectedName: String
  },
  watch: {
    selected: function () {
      // emit event tab changing
      this.$emit('tab:change', this.tabs.find((tab) => tab.name === this.selected))
    }
  }
}
</script>
<style lang="scss">
@import "SubHeaderStyle";
</style>
