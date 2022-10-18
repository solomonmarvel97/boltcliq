<script>
export default {
  name: "Hero_Component",
  components: {},
  methods: {
    setupAnimation(e) {
      const zoomScreen = document.getElementById("image");
      let zoom = 1;
      const zoomingSpeed = 0.1;

      if (e.deltaY > 0) {
        zoomScreen.style.transform = `scale(${(zoom += zoomingSpeed)})`;
        zoomScreen.style.borderRadius ='0px'
        
      } else {
        zoomScreen.style.transform = `scale(${(zoom -= zoomingSpeed)})`;
        zoomScreen.style.borderRadius ='3px'
      }
    }
  },
};
</script>


<template>
  <div class="home">
    <div class="hero" >
<!--      <div class="hero" @wheel="setupAnimation">-->
      <div class="container">
        <section>
          <h1>
            We listen, research, learn, understand and execute, and our processes makes us better professionals.
          </h1>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: url("../../assets/images/experience.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 2s ease;
}

video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
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

.hero h1 {
  line-height: 1.2;
  color: #ffffff;
  font-size: 60px;
  margin-bottom: 25px;
  width: 650px;
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
    background-position: center;
  }

  .hero h1 {
    width: 100%;
    font-size: 30px;
  }

  .hero p {
    width: 90%;
  }

  .hero .container {
    width: 95%;
  }
}
</style>


