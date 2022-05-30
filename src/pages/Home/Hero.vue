<template>
  <div class="home">
    <div class="hero">
      <video no-controls muted autoplay loop>
        <source src="@/assets/images/background.mp4" type="video/mp4" />
      </video>

      <div class="container">
        <section>
          <div>
            <h1>We create innovative digital solutions.</h1>
            <p class="mb-2">
              We create innovative digital products that impact the way people
              experience the world.
            </p>
            <button class="button-primary">Learn More</button>
          </div>
        </section>
        <div class="container-bottom">
          <section>
            <div class="bottom-grid">
              <a href="https://pages.topuniverse.org/message-from-our-ceo/" target="_blank">
              <h4 class="bottom-text">The Future of Education</h4>
              </a>
              <a href="#">
              <h4 class="bottom-text">Food Aggregation</h4>
              </a>
              <a href="https://topuniverse.org/cohorts/" target="_blank">
              <h4 class="bottom-text">Top Universe Cohort</h4>
              </a>
              <a href="https://topafrica.org" target="_blank">
              <h4 class="bottom-text">Product Development</h4>
              </a>
            </div>
          </section>
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

a {
  all: unset
}

section {
  width: 85%;
  margin: 0 auto;
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
  height: 100%;
  display: grid;
  align-items: center;
}

.hero .container-bottom {
  position: absolute;
  bottom: 30px;
  width: 100%;
  /* margin: 0 auto; */
}

.hero .container-bottom .bottom-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  align-items: center;
  margin: 0 auto;
}

.bottom-text {
  color: rgba(255, 255, 255, 0.505);
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
}

.bottom-text:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.042);
  border-top: .1px solid white;
  transition: all 0.4s ease-in-out;
}

.hero h1 {
  line-height: 1.1;
  width: 600px;
  color: #ffffff;
  font-size: 55px;
  margin-bottom: 25px;
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
}

.hero .player_button p {
  font-size: 16px;
}

@media (max-width: 768px) {
  .hero {
    background-position: top right;
    height: 130vh;
  }

  .hero h1 {
    width: 100%;
    line-height: 45px;
    font-size: 45px;
  }

  .hero p {
    width: 100%;
    font-size: 16px;
    line-height: 1.5;
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
