<template>
  <main class="navigation">
    <div style="width: 90%; margin: 0 auto">
      <header class="desktop-nav">
        <div class="header__container">
          <div class="header__left">
            <router-link
              to="/"
              style="display: flex; align-items: center; gap: 10px"
            >
              <img  loading="lazy" class="logo" src="@/assets/images/logo.png" alt="logo" />
            </router-link>
          </div>
          <div class="header__right">
            <nav>
              <ul class="nav__links">
                <li class="dropdown">
                  <a target="_blank" href="https://blog.boltcliq.com">Blog</a>
                </li>
                <li class="dropdown">
                  <a href="#">Industries</a>
                </li>
                <li class="dropdown">
                  <a href="#">Consulting</a>
                </li>
                <li class="dropdown">
                  <a href="#">Case Studies</a>
                </li>
              </ul>
            </nav>
            <a href="#" class="nav__menu" @click="toggle">
              <img loading="lazy"  src="@/assets/icons/menu-icon.svg" />
            </a>
          </div>
          <div class="header__right account">
            <ul class="nav__links">
              <li class="dropdown">
                <img loading="lazy" 
                  class="user-icon"
                  src="@/assets/icons/user.svg"
                  alt="user"
                />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
    <div id="mobile__menu" class="mobile-nav overlay hidden">
      <a href="#" class="close" @click="toggle">&times;</a>
      <div class="overlay__content">
        <ul class="mobile__links">
          <li class="dropdown">
            <a target="_blank" href="https://blog.boltcliq.com">Blog</a>
          </li>
          <li class="dropdown">
            <a href="#">Industries</a>
          </li>
          <li class="dropdown">
            <a href="#">Consulting</a>
          </li>
          <li class="dropdown">
            <a href="#">Insights</a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
// Select required elements from the DOM

export default {
  components: {},
  methods: {
    toggle(e) {
      const modal = document.querySelector("#mobile__menu");
      const body = document.querySelector("body");
      modal.classList.toggle("hidden");
      if (!modal.classList.contains("hidden")) {
        // Disable scroll
        body.style.overflow = "hidden";
      } else {
        // Enable scroll
        body.style.overflow = "auto";
      }
    },
  },
  computed: {
    routerPath() {
      return this.$route.name.toLowerCase();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

@media (min-width: 1024px) {
  #mobile__menu {
    display: none;
  }
}

@media (max-width: 768px) {
  .account {
    display: none !important;
  }
}

.navigation {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.89);
  z-index: 9999;
  backdrop-filter: blur(3px);
  height: 60px;
  display: grid;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%, 0);
  /*transition: all 1s ease;*/
}

@media (max-width: 768px) {
  .navigation {
    position: fixed;
    width: 100%;
    display: grid;
    top: 0;
  }
}

.navigation:hover {
  background-color: white;
  transition: all 1s ease;
}

.navigation:hover .nav__menu img,
.close {
  filter: invert();
}

.navigation:hover * {
  color: #151515;
}

.user-icon {
  height: 25px;
  width: 25px;
  filter: invert();
}

.navigation:hover .user-icon {
  filter: none;
}

ul {
  list-style: none;
}

li,

a {
  color: white;
  text-decoration: none !important;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.logo {
  cursor: pointer;
  height: 30px;
}

.header__right a {
  padding: 15px 5px;
  display: flex;
  align-items: center;
  margin: 0 10px;
  transition: all 0.1s linear;
}

.header__right div.dropdown__content a:hover {
  border: none;
}

.nav__menu img {
  width: 20px;
}

.header__right {
  display: flex;
  align-items: center;
}

.nav__links {
  display: flex;
  margin: 5px 5px;
  align-items: center;
}

.hidden {
  display: none;
}

#mobile__menu {
  width: 100%;
}

.nav__links a span {
  display: inline-block;
  margin-left: 4px;
}

.nav__links a span.less {
  display: none;
}

.dropdown__container {
  display: none;
  position: absolute;
  background-color: #000000;
  width: 100%;
  left: 0;
  z-index: 99;
}

.dropdown__content {
  max-width: 1100px;
  margin: 0 auto;
}

.dropdown__container a {
  color: white;
}

.dropdown:hover a span.less {
  display: block !important;
}

.dropdown:hover a span.more {
  display: none !important;
}

.dropdown:hover .dropdown__container {
  display: block;
}

a.nav__menu {
  display: none;
}

/* .mobile-nav .show, */
.mobile-nav input {
  display: none;
}

@media screen and (max-width: 1024px) {
  ul.nav__links,
  a.nav__cta {
    display: none;
  }

  a.nav__menu {
    display: inherit;
  }

  .overlay a {
    font-size: 20px;
  }

  .mobile__links .less {
    display: none;
  }

  .mobile-dropdown__container {
    margin-top: 20px;
    width: 100%;
    left: 0;
    z-index: 60;
  }

  .mobile-dropdown__container a {
    display: block;
  }

  .mobile-nav .show {
    display: block;
    cursor: pointer;
  }

  .mobile-nav .show:hover {
    color: rgba(0, 136, 169, 1);
  }

  .show + a,
  .mobile-dropdown__container {
    display: none;
  }

  [id^="btn"]:checked + .mobile-dropdown__container {
    display: block;
  }
}

/* Mobile Nav */
.overlay {
  min-height: 100vh;
  width: 0;
  position: fixed;
  z-index: 50;
  left: 0;
  top: 0;
  background-color: #151515;
  overflow-x: hidden;
  transition: all 0.5s ease;
}

.overlay__content::-webkit-scrollbar {
  display: none;
}

.overlay__content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.mobile__links,
.mobile-cta {
  width: 100%;
}

#mobile__menu > div > ul > li {
  padding: 20px;
  display: grid;
  place-items: center;
}

#mobile__menu > div > ul > li > a {
  font-size: 30px !important;
  display: grid;
  place-items: center;
  color: white;
}

.overlay a {
  transition: all 0.2s ease;
}

.overlay a:hover,
.overlay:focus {
  color: #0088a9;
}

.overlay .close {
  position: absolute;
  top: 5px;
  right: 25px;
  font-size: 40px !important;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 14px;
  }

  .overlay .close {
    font-size: 30px;
    top: 15px;
    right: 35px;
  }
}
</style>
