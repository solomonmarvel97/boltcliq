<template>
  <div>
  <div class="process_flex">
    <div class="process" v-for="(i, index) in processes" :key="index" :style="{backgroundImage: i.color}">
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
          // color: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2% )',
          color: 'black',
          title: 'our practical design process',
          processes: [
              'Empathise',
            'Define',
            'Ideate',
            'Profile',
            'Test',
          ]
        },
        {
          color: 'linear-gradient( 109.6deg,  rgba(15,2,2,1) 11.2%, rgba(36,163,190,1) 91.1% )',
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
          color: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2% )',
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
  background-color: black;
  flex-basis: 300px;
  gap: 30px;
  height: 100vh;
  display: flex;
  align-items: center;
}

.process span {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 18px;
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
  font-weight: 700;
  font-size: 110px;
  line-height: 1.2; /* or 133% */
  color: #FFFFFF;
  text-align: center;
  padding: 0 30px 0 0;
}

@media (max-width: 768px) {
  .process p {
    font-size: 45px;
    line-height: 1.5; /* or 133% */
    text-align: center;
  }
}


</style>
