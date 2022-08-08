<template>
  <div class="home">
    <section>
      <div class="heading">
        <div class="center">
          <h1 class="mb-2">Providing impactful product-led experience</h1>
          <p>
            Successful products satisfy user needs, rely on intelligent
            technology choices, and focus on business outcomes. We help you
            achieve product-driven growth.
          </p>
        </div>
      </div>
    </section>
    <div class="hero">
      <img class="hero-image" src="@/assets/images/design1.png" />
    </div>
  </div>
</template>

<style scoped>
.heading {
  padding-top: 3em;
  padding-bottom: 1em;
  width: 600px;
  color: #151515;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .heading {
    width: 100%;
  }
}



.heading p {
  line-height: 1.6;
}

.home {
  width: 90%;
  height: 100%;
  background: #6565650e;
  margin: 0 auto;
  margin-top: 3em;
  border-radius: 50px;
}

.hero {
  display: grid;
  height: 100%;
  row-gap: 10px;
  place-items: center;
}

.home .hero .hero-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.hero .container {
  bottom: 15%;
}

.hero .container .avatar {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 0.5em;
  object-fit: cover;
  filter: contrast(120%);
  transition: all 0.2s;
  margin-bottom: 15px;
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
  line-height: 55px;
  color: #ffffff;
  font-size: 40px;
  margin-bottom: 15px;
  transition: all 0.3s;
}

.hero h1:hover {
  font-weight: bold;
  color: #151515;
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

  h1 {
    width: 100%;
    line-height: 35px;
    font-size: 30px;
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
