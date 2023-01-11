<template>
  <section>
    <div class="mt-8 mb-8">
      <div class="contact-head">
        <h1 class="mb-2">Get in touch</h1>
      </div>

      <div class="contact">
        <a href="mailto:business@boltciq.com">business@boltcliq.com</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  height: 100%;
}
.contact h2 {
  font-style: normal;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
}

.contact p {
  font-style: normal;
  line-height: 25px;
  text-align: center;
}

.contact-head {
  display: grid;
  place-items: center;
  margin: 0 auto;
  width: 80%;
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .contact-head {
    width: 100%;
  }
}

.contact {
  display: grid;
  background-image: url(@/assets/images/Contact/contact-image.png);
  height: 400px;
  background-position: center;
  background-size: cover;
  place-items: center;
  gap: 30px;
}

.contact a {
  font-size: 25px;
  color: white
}
</style>

<script>
export default {};
</script>
