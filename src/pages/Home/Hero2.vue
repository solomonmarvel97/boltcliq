<template>
  <div class="home">
    <div class="hero">
      <img class="hero-image" src="@/assets/images/1.jpg" />
      <section>
        <div class="container">
          <img class="container-image" src="@/assets/images/4.jpg" />
          <h1>We create innovative digital solutions.</h1>
          <img class="wrapper avatar" src="@/assets/images/People/amaka.png" />
          <img class="wrapper avatar" src="@/assets/images/People/marv.png" />
          <img class="wrapper avatar" src="@/assets/images/People/mayowa.png" />
          <!-- <button class="button-light mt-2">Get a Quote</button> -->
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
  overflow: hidden;
}

.hero .hero-image {
  height: 70%;
  width: 50%;
  position: absolute;
  right: -200px;
  top: 15%;
  border-radius: var(--border-radius);
  object-fit: cover;
}

.hero .container {
  width: 546px;
  position: absolute;
  bottom: 15%;
}

.hero .container .avatar {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 0.5em;
  object-fit: cover;
  filter: contrast(120%);
  transition: all .2s;
}


.hero .container .container-image {
  height: 300px;
  width: 60%;
  object-fit: cover;
  margin-bottom: 1em;
  border-radius: var(--border-radius);
  transition: all .5s;
}

.hero .container .container-image:hover {
  object-fit: cover;
  
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.hero .container .wrapper {
  padding: 3px;
  border: 1px solid rgba(255, 255, 255, 0.198);
}

.hero h1 {
  line-height: 65px;
  width: 700px;
  color: #ffffff;
  font-size: 50px;
  margin-bottom: 25px;
  transition: all .3s;
}

.hero h1:hover {
  font-weight: bold;
  color: black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; */
  cursor: pointer;
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

  .hero .container {
    width: 95%;
  }

  .hero .container > p {
  }
}
</style>

<script>
export default {
  name: "Hero_Component",
  components: {},
};
</script>
