<template>
  <main class="navigation">
    <div style="width: 85%; margin: 0 auto">
      <header class="desktop-nav">
        <div class="header__container">
          <div class="header__left">
            <router-link to="/">
              <img
                class="logo"
                src="@/assets/images/logo.svg"
                alt="boltcliq logo"
              />
            </router-link>
          </div>
          <div class="header__right">
            <nav>
              <ul class="nav__links">
                <li class="dropdown">
                  <a href="#">Industries</a>
                </li>
                <li class="dropdown">
                  <a href="#">Consulting Services</a>
                </li>
                <li class="dropdown">
                  <a href="#">Digital</a>
                </li>
                <li class="dropdown">
                  <a href="#">Insights</a>
                </li>
                <li class="dropdown">
                  <a href="#">About</a>
                </li>
                <li class="dropdown">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </nav>
            <a href="#" class="nav__menu" @click="openNav()">
              <img src="@/assets/icons/menu-icon.svg" />
            </a>
          </div>
        </div>
      </header>
    </div>
    <div id="mobile__menu" class="mobile-nav overlay">
      <a href="#" class="close" @click="closeNav()">&times;</a>
      <div class="overlay__content">
        <ul class="mobile__links">
           <li class="dropdown">
                  <a href="#">Industries</a>
                </li>
                <li class="dropdown">
                  <a href="#">Consulting Services</a>
                </li>
                <li class="dropdown">
                  <a href="#">Digital</a>
                </li>
                <li class="dropdown">
                  <a href="#">Insights</a>
                </li>
                <li class="dropdown">
                  <a href="#">About</a>
                </li>
                <li class="dropdown">
                  <a href="#">Careers</a>
                </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    openNav() {
      document.getElementById("mobile__menu").style.width = "100%";
    },

    closeNav() {
      document.getElementById("mobile__menu").style.width = "0";
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

.navigation {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.499);
  z-index: 100;
  backdrop-filter: blur(5px);
  height: 80px;
  display: grid;
  align-items: center;
  width: 100%;
}

ul {
  list-style: none;
}

li,
a {
  color: white;
  text-decoration: none;
  font-weight: 200;
  font-size: 14px;
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

li.dropdown > a {
  /* border-bottom: 3px solid transparent; */
}

.header__right li.dropdown a:hover {
  color: white
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
  border-top: 0.5px solid rgba(255, 255, 255, 0.118);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.118);
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
  background-color: #0a0115;
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
  font-size: 30px;
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

/* learning path */
</style>
