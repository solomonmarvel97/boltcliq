<template>
  <div class="home">
    <div class="hero">
      <video no-controls muted autoplay loop>
        <source src="@/assets/images/background.mp4" type="video/mp4" />
      </video>
      <section>
        <div class="container">
          <h1>We create <span>innovative</span> digital solutions.</h1>
          <p>
            We create innovative digital products that impact the way people
            experience the world.
          </p>

          <div @click="playVideo" class="player_button">
            <img src="@/assets/icons/play.svg" alt="" />
            <p>Client Story</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  background: black;
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
  width: 546px;
  position: absolute;
  bottom: 15%;
}

.hero h1 {
  line-height: 65px;
  width: 700px;
  color: #ffffff;
  font-size: 70px;
  margin-bottom: 25px;
}

.hero h1 span {
  font-family: Poppins;
  color: var(--primary);
}

.hero p {
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
}

.hero .player_button {
  display: grid;
  min-width: 152px;
  width: 152px;
  align-items: center;
  grid-template-columns: 30% 70%;
  margin-top: 32px;
}

.hero .player_button p {
  font-size: 16px;
}

@media (max-width: 768px) {
  .hero {
    background-position: top right;
  }

  .hero h1 {
    width: 90%;
    line-height: 47px;
    font-size: 47px;
  }

  .hero p {
    width: 90%;
  }

  .hero .container {
    width: 95%;
  }
}
</style>

<script>
export default {
  name: "Hero_Component",
  components: {},
};
</script>
