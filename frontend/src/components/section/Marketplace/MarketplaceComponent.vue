<template>
  <div class="container marketplace">
    <div class="row title-marketplace">
      <div class="col-12">
        <TitleSectionComponent
          title="Marketplace"
          subtitle="All the NFTs opportunity"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <SliderComponent
          type="banner"
          :image="sliderAWSImage"
          :content="{
            title: 'Awesome banner',
            subtitle: 'Testo super importante',
          }"
        />
      </div>
      <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
        <SliderComponent
          type="main"
          :image="sliderAWSImage"
          :content="{ title: 'Top 15', subtitle: 'Jolly card' }"
        />
      </div>
      <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0 mt-4 mt-lg-0">
        <SliderComponent
          type="banner"
          :image="sliderAWSImage"
          :content="{
            title: 'Awesome banner',
            subtitle: 'Testo super importante',
          }"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SliderComponent from "@/components/elements/Slider/SliderComponent";
import TitleSectionComponent from "@/components/typography/TitleSection/TitleSectionComponent";

export default {
  name: "MarketplaceComponent",
  components: { SliderComponent, TitleSectionComponent },
  data() {
    return {
      sliderImage: "/slider/gamers.jpg",
    };
  },
  computed: {
    sliderAWSImage() {
      return process.env.VUE_APP_S3_STORAGE_LINK + this.sliderImage;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "MarketplaceStyle";
</style>
