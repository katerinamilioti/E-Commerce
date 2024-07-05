<template>
  <BCarousel :interval="slideInterval" controls indicators ride="carousel">
    <BCarouselSlide
      :img-src="salesShoes"
      caption-html="<h1>Best of Sales</h1>"
    />
    <BCarouselSlide
      :img-src="menShoes"
      caption-html="<h1>New Running Men Shoes</h1>"
    />
    <BCarouselSlide
      :img-src="womenShoes"
      caption-html="<h1>New Running Women Shoes</h1>"
    />
  </BCarousel>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import menShoes from "../assets/images/slider-banner-imgs/men-shoes.jpg";
  import womenShoes from "../assets/images/slider-banner-imgs/women-shoes.jpg";
  import salesShoes from "../assets/images/slider-banner-imgs/sales-shoes.jpg";

  const slideInterval = ref(2000);
</script>
