<template>
  <div class="footbar">
    <section>
      <div style="display: grid; place-items:center">
        <p>Copyright © {{new Date().getFullYear()}} Boltcliq & Company</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.footbar {
  margin-top: auto;
  width: 100%;
  padding-top: 2em;
  padding-bottom: 2em;
}
.footbar p {
  color: black
}
</style>
