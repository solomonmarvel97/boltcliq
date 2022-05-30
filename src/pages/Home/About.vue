<template>
  <section>
    <div class="about">
      <div class="about-container mt-5">
        <p>
          We work with some of the most exciting <span>brands</span> and
          companies around. Our clients include entrepreneurs who want to
          translate their ideas into a digital reality and big organisations who
          want to harness our flexible, startup-like mentality.
        </p>
      </div>

      <div class="companies">
        <img
          v-for="(i, index) in companies"
          :key="index"
          :src="i.image"
          :alt="i.name"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: #f6f6f6;
  border-radius: var(--border-radius);
  padding: 45px;
}

.about .about-container {
}

.about .about-container p {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
}

.about .about-container span {
  font-weight: bold;
}

.about .companies {
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.about .companies img {
  flex-basis: 150px;
  height: 50px;
  object-fit: contain;
  margin: 20px;
}

@media (max-width: 768px) {
  .about .about-container p {
    font-size: 15px;
  line-height: 1.4;
  }
}
</style>

<script>
const companies = [
  {
    name: "",
    image: require("@/assets/images/Companies/company1.png"),
  },
  {
    name: "",
    image: require("@/assets/images/Companies/company2.png"),
  },
  {
    name: "",
    image: require("@/assets/images/Companies/company3.png"),
  },
  {
    name: "",
    image: require("@/assets/images/Companies/company4.png"),
  },
  {
    name: "",
    image: require("@/assets/images/Companies/company5.png"),
  },
  {
    name: "",
    image: require("@/assets/images/Companies/company6.png"),
  },
  {
    name: "",
    image: require("@/assets/images/Companies/company7.png"),
  },
  {
    name: "",
    image: require("@/assets/images/Companies/company8.png"),
  },
];
export default {
  name: "AboutView",
  components: {},
  data() {
    return {
      companies,
    };
  },
};
</script>
