<template>
  <div class="services" style="padding-top: 2em; padding-bottom: 5em">
      <div class="">
        <div v-for="(category, index) in services" :key="index">
          <div class="mt-5 mb-5">
            <div class="center">
              <br>
              <h3 class="text-center">{{ category.title }}</h3>
            </div>
          </div>
          <div class="container mb-4">
            <div class="child" v-for="(i, index) in category.categories" :key="index">
              <img :src="i.image" alt="" />
              <h3>{{ i.heading }}</h3>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
.services {
  /* background-color: #151515; */
}

.services h3 {
  font-size: 60px;
  text-align: center;
}

.services .container {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  transition: all .5s ease-in-out;
}

.services .container .child {
  width: 100%;
  height: 150px;
  flex-basis: 150px;
  align-items: center;
  position: relative;
  transition: all .5s ease-in-out;
  display: flex;
  justify-content: center;
}

.services .container .child:hover {
}

.services .container .child::before {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.4) 100%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  border-radius: 100%;
}


.services .container .child img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: 100%;
}


.services .container .child h3 {
  font-size: 12px;
  color: white;
  z-index: 101;
  font-weight: 400 !important;
  margin: 20px;
}

@media (max-width: 768px) {
  .services h3 {
    font-size: 30px;
  }

  .services .container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    height: 65vh;
    transition: all .5s ease-in-out;
  }

  .services .container .child {
    width: 100%;
    height: 150px;
    display: grid;
    place-items: center;
    flex-basis: 150px;
  }

  .services .container .child:hover {
    height: 150px;
  }
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
        heading: "API Development",
      },
    ],
  },

  {
    title: "Marketing Services",
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
