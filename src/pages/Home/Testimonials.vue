<template>
  <section>
    <div class="mt-8 mb-2">
      <div class="center">
        <div class="mb-5">
          <h2>What our clients say</h2>
        </div>
      </div>
    </div>
    <div class="testimonial-container">
      <div class="testimonial-child">
        <img class="" src="@/assets/images/Testimonial/fega.png" alt="" />
      </div>
      <div class="testimonial-child">
        <div class="card-text">
          <div>
            <p>
              "After using agency my business skyrocketed! I just can't get
              enough of agency. I want to get a T-Shirt with agency on it so I
              can show it off to everyone. I would also like to say thank you to
              all your staff. Really good."
            </p>
            <h1>Jean B. Robert Staleman</h1>
            <h1><strong>Microsoft</strong></h1>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonial-container">
      <div class="testimonial-child">
        <img class="" src="@/assets/images/Testimonial/will.png" alt="" />
      </div>
      <div class="testimonial-child">
        <div class="card-text">
          <div>
            <p>
              "After using agency my business skyrocketed! I just can't get
              enough of agency. I want to get a T-Shirt with agency on it so I
              can show it off to everyone. I would also like to say thank you to
              all your staff. Really good."
            </p>
            <h1>Jean B. Robert Staleman</h1>
            <h1><strong>Microsoft</strong></h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
  gap: 10px;
}

.testimonial-container .testimonial-child {
  margin: 10px;
  display: flex;
  justify-items: center;
  flex-basis: 320px;
  border-radius: var(--border-radius);
}

.testimonial-container .testimonial-child img {
  width: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.card-text {
  display: grid;
  align-items: center;
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
export default {
  name: "Journey",
  data() {
    return {};
  },
  components: {},
};
</script>
