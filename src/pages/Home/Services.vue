<template>
  <div class="services" style="padding-top: 2em; padding-bottom: 3em">
    <section>
      <div>
        <div v-for="(category, index) in services" :key="index">
          <div class="mt-5 mb-5">
            <div class="center">
              <h3 class="text-center">{{ category.title }}</h3>
            </div>
          </div>
          <div class="container">
            <div
              class="child"
              v-for="(i, index) in category.categories"
              :key="index"
            >
              <img :src="i.image" alt="" />
              <h3>{{ i.heading }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services {
  background-color: #151515;
}

.services h3 {
  font-size: 30px;
  color: white;
}

.services .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px
}

.services .container .child {
  width: 100%;
  height: 300px;
  border: .5px solid rgba(255, 255, 255, 0.238);
  position: relative;
  display: grid;

}

.services .container .child::before {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
}


.services .container .child img {
  position: absolute;
  width: 100%;
  height: 230px;
  top: 0;
  left: 0;
  object-fit: cover;
}


.services .container .child h3 {
  font-size: 17px;
  color: white;
  position: absolute;
  z-index: 101;
  top: 250px;
  font-weight: normal;
  margin-left: 1em;
}
</style>

<script>
let services = [
  {
    title: "Design Services",
    categories: [
      {
        image: require("@/assets/images/Services/branding.png"),
        heading: "Branding & Design",
      },
      {
        image: require("@/assets/images/Services/logo.png"),
        heading: "Logo & Illustrations",
      },
      {
        image: require("@/assets/images/Services/ui.png"),
        heading: "UI/UX Design",
      },
      {
        image: require("@/assets/images/Services/product.png"),
        heading: "Product Packaging",
      },
      {
        image: require("@/assets/images/Services/book.png"),
        heading: "Book Covers",
      },
    ],
  },

  {
    title: "Engineering Services",
    categories: [
      {
        image: require("@/assets/images/Services/app.png"),
        heading: "App Development",
      },
      {
        image: require("@/assets/images/Services/website.png"),
        heading: "Website Development",
      },
      {
        image: require("@/assets/images/Services/workflow.png"),
        heading: "Workflow Automation",
      },
      {
        image: require("@/assets/images/Services/system.png"),
        heading: "System Design",
      },
      {
        image: require("@/assets/images/Services/api.png"),
        heading: "API Design",
      },
    ],
  },

  {
    title: "Marketing & Research Services",
    categories: [
      {
        image: require("@/assets/images/Services/social.png"),
        heading: "Social Media Marketing",
      },
      {
        image: require("@/assets/images/Services/content.png"),
        heading: "Content Strategy",
      },
      {
        image: require("@/assets/images/Services/product.png"),
        heading: "Product Marketing",
      },
      {
        image: require("@/assets/images/Services/business.png"),
        heading: "Business Marketing",
      },
      {
        image: require("@/assets/images/Services/influencer.png"),
        heading: "Influencer Marketing",
      },
    ],
  },
];

export default {
  name: "Services",
  data() {
    return {
      services,
    };
  },
  components: {},
};
</script>
