<template>
<hr>
  <section class="mt-5 mb-5">
    <div class="processes">
      <div class="">
        <span>RESEARCH PROCESS </span>
        <div class="container">
          <h1>Identify</h1>
          <h1>Formulate</h1>
          <h1>Review</h1>
          <h1>Interpret</h1>
          <h1>Report</h1>
        </div>
      </div>
      <div class="">
        <span>DESIGN PROCESS </span>
        <div class="container">
          <h1>Empathise</h1>
          <h1>Define</h1>
          <h1>Ideate</h1>
          <h1>Profile</h1>
          <h1>Test</h1>
        </div>
      </div>
      <div class="">
        <span>ENGINEERING PROCESS </span>
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
  <hr>
</template>

<style scoped>
.processes {
  height: 100%;
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  align-items: center;
}

span {
  font-size: 12px;
  color: rgb(158, 158, 158);
  text-transform: uppercase;
  letter-spacing: 3px;
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
  font-size: 35px;
  transition: all .2s;
}

h1:hover {
  font-weight: bold;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; */
  cursor: pointer;
}
</style>

<script>
export default {
  name: "Processes",
};
</script>
