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
        <div class="hero-image-mobile">
          <img src="@/assets/images/hero-full.png" alt="" />
        </div>
        <div>
          <h1 class="mb-2">We create innovative digital solutions.</h1>
          <p class="mb-2">
            We are a world class business consulting & digital agency delivering top notch solutions to your
            individual and business needs.
          </p>
          <br>
          <div class="mt-2">
            <button class="button-dark"
              onclick="window.open('https://calendly.com/boltcliq/15-minutes-free-consultation', '_blank')">
              Book a Session
            </button>
          </div>
        </div>
        <div class="hero-image">
          <img src="@/assets/images/hero.png" alt="" />
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
  flex-basis: 300px;
  flex: 1
}

.hero-image img {
  width: 650px;
  position: absolute;
  object-fit: contain;
  right: 0px;
  top: 15%;
  padding: 20px;
  border-radius: 10px 0px 0px 10px;
  border: 1px solid rgba(0, 0, 0, 0.117);
}

.hero-image-mobile {
  display: none;
}
.hero-image-mobile img {
  width: 100%;
  object-fit: contain;
}

@media (max-width: 1000px) {
  .brochure-flex-wrap {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .hero-image img {
    display: none;
  }

  .hero-image-mobile {
    display: block;
  }
}

.hero {
  width: 100%;
  height: 90vh;
  background: white;
  mix-blend-mode: normal;
  background-size: cover;
  padding: 50px 0;
  padding-bottom: 2em;
  display: grid;
  place-items: center;
}

a {
  text-decoration: none;
}


.hero h1 {
  color: black;
  font-size: 70px;
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
