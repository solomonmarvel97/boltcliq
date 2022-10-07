<template>
    <div class="experience mt-5">
      <div class="">
        <div class="mt-5 mb-5">
          <h2 class="text-center">
            Our leadership team brings together years of experience building
            products for analytics, B2B software companies, Multi-tenant & SaaS products.
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
  width: 60%;
  font-size: 40px;
  margin: 0 auto;
  font-weight: bold;
  text-align: center;
}

.experience .container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  text-align: center;
}

.experience .container .child {
  align-items: center;
  flex-basis: 350px;
  padding: 30px;
  cursor: pointer;
  background: white;
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
    width: 90%;
    font-size: 20px;
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
    heading: "Research Development",
    descriptin:
      "We Undertake live projects into researching and positioning products to build  Stakeholder interviews, user research, competitor analysis, and content consolidation are all conducted by our user experience designers",
  },
  {
    heading: "User Experience Design",
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
