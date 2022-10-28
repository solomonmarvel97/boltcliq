<template>
  <section>
    <div class="contact mt-8 mb-8">
      <div class="contact-head">
        <h1 class="mb-2">Get in touch</h1>
      </div>

      <div class="contact-grid">
        <img loading="lazy" 
          class="child"
          src="@/assets/images/Contact/contact-image.png"
          alt=""
        />
        <div class="child">
          <form>
            <h2>Let's get to know you</h2>
            <div>
              <label>Email Address</label>
              <input type="email" placeholder="e.g johndoe@email.com" />
            </div>
            <div>
              <label>Name</label>
              <input type="text" placeholder="e.g john doe" />
            </div>
            <div>
              <label>Message</label>
              <textarea rows="10" style="height: 200px"></textarea>
            </div>

            <button class="button-primary wide" type="submit">
              Submit Message
            </button>
          </form>
        </div>
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
  font-weight: 600;
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

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  gap: 30px;
}

.contact-grid .child {
  width: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.contact-grid img {
  height: 100% !important;
}
</style>

<script>
export default {};
</script>
