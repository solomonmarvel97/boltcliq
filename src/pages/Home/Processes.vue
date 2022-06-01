<template>
  <section class="mt-5 mb-5">
    <h1>Our Development Processes</h1>
    <div class="processes">
      <div class="">
        <p>RESEARCH PROCESS</p>
        <div class="container">
          <h1>Identify</h1>
          <h1>Formulate</h1>
          <h1>Review</h1>
          <h1>Interpret</h1>
          <h1>Report</h1>
        </div>
      </div>
      <div class="">
        <p>DESIGN PROCESS</p>
        <div class="container">
          <h1>Empathise</h1>
          <h1>Define</h1>
          <h1>Ideate</h1>
          <h1>Profile</h1>
          <h1>Test</h1>
        </div>
      </div>
      <div class="">
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
  <hr />
</template>

<style scoped>
.processes {
  height: 100%;
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  place-items: center;
}

p {
  font-size: 14px;
  color: rgb(158, 158, 158);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
}

.processes {
  display: grid;
}

.processes .container {
  margin-top: 1em;
  margin-bottom: 1em;
}

h1 {
  font-weight: bold;
  font-size: 50px;
  transition: all 0.2s;
  text-align: center;
}

.processes h1:hover {
  font-weight: bold;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #151515;
  /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; */
  cursor: pointer;
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
