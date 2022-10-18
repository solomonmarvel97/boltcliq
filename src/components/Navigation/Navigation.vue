<script>
import Dropdown from "@/components/Navigation/Dropdown";

export default {
  components: {Dropdown},
  data() {
    return {
      showMenu: false,
      menuIcon: require('@/assets/images/navigationcomponent/menu.svg')
    }
  },
  created() {
      window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    menu_open() {
      this.showMenu = !this.showMenu
      const body = document.querySelector("body");
      if (this.showMenu) {
        body.style.overflow = "hidden";
        this.menuIcon = require('@/assets/images/navigationcomponent/close.svg')
      } else {
        // Enable scroll
        body.style.overflow = "auto";
        this.menuIcon = require('@/assets/images/navigationcomponent/menu.svg')
      }
    },
    handleScroll() {
      let myNav = document.getElementById("nav");
      window.onscroll = function () {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
          myNav.classList.add("scroll");
        } else {
          myNav.classList.remove("scroll");
        }
      };
    }
  }
}
</script>
<template>
  <div class="navigation" id="nav">
    <section>
      <div class="menu">
        <div class="flex">
          <img alt="hamburger menu" class="menu-icon" :src='menuIcon' @click="menu_open"/>
          <a class="logo" href="/">
            <img src="@/assets/images/logo.png" alt="logo"/>
            <p>BOLTCLIQ</p>
          </a>

        </div>
        <div class="flex-wrap">
          <div class="access">
            <i><a href="tel: +1(579)500-8848" style="color: white; font-size: 12px">Tel: +1(579)500-8848</a></i>
          </div>

          <router-link to="#" class="cta button-primary">
            Portfolio
          </router-link>
        </div>
      </div>
    </section>
    <Dropdown class="menu_dropdown" v-show="showMenu"/>
  </div>
</template>

<style scoped>
.scroll {
  background-color: black;
  transition: all 1s ease-in-out;
}
.cta {
  color: white;
  font-size: 14px;
  border-radius: var(--border-radius);
}

.navigation {
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
}

.navigation .menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  place-items: center;
}

.navigation .menu-icon {
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.navigation .logo {
  display: flex;
  gap: 10px;
  align-items: center;
}

.navigation .logo img {
  height: 25px;
  width: 25px;
}

.navigation .logo p {
  color: white;
  font-size: 10px;
  letter-spacing: 2px;
}

a {
  text-decoration: none;
}

.menu_dropdown {
  position: absolute;
  width: 100%;
  top: 60px;
  height: 100vh;
}

@media (max-width: 768px) {
  .navigation {
    background-color: black;
  }

  .flex-wrap .access {
    display: none
  }
}


</style>
