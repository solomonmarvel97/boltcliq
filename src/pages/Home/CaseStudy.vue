<script>
let useCases = [
  {
    id: 1,
    heading: "Automated Third-Party Subscription & Integration Solution",
    description: `We design through an iterative process mind mapping ideas to find
            opportunities and market niches, creating concepts. Your users are
            impatient. They're probably distracted too. Keep it simple and
            beautiful, fun and functional.`,
    image: require("@/assets/images/UseCase/automated_subscription.png"),
  },
  {
    id: 2,
    heading: "Food Ordering Solution",
    description: `We design through an iterative process mind mapping ideas to find
            opportunities and market niches, creating concepts. Your users are
            impatient. They're probably distracted too. Keep it simple and
            beautiful, fun and functional.`,
    image: require("@/assets/images/UseCase/food_ordering_solution.png"),
  },
  {
    id: 3,
    heading: "Mobile Investment & Saving Solution",
    description: `We design through an iterative process mind mapping ideas to find
            opportunities and market niches, creating concepts. Your users are
            impatient. They're probably distracted too. Keep it simple and
            beautiful, fun and functional.`,
    image: require("@/assets/images/UseCase/mobile_savings_and_investment.png"),
  },
  {
    id: 4,
    heading: "Smart Home Automation Sofware",
    description: `We design through an iterative process mind mapping ideas to find
            opportunities and market niches, creating concepts. Your users are
            impatient. They're probably distracted too. Keep it simple and
            beautiful, fun and functional.`,
    image: require("@/assets/images/UseCase/smart_home_automation.png"),
  },
  {
    id: 4,
    heading: "Resort Finder App",
    description: `We design through an iterative process mind mapping ideas to find
            opportunities and market niches, creating concepts. Your users are
            impatient. They're probably distracted too. Keep it simple and
            beautiful, fun and functional.`,
    image: require("@/assets/images/UseCase/hotel_booking.png"),
  },
  {
    id: 6,
    heading: "Cohort Open Learning Solution",
    description: `We design through an iterative process mind mapping ideas to find
            opportunities and market niches, creating concepts. Your users are
            impatient. They're probably distracted too. Keep it simple and
            beautiful, fun and functional.`,
    image: require("@/assets/images/UseCase/design3.png"),
  },
];

export default {
  name: "Journey",
  data() {
    return {
      useCases,
    };
  },
  components: {},
};
</script>

<template>
  <section>
    <div class="mt-7 mb-7">
      <div class="center">
        <h1>Project Use Cases</h1>
      </div>
      <div
        class="journey mt-5 mb-5"
        v-for="(i, index) in useCases"
        :key="index"
      >
        <div class="child">
          <h2>{{ i.heading }}</h2>
          <p>{{ i.description }}</p>
        </div>
        <img class="child" :src="i.image" />
      </div>
    </div>

    <button class="button-secondary center">See More Project Use Cases</button>
  </section>
</template>

<style scoped>
.journey {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 50px 5px rgba(0, 0, 0, 0.038);
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.277);
  /* border: 1px solid rgba(0, 0, 0, 0.051); */
  border-radius: var(--border-radius);
  min-height: 400px;
}

.journey .child {
  flex-basis: 400px;
}
.journey .child * {
  margin-bottom: 22px;
}

.journey .child h3 {
  font-size: 22px;
  line-height: 32px;
  font-weight: normal;
}

.journey img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .journey img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.journey .child span {
  font-weight: bold;
  font-family: var(--heading-font-family);
  color: var(--primary);
}

.journey .child p {
  font-size: 15px;
  line-height: 25px;
}

.journey .child > div {
  margin-bottom: 24px;
}
</style>
