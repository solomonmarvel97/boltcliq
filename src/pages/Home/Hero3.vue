<template>
  <div class="home mt-7">
    <div class="hero">
      <div class="container">
        <div>
          <h1>We create innovative digital solutions.</h1>
          <button class="center button-primary">Get a quote</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/images/design.png');
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
