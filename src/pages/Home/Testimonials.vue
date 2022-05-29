<template>
  <div class="mt-8 mb-2">
    <div class="center">
      <div class="mb-5">
        <h1>What our clients say</h1>
      </div>
    </div>
  </div>
  <div class="horizontal-scroll-container" >
    <div class="left-scroll" id="left_scroll" @click="left"></div>
    <div class="right-scroll" id="right_scroll" @click="right"></div>
    <div class="horizontal-scroll" id="container">
      <div class="testimonial-container" v-for="i in 5">
        <div class="testimonial-child" >
          <div class="card-text">
            <img
              class="mb-1"
              src="@/assets/images/Testimonial/fega.png"
              alt=""
            />
            <div>
              <p>
                "After using agency my business skyrocketed! I just can't get
                enough of agency. I want to get a T-Shirt with agency on it so I
                can show it off to everyone."
              </p>
              <h1>Jean B. Robert Staleman</h1>
              <h1><strong>Microsoft</strong></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.horizontal-scroll-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.horizontal-scroll-container .left-scroll {
  position: absolute;
  background-image: url("../../assets/icons/left.svg");
  background-size: cover;
  height: 43px;
  width: 43px;
  left: 30px;
  top: calc(100% / 2.5);
  cursor: pointer;
  z-index: 500;
  transition: all 0.2s;
  backdrop-filter: blur(5px);
  border-radius: 50%;
}

.horizontal-scroll-container .left-scroll:hover {
  transform: scale(1.3);
}

.horizontal-scroll-container .right-scroll {
  position: absolute;
  background-image: url("../../assets/icons/right.svg");
  background-size: cover;
  height: 43px;
  width: 43px;
  right: 30px;
  top: calc(100% / 2.5);
  cursor: pointer;
  z-index: 500;
  transition: all 0.2s;

  backdrop-filter: blur(5px);
  border-radius: 50%;
}

.horizontal-scroll-container .right-scroll:hover {
  transform: scale(1.3);
}

.horizontal-scroll {
  margin-right: 1em;
  margin-left: 1em;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scrollbar-width: none;
  height: 400px;
  align-items: center;
  scroll-behavior: smooth;
}

.horizontal-scroll::-webkit-scrollbar {
  display: none;
}

.testimonial-container {
  position: relative;
  height: 314px;
  flex: 0 0 350px;
  font-size: 40px;
  justify-content: center;
  scroll-snap-align: start;
  transition: all 0.5s;
}

img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}

.card-text {
  padding: 30px;
  background: #ffffff;
  box-shadow: 4px 0px 50px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
}

.card-text p {
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
}
.card-text h1 {
  font-weight: normal;
  font-size: 16px;
}
</style>

<script>
// rightBtn.addEventListener("click", function () {
//   document.getElementById("container").scrollLeft += 400;
// });

// leftBtn.addEventListener("click", function () {
//   document.getElementById("container").scrollLeft -= 400;
// });

export default {
  name: "Journey",
  data() {
    return {};
  },
  methods: {
    right() {
      document.getElementById("container").scrollLeft += 400;
    },
    left() {
      document.getElementById("container").scrollLeft -= 400;
      // console.log('hello')
    },
  },
  components: {},
};
</script>
