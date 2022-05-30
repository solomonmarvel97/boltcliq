<template>
  <div class="home">
    <div class="hero">
      <video no-controls muted autoplay loop>
        <source src="@/assets/images/background.mp4" type="video/mp4" />
      </video>
      <div class="container">
        <div>
          <h1>We create <span>innovative</span> digital solutions.</h1>
          <p class="mb-2">
            We create innovative digital products that impact the way people
            experience the world.
          </p>
          <button class="center button-primary">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  background: #151515;
  mix-blend-mode: normal;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  /* object-position: center center; */
}

.hero:before {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.668);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hero .container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
}

.hero .container div {
  display: grid;
  place-items: center;
}

.hero h1 {
  line-height: 1.1;
  width: 600px;
  color: #ffffff;
  font-size: 70px;
  margin-bottom: 25px;
  text-align: center;
}

.hero h1 span {
  font-family: var(--heading-font-family);
  color: var(--primary);
}

.hero p {
  width: 600px;
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
  text-align: center;
}

.hero .player_button p {
  font-size: 16px;
}

@media (max-width: 768px) {
  .hero {
    background-position: top right;
  }

  .hero h1 {
    width: 100%;
    line-height: 47px;
    font-size: 47px;
  }

  .hero p {
    width: 100%;
  }

  .hero .container {
    width: 100%;
  }
}
</style>

<script>
export default {
  name: "Hero_Component",
  components: {},
};
</script>
