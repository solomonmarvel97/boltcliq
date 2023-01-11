<script>
import { Axios } from "../../config/Axios";

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
      <div style="display: grid; place-items:center">
        <p>Copyright © {{new Date().getFullYear()}} Boltcliq</p>
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
  padding-top: 2em;
  padding-bottom: 2em;
}
footer p {
  color: black
}
</style>
