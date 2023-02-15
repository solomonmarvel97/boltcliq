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
          <img src="https://images.unsplash.com/photo-1612832021026-375ae70f24bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2320&q=80" alt="" />
          <img src="https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
          <img src="https://images.unsplash.com/photo-1612831198717-1e71a0d5e2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
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
          <img src="https://images.unsplash.com/photo-1612832021026-375ae70f24bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2320&q=80" alt="" />
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
  height: 100%;
  width: 45%;
  position: absolute;
  object-fit: cover;
  right: 0px;
  top: 0px;
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
    /* display: grid; */
    width: 100%;
    place-items: center;
    display: flex;
    gap: 50px;
    width: 100%;
    row-gap: 50px;
    column-gap: 50px;
    justify-content: space-between;
    overflow: hidden;
    overflow-x: scroll;
  }

  .hero-image-mobile img {
    border-radius: 50%;
    width: 350px;
    height: 350px;
    min-height: 350px;
    max-height: 350px;
    border: 1px solid rgba(0, 0, 0, 0.092);
    padding: 10px;
    object-fit: cover;
    place-items: center;
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
