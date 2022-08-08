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
        zoomScreen.style.borderRadius ='60px'
      }
    }
  },
};
</script>


<template>
  <div class="home mt-7">
    <div class="hero" @wheel="setupAnimation">
    <img src="../../assets/images/background1.jpg" id="image"/>
      <div class="container">
        <section>
          <h1>
            We listen, research, learn and understand before we build. Our
            processes makes us better professionals.
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
  background: none;
  position: relative;
  overflow: hidden;
}

.hero img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 2s ease;
  filter: brightness(50%); 
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

.hero .container div {
  display: grid;
  place-items: center;
}

.hero h1 {
  line-height: 1.2;
  color: #ffffff;
  font-size: 50px;
  margin-bottom: 25px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 14px;
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


