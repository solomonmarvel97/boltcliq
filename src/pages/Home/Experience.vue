<template>
    <div class="experience">
      <div class="">
        <div class="mb-5">
          <h2>
            Our leadership team brings together years of experience building
            products for analytics, B2B software companies, Single Tenant & SaaS Multi-tenant products.
          </h2>
        </div>
        <section>
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
        </section>
      </div>
    </div>
</template>

<style scoped>
.experience {
  margin-bottom: 6em;
  margin-top: 6em;
}

.experience h2 {
  width: 60%;
  font-size: 30px;
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
  border-radius: var(--border-radius);
  transition: all .2s linear;
}

.experience .container .child:hover {
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2% )
}

.experience .container .child:hover > * {
  color: white;
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
    heading: "Product Consultation",
    descriptin:
      "Our full-stack design and development team provides frontend development, backend development, design services, native iOS & android mobile apps, web apps, wearable apps, and (B2B)/enterprise software",
  },
  {
    heading: "Business Consultation",
    descriptin:
      "We Undertake live projects into researching and positioning products to build  Stakeholder interviews, user research, competitor analysis, and content consolidation are all conducted by our user experience designers",
  },
  {
    heading: "IT Consultation",
    descriptin:
      "Our designers experiment, create and interact. To create beautiful and functional products. We transform legacy enterprise platforms into delightful, consumer-grade experiences and develop new products people enjoy using",
  },
  {
    heading: "Software Engineering",
    descriptin:
        "Our full-stack design and development team provides frontend development, backend development, design services, native iOS & android mobile apps, web apps, wearable apps, and (B2B)/enterprise software",
  },
  {
    heading: "Research & Development",
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
