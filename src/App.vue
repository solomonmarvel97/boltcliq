<template>
  <Navigation />
  <router-view />
  <Footer />
</template>

<style>
@import url("../src/assets/style/main.css");
</style>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>
