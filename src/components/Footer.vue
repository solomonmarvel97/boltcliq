<template>
  <footer>
    <section class="footer-wrapper">
      <div class="footer-nav">
        <div class="heading">Contact us</div>
        <ul>
          <a href="#">
            <li>Industries</li>
          </a>
          <a href="#">
            <li>Consulting</li>
          </a>
          <a href="#">
            <li>Digital</li>
          </a>
          <a href="#">
            <li>Insights</li>
          </a>
        </ul>
      </div>

      <div class="footer-nav">
        <div class="heading">Useful Links</div>
        <ul>
          <a href="#">
            <li>Events</li>
          </a>
          <a href="#">
            <li>Partners</li>
          </a>
        </ul>
      </div>
      <div class="footer-nav">
        <div class="heading">Work</div>
        <ul>
          <a href="/#FAQ"> <li>FAQ</li></a>
          <a target="_blank" href="mailto:office@boltcliq.com">
            <li>office@boltcliq.com</li>
          </a>
          <a
            target="_blank"
            href="https://calendly.com/boltcliq/30-minutes-free-consultation"
          >
            <li>Book a Meeting</li>
          </a>
        </ul>
      </div>
      <div class="footer-nav">
        <div class="heading">Social</div>
        <ul>
          <a href="#">
            <li>Twitter</li>
          </a>
          <a href="#">
            <li>Facebook</li>
          </a>
          <a href="#">
            <li>Linkedin</li>
          </a>
        </ul>
      </div>
    </section>
    <div class="footer-extension">
      <p>Copyright @ {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  methods: {},
};
</script>

<style scoped>
/* The footer section */
footer {
  padding: 4em 0;
  background-color: #151515;
}

a {
  text-decoration: none;
}

.footer-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 80px;
  row-gap: 40px;
}

.footer-nav {
  flex-wrap: 100px;
  line-height: 30px;
}
.footer-nav .heading {
  margin-bottom: 1em;
  color: #fff;
  text-transform: uppercase;
}

.footer-nav span img {
  width: 20px;
}

.footer-nav ul li {
  font-weight: 300;
  color: #fff;
  list-style-type: none;
  font-size: 12px;
}

@media (max-width: 768px) {
  footer {
    margin-top: 5em;
  }

  .footer-wrapper {
    justify-content: start;
  }
}

.footer-extension {
  color: white;
  text-align: center;
  margin-top: 2em;
  font-size: 12px;
  font-weight: normal;
}

/* The footer section End */
</style>
