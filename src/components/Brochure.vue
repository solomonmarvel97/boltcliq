<script>
import {Axios} from "../../config/Axios";
import {config} from "../../config";

export default {
  name: "Brochure",
  data() {
    return {
      disabled: false,
      status: 'Send',
      lead: {
        fullName: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    async requestTour() {
      this.disabled = !this.disabled
      this.status = "Loading ..."
      try {
        let payload = {
          "data": {
            "fullName": this.lead.fullName,
            "email": this.lead.email,
            "phone": this.lead.phone,
            "message": this.lead.message,
          }
        }
        let request = await Axios.call('POST', 'leads', payload)
        this.$toast.success("Your request was submitted successfully").goAway(7000)
        this.lead = {}
      } catch (err) {
        // if(err.response.data.error.name=="ValidationError")
        this.$toast.error("There was an error processing your request, please try again").goAway(6000)
      } finally {
        this.disabled = !this.disabled
        this.status = "Send"
      }
    }
  }
}
</script>

<template>
  <div class="request_tour">
    <form @submit.prevent="requestTour">
      <div class="center">
      <h3 class="mb-2">Request a Quote</h3>
      </div>
        <div>
        <label>Full name</label>
        <input class="input-control"
               placeholder="e.g first, last name"
               type="text"
               v-model="lead.fullName"
               required>
      </div>
      <div>
        <label>Email address</label>
        <input class="input-control"
               type="email"
               placeholder="e.g johndoe@mail.com"
               v-model="lead.email"
               required>
      </div>

      <div>
        <label>Message</label>
        <textarea placeholder="Hi Boltcliq, I would love to ..."
                  v-model="lead.message"
                  required>
        </textarea>
      </div>
      <input type="submit" :value="status" :disabled="disabled">
    </form>
  </div>
</template>

<style scoped>
.request_tour {
  height: 100%;
  width: 500px;
}

.request_tour h3 {
  color: black;
}

@media (max-width: 768px) {
  .request_tour {
    width: 100%;
  }
}
</style>