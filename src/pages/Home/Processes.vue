<template>
  <section class="mt-5 mb-5">
    <h1>Development Strategy</h1>
    <div class="processes">
      <div class="process">
        <p>RESEARCH PROCESS</p>
        <div class="container">
          <h1>Identify</h1>
          <h1>Formulate</h1>
          <h1>Review</h1>
          <h1>Interpret</h1>
          <h1>Report</h1>
        </div>
      </div>
      <div class="process">
        <p>DESIGN PROCESS</p>
        <div class="container">
          <h1>Empathise</h1>
          <h1>Define</h1>
          <h1>Ideate</h1>
          <h1>Profile</h1>
          <h1>Test</h1>
        </div>
      </div>
      <div class="process">
        <p>ENGINEERING PROCESS</p>
        <div class="container">
          <h1>Identify</h1>
          <h1>Research</h1>
          <h1>Implement</h1>
          <h1>Test</h1>
          <h1>Reflect</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.processes {
  margin-top: 4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px 20px;
}


.processes > div {
  flex-basis: 300px;
}


p {
  font-size: 14px;
  color: rgb(75, 75, 75);
  text-transform: uppercase;
  text-align: center;
}


h1 {
  font-weight: bold;
  transition: all 0.2s;
  text-align: center;
  color: #151515;
}

@media (max-width: 768px) {
  h1 {
    font-size: 35px;
  }
}
</style>

<script>
export default {
  name: "Processes",
};
</script>
