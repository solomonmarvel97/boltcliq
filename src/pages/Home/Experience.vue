<template>
    <div class="experience mt-5">
      <div class="">
        <div class="mt-5 mb-5">
          <h2 class="text-center">
            Our leadership team brings together years of experience building
            products for analytics, b2b software companies, and SaaS products.
          </h2>
        </div>
        <div class="container">
          <div
            class="child"
            v-for="(i, index) in branches"
            :key="index"
          >
            <div class="image"></div>
            <h3>{{ i.heading }}</h3>
            <p>
              {{ i.descriptin }}
            </p>
          </div>
        </div>
      </div>
    </div>
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
  flex-basis: 350px;
  padding: 40px;
  border-radius: var(--border-radius);
  cursor: pointer;
}

.experience .container .child:nth-child(2), .child:nth-child(3) {
  border-left: 1px solid rgba(0, 0, 0, 0.089);
}


.experience .container .child * {
  margin-bottom: 20px;
}

.experience .container .child p {
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .experience h2 {
    width: 100%;
  }
  .experience .container .child{
    border-left: 1px solid rgba(0, 0, 0, 0.089);
  }
}
</style>

<script>
let branches = [
  {
    heading: "Software Product Engineering",
    descriptin:
      "Our full-stack design and development team provides frontend development, backend development, design services, native iOS & android mobile apps, web apps, wearable apps, and (B2B)/enterprise software",
  },
  {
    heading: "Market Strategy & Research Development",
    descriptin:
      "We Undertake live projects into researching and positioning products to build  Stakeholder interviews, user research, competitor analysis, and content consolidation are all conducted by our user experience designers",
  },
  {
    heading: "Graphics & User Experience Design",
    descriptin:
      "Our designers experiment, create and interact. To create beautiful and functional products. We transform legacy enterprise platforms into delightful, consumer-grade experiences and develop new products people enjoy using",
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
