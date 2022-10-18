<script>
import {Axios} from "../../config/Axios";

export default {
  name: "Footer",
  data() {
    return {
      disabled: false,
      status: 'Submit',
      email: ''
    }
  },
  methods: {
    async subscribeToNewsletter() {
      this.disabled = !this.disabled
      this.status = "Loading ..."
      try {
        let payload = {
          "data": {
            "email": this.email,
          }
        }
        let request = await Axios.call('POST', 'newsletters', payload)
        this.$toast.success("You have successfully subscribed for newsletters").goAway(7000)
      } catch (err) {
        // if(err.response.data.error.name=="ValidationError")
        this.$toast.error("Already subscribed. Kindly try another email").goAway(6000)
      } finally {
        this.email = null
        this.disabled = !this.disabled
        this.status = "Submit"
      }
    }
  }
}
</script>

<template>
  <div class="footer">
    <section>
      <div class="footer_newsletter">
        <div>
          <p class="heading">Subscribe to our newsletter</p>
          <p class="sub-heading">Sign up for a monthly digest of the latest news, articles, and resources.</p>
        </div>
        <div>
          <form @submit.prevent="subscribeToNewsletter">
            <div class="flex-wrap">
              <input class="input-control"
                     type="email"
                     placeholder="enter your email address"
                     v-model="email"
                     required>
              <input type="submit" :value="status" :disabled="disabled">
            </div>
          </form>
        </div>
      </div>

      <div class="footer_wrapper">
        <!--      company-->
        <div class="footer_item">
          <span>Company</span>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <a href="#">FAQ.</a>
        </div>

        <!--      our services-->
        <div class="footer_item">
          <span>Our Services</span>
          <a href="#">Design Services</a>
          <a href="#">IT Consulting Services</a>
          <a href="#">R&D Services</a>
          <a href="#">Marketing Services</a>
          <a href="#">Business Consulting</a>
        </div>

        <!--      real estate-->
        <div class="footer_item">
          <span>Platforms</span>
          <a href="">Top Universe</a>
          <a href="#">Prime Learn</a>
          <a href="#">Top Africa</a>
          <a href="#">Rossele Proptech</a>
          <a href="#">Swiftgo Platform</a>
        </div>

        <!--      social-->
        <div class="footer_item">
          <span>Social</span>
          <a href="#">
            <div class="flex">
              <p>Youtube</p>
            </div>
          </a>
          <a href="#">
            <div class="flex">
              <p>Facebook</p>
            </div>
          </a>
          <a href="#">
            <div class="flex">
              <p>Instagram</p>
            </div>
          </a>
          <a href="#">
            <div class="flex">
              <p>LinkedIn</p>
            </div>
          </a>
          <a href="#">
            <div class="flex">
              <p>Twitter</p>
            </div>
          </a>
        </div>

        <!--  contact-->
        <div class="footer_item">
          <span>Contact</span>
          <a href="mailto:info@boltcliq.com">
            <div class="flex">
              <img src="@/assets/images/footercomponent/mail.svg" class="icon" alt="duration"/>
              <p>info@boltcliq.com</p>
            </div>
          </a>
          <div>
            <div class="flex">
              <img src="@/assets/images/footercomponent/phone.svg" class="icon" alt="duration"/>
              <div class="">
                <a target="_blank" href="tel:+1(579)500-8848">
                  +1(579)500-8848 </a>
              </div>
            </div>
          </div>
        </div>

        <!--legal-->
        <div class="footer_item">
          <span>Legal</span>
          <a href="/faq">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
form {
  background-color: black
}

.footer {
  margin-top: auto;
  width: 100%;
  background-color: black;
  padding-top: 4em;
  padding-bottom: 4em;
}

.footer_newsletter {
  display: flex;
  flex-wrap: wrap;
  gap: 28.47px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 56.90px;
}

.footer_newsletter .heading {
  font-weight: 400;
  font-size: 10.6766px;
  line-height: 18px;
  letter-spacing: 0.889714px;
  text-transform: uppercase;
  color: white;
}

.footer_newsletter .sub-heading {
  font-weight: 400;
  font-size: 14.2354px;
  line-height: 21px;
  color: white;
}

.footer_wrapper {
  display: flex;
  row-gap: 28.47px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.footer_item {
  display: grid;
  gap: 10.68px;
  flex-basis: 160px;
  align-items: center;
}

.footer_item a, p {
  text-decoration: none;
  font-weight: 400;
  font-size: 12.456px;
  line-height: 18px;
  color: white;
}

.footer_item span {
  font-weight: 600;
  font-size: 12.456px;
  color: white;
}
</style>
