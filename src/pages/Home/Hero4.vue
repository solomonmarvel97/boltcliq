<template>
  <div class="home">
    <div class="hero">
      <img class="hero-image" src="@/assets/images/design2.png" />
    </div>
  </div>
</template>

<style scoped>

.home {
  width: 90%;
  height: 100%;
  border-radius: 50px;
  background-color: rgba(98, 98, 98, 0.067);
  margin: 0 auto;
}

.hero {
  display: grid;
  height: 100%;
  padding-bottom: 1em;
}

.home .hero .hero-image {
  width: 100%;
}



@media (max-width: 768px) {
  .home {
    height: 100%;
    padding-top: 2em;
  }
}
</style>

<script>
export default {
  name: "Hero_Component",
  components: {},
};
</script>
