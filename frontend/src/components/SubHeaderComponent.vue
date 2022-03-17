<template>
  <div class="sub-header container-fluid">
    <div class="row align-items-center">
      <div class="col-12 tab-headers-container">
        <div class="tab-header" v-for="tab in tabs" :key="tab.name">
          <span :class="{'tab-header-name': true, 'active': tab.name === selected }">
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
      selected: 'Board' /* Hardcode to avoid writing useless code */
    }
  },
  props: {
    tabs: Array
  }
}
</script>
