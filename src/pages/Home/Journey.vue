<template>
  <section>
    <div class="mt-7 mb-7">
      <div class="center">
        <h2>Our Journey so far</h2>
      </div>
      <div class="journey mt-5 mb-5">
        <div class="child">
          <h3>
            We're a <span>creative agency</span>. Ask us about branding, design
            and advertising.Being small we can go into details.
          </h3>
          <p>
            We design through an iterative process mind mapping ideas to find
            opportunities and market niches, creating concepts. Your users are
            impatient. They're probably distracted too. Keep it simple and
            beautiful, fun and functional. Clean aesthetics supported by a
            strong concept is what we stand for. Your users are impatient.
            They're probably distracted too.
          </p>
          <button class="primary-button">Learn more</button>
        </div>
        <img class="child" src="@/assets/images/Journey/journey.png" />
      </div>

      <div class="journey mt-5 mb-5">
        <img class="child" src="@/assets/images/Journey/journey.png" />
        <div class="child">
          <h3>
            We're a <span>creative agency</span>. Ask us about branding, design
            and advertising.Being small we can go into details.
          </h3>
          <p>
            We design through an iterative process mind mapping ideas to find
            opportunities and market niches, creating concepts. Your users are
            impatient. They're probably distracted too. Keep it simple and
            beautiful, fun and functional. Clean aesthetics supported by a
            strong concept is what we stand for. Your users are impatient.
            They're probably distracted too.
          </p>
          <button class="primary-button">Learn more</button>
        </div>
      </div>
    </div>
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

.journey .child h3 span {
  font-family: Poppins;
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
