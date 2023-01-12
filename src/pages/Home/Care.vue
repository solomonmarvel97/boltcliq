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
  <section>
  <div class="home">
    <div class="hero" >
      <div class="container">
          <h2>
            We listen, research, learn, understand and execute. Our processes makes us better professionals.
          </h2>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  background: url("../../assets/images/experience.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
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

.hero h2 {
  color: #ffffff;
  font-size: 30px;
  width: 700px;
}

.hero h1 span {
  color: var(--primary);
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


