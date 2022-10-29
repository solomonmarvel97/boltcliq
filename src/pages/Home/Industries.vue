<script>

  export default {
    data() {
      return {
      }
    },
  }
  </script>


<template>
  <div class="industries">
        <section>
          <div class="container-bottom">
            <div class="bottom-grid">
              <a href="#">
                <h4 class="bottom-text">IT Consultation</h4>
              </a>
              <a href="#">
                <h4 class="bottom-text">Education</h4>
              </a>
              <a href="#">
                <h4 class="bottom-text">Food Aggregation</h4>
              </a>
              <a href="#">
                <h4 class="bottom-text">Retail</h4>
              </a>
              <a href="#">
                <h4 class="bottom-text">Property Tech</h4>
              </a>
              <a href="#">
                <h4 class="bottom-text">Fintech</h4>
              </a>
              <a href="#">
                <h4 class="bottom-text">Workflow Automation</h4>
              </a>
              <a href="#">
                <h4 class="bottom-text">Process Automation</h4>
              </a>
              <a href="#">
                <h4 class="bottom-text">Business Consultation</h4>
              </a>
              <a href="#">
                <h4 class="bottom-text">DX Consultation</h4>
              </a>
            </div>
          </div>
        </section>
      </div>
</template>

<style scoped>

.industries {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #000000;
  mix-blend-mode: normal;
  background-size: cover;
  position: relative;
}

.industries .container-bottom .bottom-grid {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
}

a {
  text-decoration: none;
}

.bottom-text {
  padding: 10px;
  font-size: 40px;
  cursor: pointer;
  color: white;
  font-weight: 400 !important;
}

@media (max-width: 768px) {
  .industries {
    height: 100%;
    padding-top: 2em;
    padding-bottom: 2em;
  }
  .bottom-text {
    font-size: 20px;
  }
}
</style>
