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
          image: "url('../../assets/images/experience.jpg')",
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
          background: 'white',
          color: 'black',
          image: '',
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
          background: '#effff8',
          color: 'white',
          image: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2% )',
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
  height: 100vh;
  display: flex;
  align-items: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.process:nth-child(1) {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/images/1.jpg");
}
.process:nth-child(2) {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/images/2.jpg");
}
.process:nth-child(3) {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/images/3.jpg");
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
  font-size: 110px;
  line-height: 1.2; /* or 133% */
  text-align: center;
  padding: 0 30px 0 0;
  color: white;
}

@media (max-width: 768px) {
  .process p {
    font-size: 45px;
    line-height: 1.5; /* or 133% */
    text-align: center;
  }
}


</style>
