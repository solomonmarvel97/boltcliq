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
    description: `Food delivery has become an indispensable part of our daily lives. Many business modules have grown in popularity as a result of incorporating this sphere into their projects. We create highly interactive and simple-to-use food delivery apps for iOS and Android. The application was developed to assist users in ordering processed and raw food items.`,
    image: require("@/assets/images/UseCase/food_ordering_solution.png"),
  },
  {
    id: 3,
    heading: "Mobile Investment & Saving Solution",
    description: `Technology is taking a bounce in digital investment and saving methods. this app consists of real time features such as investments, investment history, withdrawals, multi-wallets account, investment planner & investment advisor and real-time security.`,
    image: require("@/assets/images/UseCase/mobile_savings_and_investment.png"),
  },
  {
    id: 4,
    heading: "Smart Home Automation Sofware",
    description: `The user experience of this application integrates data-driven and actionable insights. It enables consumers to easily execute a desired tasks or action. ​This smart home application is used on a smartphone or tablet to remotely control and manage numerous non-computing items in a home that are interconnected.`,
    image: require("@/assets/images/UseCase/smart_home_automation.png"),
  },
  {
    id: 4,
    heading: "Resort Finder App",
    description: `To create a better experience in the resort industry, we have created a mobile solution to showcase resort listings with clear features and actions such as a well-propagated collection of images, a smooth and easy booking experience with users in mind, improved customer-resort service experience for booking cancelation and an extension for hotel room reservations with hotel reviews for better preference.`,
    image: require("@/assets/images/UseCase/hotel_booking.png"),
  },
  {
    id: 6,
    heading: "E-learning Open Solution",
    description: `The ed-tech industry is a billion-dollar industry. We create Powerful learning solutions, learning management systems, mobile learning solutions, and school library/record keeping solutions packed with powerful features, interactive designs, and great simplicity.`,
    image: require("@/assets/images/UseCase/top_universe.png"),
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
        <h1>Product Use Cases</h1>
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

    <button class="button-black center">See More Case Studies</button>
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
  object-fit: contain;
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
