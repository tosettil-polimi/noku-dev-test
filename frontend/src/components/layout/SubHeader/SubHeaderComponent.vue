<template>
  <div class="sub-header container-fluid">
    <div class="row align-items-center">
      <div class="col-12 tab-headers-container">
        <div v-for="tab in tabs" :key="tab.name" class="tab-header">
          <span
            :class="{ 'tab-header-name': true, active: tab.name === selected }"
            @click="selected = tab.name"
          >
            {{ tab.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubHeaderComponent",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selectedName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: this.selectedName,
    };
  },
  watch: {
    selected() {
      // emit event tab changing
      this.$emit(
        "tab:change",
        this.tabs.find((tab) => tab.name === this.selected)
      );
    },
  },
};
</script>
<style lang="scss" scoped>
@import "SubHeaderStyle";
</style>
