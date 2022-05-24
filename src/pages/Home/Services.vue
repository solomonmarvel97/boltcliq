<template>
  <section>
    <div class="services mt-7">
      <div v-for="(category, index) in services" :key="index">
        <div class="mt-4 mb-4">
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
            <p>{{ i.heading }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services h2 {
  width: 90%;
  margin: 0 auto;
}

.services .container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.services .container .child {
  align-items: center;
  flex-basis: 150px;
}

.services .container * {
  margin-bottom: 11px;
}

.services .container .child img {
  border-radius: var(--border-radius);
  transition: all .2s;
}

.services .container .child img:hover {
  transform: rotate(3deg) scale(1.05);
}

.services h3 {
  font-weight: normal;
}
.services .container .child p {
  font-size: 14px;
  text-align: center;
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
