<template>
  <footer>

    <div class="footer-nav">
      <a target="_blank" href="https://twitter.com/boltcliq">
        <img src="@/assets/icons/twitter.svg" alt="twitter">
      </a>
      <a target="_blank" href="https://www.linkedin.com/company/boltcliq">
        <img src="@/assets/icons/linkedin.svg" alt="linkedin">
      </a>
    </div>

    
    <div class="copyright mt-5">
      Made with ❤️ by <a href="https://solomonmarvel.com" target="_blanl">superdeveloper</a>
    </div>

    <div class="copyright mt-2">
      copyright @ {{ new Date().getFullYear() }} All rights reserved
    </div>
  </footer>
</template>

<style scoped>
.container-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.container {
  display: grid;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: rgb(24, 24, 24);
  border-radius: 15px;
  padding: 40px;
}

.container h1 {
  color: white;
}
.container p {
  color: white;
}

footer .copyright {
  display: grid;
  place-items: center;
  color: #151515;
  font-size: 12px;
}

footer {
  margin-bottom: 2em;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.footer-nav * {
  color: rgb(0, 0, 0);
  font-size: 12px;
  justify-content: center;
}

.footer-nav img {
  width: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  methods: {},
};
</script>

