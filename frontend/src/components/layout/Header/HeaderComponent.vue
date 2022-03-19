<template>
  <div class="header container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-1">
        <div class="logo-container">
          <img class="logo" src="@/assets/img/header/logo.png" alt="Noku.io" />
        </div>
      </div>
      <div class="col-sm-10">
        <div class="services-container">
          <ul class="list-services">
            <li
              v-for="service in services"
              :key="service?.href"
              :class="{ 'list-item': true, active: service?.href === location }"
            >
              <a :href="service.href" class="list-link">
                {{ service.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm-1">
        <div class="avatar-container">
          <a href="#">
            <img src="@/assets/img/header/avatar.svg" alt="username" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      location: "#/",
    };
  },
  created() {
    // hardcode for trigger router change, no vue-router in this project
    window.addEventListener(
      "hashchange",
      () => (this.location = window.location.hash || "#/")
    );
  },
};
</script>
<style lang="scss" scoped>
@import "HeaderStyle";
</style>
