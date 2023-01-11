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
            <h3>{{ i.heading }}</h3>
            <p>
              {{ i.description }}
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


.experience .container .child * {
  margin-bottom: 20px;
}

.experience .container .child p {
  line-height: 1.6;
}

.experience .container .child img {
  height: 60px;
  width: 60px;
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
    icon: require('@/assets/icons/productconsultation.svg'),
    heading: "Product Consultation",
    description: `Our full-stack design and development team provides frontend development,
    backend development, design services, native iOS & android mobile apps, web apps,
    wearable apps, and (B2B)/enterprise software`,
  },
  {
    icon: require('@/assets/icons/businessconsultation.svg'),
    heading: "Business Consultation",
    description: `We Undertake live projects into researching and positioning products to
    build  Stakeholder interviews, user research, competitor analysis, and content
    consolidation are all conducted by our user experience designers`,
  },
  {
    icon: require('@/assets/icons/itconsultation.svg'),
    heading: "IT Consultation",
    description: `Our designers experiment, create and interact. To create beautiful and functional
    products. We transform legacy enterprise platforms into delightful, consumer-grade experiences
    and develop new products people enjoy using`,
  },
  {
    icon: require('@/assets/icons/softwareengineering.svg'),
    heading: "Software Engineering",
    description: `Our full-stack design and development team provides frontend development, backend
    development, design services, native iOS & android mobile apps, web apps, wearable apps, and
    (B2B)/enterprise software`,
  },
  {
    icon: require('@/assets/icons/research&development.svg'),
    heading: "Research & Development",
    description: `We Undertake live projects into researching and positioning products to build  Stakeholder
    interviews, user research, competitor analysis, and content consolidation are all conducted by our
    user experience designers`,
  },
  {
    icon: require('@/assets/icons/userexperiencedesign.svg'),
    heading: "User Experience Design",
    description: `Our designers experiment, create and interact. To create beautiful and functional products.
    We transform legacy enterprise platforms into delightful, consumer-grade experiences and develop new
    products people enjoy using`,
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
