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

    <div class="footer-extension">
      <p>Made with ❤️ by <a target="_blank" href="https://solomonmarvel.com">superdeveloper</a></p>
      <br>
      <p>Copyright @ {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

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

<style scoped>
/* The footer section */
footer {
  padding: 2em 0;
  
}

a {
  color: #151515;
  text-decoration: none;
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

@media (max-width: 768px) {
  footer {
    margin-top: 5em;
  }

  .footer-wrapper {
    justify-content: start;
  }
}

.footer-extension {
  color: rgb(0, 0, 0);
  text-align: center;
  margin-top: 2em;
  font-size: 12px;
  font-weight: normal;
}

/* The footer section End */
</style>
