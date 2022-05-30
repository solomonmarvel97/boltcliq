<template>
  <footer>
    <section>
      <section class="footer-grid">
        <div class="footer-nav">
          <div class="heading">Contact us</div>
          <ul>
            <a href="/community">
              <li>Industries</li>
            </a>
            <a href="/people">
              <li>Consulting</li>
            </a>
            <a href="/people">
              <li>Digital</li>
            </a>
            <a href="/people">
              <li>Insights</li>
            </a>
          </ul>
        </div>

        <div class="footer-nav">
          <div class="heading">Useful Links</div>
          <ul>
            <a href="#">
              <li>Workshops</li>
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
            <a target="_blank" href="mailto:beep@topuniverse.org">
              <li>office@boltcliq.com</li>
            </a>
            <a
              target="_blank"
              href="https://calendly.com/topuniverseafrica/conversation-with-top-universe-team"
            >
              <li>Book a Meeting</li>
            </a>
          </ul>
        </div>
        <div class="footer-nav">
          <div class="heading">Social Media</div>
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
    </section>
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
  padding: 3em 0px;
  background-color: #151515;
}

a {
  text-decoration: none;
}

.social {
  width: 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}

.footer-nav {
  padding: 20px 0;
  width: 100%;
  line-height: 32px;
}
.footer-nav .heading {
  margin-bottom: 1em;
  color: #fff;
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

@media (max-width: 800px) {
  footer {
    margin-top: 5em;
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
