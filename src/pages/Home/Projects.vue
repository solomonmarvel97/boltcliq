<template>
  <section>
    <div class="mt-8 mb-2">
      <div class="center">
        <div class="mb-5">
          <h2>Recent Projects</h2>
        </div>
      </div>

      <div class="recent-projects">
        <div class="child box1">
          <p>
            We bring together Years of experience building products for
            analytics and business-to-business software companies.
          </p>
        </div>
        <button class="mt-2 primary-button">Learn more</button>
      </div>
    </div>
    <div class="flex-container">
      <img
        class="flex-child box1"
        src="@/assets/images/Projects/01.png"
        alt=""
      />
      <img
        class="flex-child box2"
        src="@/assets/images/Projects/02.png"
        alt=""
      />
      <img
        class="flex-child box3"
        src="@/assets/images/Projects/03.png"
        alt=""
      />
      <img
        class="flex-child box4"
        src="@/assets/images/Projects/04.png"
        alt=""
      />
      <img
        class="flex-child box5"
        src="@/assets/images/Projects/05.png"
        alt=""
      />
      <img
        class="flex-child box6"
        src="@/assets/images/Projects/06.png"
        alt=""
      />
    </div>
  </section>
</template>

<style scoped>
.flex-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.flex-container .flex-child {
  flex-basis: 1;
}

.flex-container img {
  width: 300px;
  height: 250px;
  margin-top: 20px;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.flex-container .box1 {
  flex-grow: 1;
}
.flex-container .box2 {
}
.flex-container .box3 {
}
.flex-container .box4 {
  flex-grow: 2;
}
.flex-container .box5 {
  flex-grow: 1;
}
.flex-container .box6 {
  flex-grow: 2;
}

.recent-projects {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
}

.recent-projects .child {
  width: 500px;
}

@media (max-width: 768px) {
  .recent-projects .child {
    width: 100%;
  }
}
.recent-projects .box1 {
  flex-basis: 3;
  line-height: 22px;
}

.recent-projects .box2 {
  flex-basis: 1;
}
</style>

<script>
let journey = [
  {
    image: require("@/assets/images/Experience/engineering.png"),
  },
];

export default {
  name: "Journey",
  data() {
    return {
      journey,
    };
  },
  components: {},
};
</script>
