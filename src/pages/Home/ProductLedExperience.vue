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
    <div class="hero mt-4">
      <img loading="lazy"  class="hero-image" src="@/assets/images/design3.svg" />
    </div>
    </section>
  </div>
</template>

<style scoped>
.heading {
  padding-top: 4em;
  width: 600px;
  margin: 0 auto;
}

.heading p {
  line-height: 1.6;
}

.home {
  height: 100%;
  margin: 0 auto;
  background-color: white;
  border-radius: var(--border-radius);
}

.hero {
  display: grid;
  height: 100%;
  row-gap: 10px;
  place-items: center;
  padding-bottom: 5em;
}

.home .hero .hero-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.139);
}

.hero h1 {
  line-height: 55px;
  color: #ffffff;
  font-size: 40px;
  margin-bottom: 15px;
  transition: all 0.3s;
}

.hero h1:hover {
  color: #151515;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  cursor: pointer;
}

p {
  line-height: 1.6;
}

.hero .player_button {
  display: grid;
  min-width: 152px;
  width: 152px;
  align-items: center;
  grid-template-columns: 30% 70%;
  margin-top: 32px;
}


@media (max-width: 768px) {
  .heading {
    width: 100%;
  }
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


.experience {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  justify-content: center;
  text-align: center;
}

.experience .child {
  align-items: center;
  flex-basis: 350px;
  padding: 25px;
  cursor: pointer;
  background: white;
  border-radius: var(--border-radius);
  transition: all .2s linear;
}

.experience .child img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}


</style>

<script>
let process = [
  {
    icon: require(`@/assets/icons/ideation.svg`),
    heading: "Ideation",
    description: "We cover multiple touch-points & use-cases during the brainstorming & conceptualisation stage",
  },
  {
    icon: require(`@/assets/icons/implementation.svg`),
    heading: "Implementation",
    description: "At this level, we perform product definition, prototyping, design, development, validation, strategy and testing",
  },
  {
    icon: require(`@/assets/icons/commercialisation.svg`),
    heading: "Commercialisation",
    description: "At this level we finalise the implementation and deploy the service or product, making it accessible by the end users",
  },
];
export default {
  name: "Hero_Component",
  components: {},
  data() {
    return {
      process: process
    }
  }
};
</script>
