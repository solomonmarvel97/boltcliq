<template>
  <footer>
    <div>
      <section class="footer-grid">
        <div class="footer-nav">
          <div class="heading">Contact us</div>
          <ul>
            <router-link to="/100DaysChallenge">
              <li>#100DaysChallenge</li>
            </router-link>
            <a href="/#FAQ">
              <li>Frequently Asked Questions</li>
            </a>
            <router-link to="/community">
              <li>Community</li>
            </router-link>
            <router-link to="/people">
              <li><i>Humans</i> at Top Universe</li>
            </router-link>
          </ul>
        </div>

        <div class="footer-nav">
          <div class="heading">Useful Links</div>
          <ul>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCaOH01_VoGHHoK4KUCw0Nsg"
            >
              <li>Youtube Channel</li>
            </a>
            <a target="_blank" href="https://discord.gg/xW8pAnzGpr">
              <li>Discord Forum</li>
            </a>
            <router-link to="#">
              <li>Workshops</li>
            </router-link>
          </ul>
        </div>
        <div class="footer-nav">
          <div class="heading">Work</div>
          <ul>
            <a href="/#FAQ"> <li>Frequently Asked Questions</li></a>
            <a target="_blank" href="mailto:beep@topuniverse.org">
              <li>beep@topuniverse.org</li>
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
          <div class="heading">Follow us</div>
          <ul>
            <a target="_blank" href="/tc.html">
              <li>Privacy Policy</li>
            </a>
          </ul>
        </div>
        <div class="footer-nav">
          <div class="heading">Join our Newsletter</div>
          <ul>
            <a target="_blank" href="/tc.html">
              <li>Privacy Policy</li>
            </a>
          </ul>
        </div>
      </section>
      <div class="footer-extension">
        <p>Copyright @ {{ new Date().getFullYear() }}</p>
      </div>
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
  padding: 3em 0px;
  background-color: #ffffff0e;
}

a {
  text-decoration: none;
}

.social {
  width: 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.footer-nav {
  padding: 20px 0;
  width: 100%;
  line-height: 32px;
}
.footer-nav .heading {
  margin-bottom: 1em;
}

.footer-nav span img {
  width: 20px;
}

.footer-nav ul li {
  font-weight: 300;
  color: #222;
  list-style-type: none;
  font-size: 13px;
  margin-bottom: 8px;
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
  letter-spacing: 2px;
  padding-bottom: 1em !important;
}

.footer-extension .logo {
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  font-size: 12px;
  height: 40px;
  width: 40px;
  margin-bottom: 1.5em;
}

.footer-extension p {
}
/* The footer section End */
</style>
