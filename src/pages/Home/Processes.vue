<template>
  <div>
    <div class="mb-4 mt-4">
    <h1 class="center">Development Process</h1>
    </div>
  <div class="process_flex">
    <div class="process" v-for="(i, index) in processes" :key="index" :style="{backgroundColor: i.color}">
      <span>{{i.title}}</span>
      <div>
        <p v-for="(process,index) in i.processes" :key="index">{{ process }}</p>
      </div>
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
          color: '#FF6D27',
          title: 'design process',
          processes: [
              'Empathise',
            'Define',
            'Ideate',
            'Profile',
            'Test',
          ]
        },
        {
          color: '#6C35E0',
          title: 'research process',
          processes: [
            'Identify',
            'Formulate',
            'Review',
            'Interpret',
            'Report',
          ]
        },
        {
          color: '#2DC3CD',
          title: 'engineering process',
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
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-wrap: wrap;
}

.process {
  display: grid;
  place-items: center;
  padding: 30px;
  background-color: black;
  flex-basis: 300px;
  border-radius: var(--border-radius);
  gap: 30px
}

.process span {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  color: white
}

.process p {
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px; /* or 133% */
  color: #FFFFFF;
  text-align: center;
}


</style>