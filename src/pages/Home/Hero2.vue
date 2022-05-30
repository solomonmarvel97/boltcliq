<template>
  <div class="home">
    <div class="hero">
      <section>
        <div class="container">
          <div>
          <img class="wrapper avatar" src="@/assets/images/People/amaka.png" />
          <img class="wrapper avatar" src="@/assets/images/People/mayowa.png" />
          </div>
          <h1>We create innovative digital solutions.</h1>
          <p>
            We create innovative digital products that impact the way people
            experience the world.
          </p>
          <button class="button-primary mt-2">Schedule meeting</button>
        </div>
      </section>
      <img class="hero-image" src="@/assets/images/design2.png" />
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background: #151515;
}

.hero {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  place-items: center;
}

.home .hero .hero-image {
  width: 100%;
  height: 100%;
  top: 15%;
  object-fit: cover;
}

.hero .container {
  bottom: 15%;
}

.hero .container .avatar {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-right: 0.5em;
  object-fit: cover;
  filter: contrast(120%);
  transition: all 0.2s;
}

.hero .container .container-image {
  width: 100%;
  object-fit: cover;
  margin-bottom: 1em;
  border-radius: var(--border-radius);
  transition: all 0.5s;
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
  color: #ffffff;
  font-size: 50px;
  margin-bottom: 25px;
  transition: all 0.3s;
}

.hero h1:hover {
  font-weight: bold;
  color: black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
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
  .home {
    height: 100%;
    padding-top: 2em;
  }

  .hero {
    background-position: top right;
  }

  .hero h1 {
    width: 100%;
    line-height: 47px;
    font-size: 47px;
  }

  .hero .container {
    width: 100%;
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
