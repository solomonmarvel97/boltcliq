<template>
  <section>
    <div class="experience mt-5">
      <div class="center">
        <div class="mt-5 mb-5">
          <h2 class="text-center">
            Our leadership team brings together Years of experience building
            products for analytics and business-to-business software companies.
          </h2>
        </div>
        <div class="container">
          <div class="child" v-for="(i, index) in branches" :key="index">
            <img :src="i.image" alt="" />
            <h3>{{ i.heading }}</h3>
            <p>
              {{ i.descriptin }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </section>
</template>

<style scoped>
.experience {
  margin-bottom: 3em;
  margin-top: 6em;
}
.experience h2 {
  width: 70%;
  margin: 0 auto;
  font-weight: bold;
}

.experience .container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.experience .container .child {
  align-items: center;
  flex-basis: 250px;
  background-color: rgba(214, 214, 214, 0.094);
  padding: 35px;
  border-radius: var(--border-radius);
  transition: all .5s ;
  cursor: pointer;
}

.experience .container .child:hover {
  background-color: #151515;
}

.experience .container .child:hover *{
  color: white;
}

.experience .container .child img {
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transition: all 0.5s;
}

.experience .container .child img:hover {
  transform: rotate(20deg) scale(1.2);
}

.experience .container .child * {
  margin-bottom: 17px;
}

.experience .container .child p {
  font-size: 15px;
  line-height: 24px;
}

@media (max-width: 768px) {
  .experience h2 {
    width: 100%;
  }
}
</style>

<script>
let branches = [
  {
    image: require("@/assets/images/Experience/engineering.png"),
    heading: "Software Product Engineering",
    descriptin:
      "We design through an iterative process mind mapping ideas to find opportunities.",
  },
  {
    image: require("@/assets/images/Experience/research.png"),
    heading: "Market Strategy & Research",
    descriptin:
      " We design through an iterative process mind mapping ideas to find opportunities.",
  },
  {
    image: require("@/assets/images/Experience/design.png"),
    heading: "Graphics & User Experience Design",
    descriptin:
      "We design through an iterative process mind mapping ideas to find opportunities.",
  },
];

export default {
  name: "Experience",
  data() {
    return {
      branches,
    };
  },
  components: {},
};
</script>
