<template>
  <section>
    <div class="about">
      <div class="companies">
        <img loading="lazy" 
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
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
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
    font-size: 16px;
    line-height: 1.4;
  }
}
</style>

<script>
const companies = [
  {
    name: "",
    image: require("@/assets/icons/userexperiencedesign.svg"),
  },
  {
    name: "",
    image: require("@/assets/icons/userexperiencedesign.svg"),
  },
  {
    name: "",
    image: require("@/assets/icons/userexperiencedesign.svg"),
  },
  {
    name: "",
    image: require("@/assets/icons/userexperiencedesign.svg"),
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
