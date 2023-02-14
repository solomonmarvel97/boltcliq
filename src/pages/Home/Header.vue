<script>
import Brochure from "@/components/Brochure";

export default {
  components: { Brochure },
  data() {
    return {
      quote: false
    }
  },
  methods: {
  },
  mounted() {
  },
  computed: {

  }
}
</script>

<template>
  <div class="home">
    <div class="hero">
      <section class="brochure-flex-wrap">
        <div>
          <h1 class="mb-2">We create innovative digital solutions.</h1>
          <p class="mb-2">
            We are a world class business consulting & digital agency delivering top notch solutions to your
            individual and business needs.
          </p>
          <br>
          <div class="mt-5">
            <button class="button-dark"
              onclick="window.open('https://calendly.com/boltcliq/15-minutes-free-consultation', '_blank')">
              Book a Session
            </button>
          </div>
        </div>
        <div>
          <img class="hero-image" src="@/assets/images/hero.png" alt="" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.brochure-flex-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
}

.brochure-flex-wrap>div {
  flex: 1
}

.hero-image {
  width: 700px;
  position: absolute;
  object-fit: contain;
  right: 0px;
  top: 150px;
  padding: 20px;
  border-radius: 20px 0px 0px 20px;
  border: 1px solid rgba(0, 0, 0, 0.117);
}

@media (max-width: 1000px) {
  .brochure-flex-wrap {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .hero-image {
    display: none;
  }
}

.hero {
  width: 100%;
  height: 100vh;
  background: white;
  mix-blend-mode: normal;
  background-size: cover;
  padding: 100px 0
}

a {
  text-decoration: none;
}


.hero h1 {
  color: black;
  font-size: 75px;
}

.hero h1 span {
  font-family: var(--heading-font-family);
}

.hero p {
  width: 550px;
  line-height: 1.5;
}


@media (max-width: 768px) {
  .hero {
    background-position: top right;
    height: 100%;
  }

  .hero h1 {
    width: 100%;
    line-height: 1.3;
    font-size: 50px;
  }

  .hero p {
    width: 100%;
    line-height: 1.5;
  }

  .hero .container {
    width: 100%;
  }
}
</style>
