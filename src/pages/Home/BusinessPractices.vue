<template>
  <div>
  <div class="process_flex">
    <div class="process" v-for="(i, index) in processes" :key="index">
      <section>
        <div class="mb-2">
      <span>{{i.title}}</span>
        </div>
      <div class="items">
        <p v-for="(process,index) in i.processes" :key="index">{{ process }}. </p>
      </div>
      </section>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      processes: [
        {
          title: 'our practical design process',
          processes: [
            'Empathise',
            'Define',
            'Ideate',
            'Prototype',
            'Test',
          ]
        },
        {
          title: 'our research workflow',
          processes: [
            'Identify',
            'Formulate',
            'Review',
            'Interpret',
            'Report',
          ]
        },
        {
          title: 'our engineering strategy',
          processes: [
            'Identify',
            'Research',
            'Implement',
            'Test',
            'Reflect',
          ]
        }

      ]
    }
  }
}
</script>

<style scoped>
.process_flex {
  width: 100%;
  gap: 25px;
  justify-content: center;
}

.process {
  padding: 30px;
  flex-basis: 300px;
  gap: 30px;
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: black;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.process:nth-child(1) {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.729), rgba(0, 0, 0, 0.729)), url(@/assets/images/1.png);
}
.process:nth-child(2) {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.729), rgba(0, 0, 0, 0.729)), url(@/assets/images/2.jpg);
}
.process:nth-child(3) {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.729), rgba(0, 0, 0, 0.729)), url(@/assets/images/3.jpg);
}

.process span {
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 7px;
  line-height: 1.5;
  color: white;
}

.process .items {
  display: flex;
  flex-wrap: wrap;
}

.process p {
  font-style: normal;
  font-size: 70px;
  line-height: 1.2; /* or 133% */
  text-align: center;
  padding: 0 30px 0 0;
  color: white;
}

@media (max-width: 768px) {
  .process p {
    font-size: 35px;
    line-height: 1.5; /* or 133% */
    text-align: center;
  }
}


</style>
