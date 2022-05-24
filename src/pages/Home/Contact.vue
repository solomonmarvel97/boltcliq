<template>
  <section>
    <div class="contact mt-8 mb-5">
      <div class="contact-head">
        <h2 class="mb-2">Have you tried Boltcliq Agency?</h2>
        <p>
          We bring a huge wealth of experience to native application design and
          development as an app design company based in London. We work with
          both established businesses and start-ups looking to disrupt the
          market through innovative app design.
        </p>
      </div>

      <div class="contact-grid">
        <img
          class="child"
          src="@/assets/images/Contact/contact-image.png"
          alt=""
        />
        <div class="child">
          <form>
            <h3 class="mb-2">Contact Us</h3>
            <div>
              <label>Email Address</label>
              <input type="email" placeholder="whitneyblessing@gmail.com" />
            </div>
            <div>
              <label>Name</label>
              <input type="text" placeholder="whitneyblessing" />
            </div>
            <div>
              <label>Message</label>
              <textarea rows="10" style="height: 100px"></textarea>
            </div>
            <div>
              <input class="wide" type="submit" value="Submit Message" />
            </div>
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
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
}

.contact p {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
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
  gap: 30px;
}

.contact-grid .child {
  width: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.contact-grid img {
  height: 390px !important;
}
</style>

<script>
export default {};
</script>
