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
    }
  }
}
</script>
<template>
  <div class="navigation" id="nav">
    <section>
      <div class="menu">
        <div class="flex">
          <img class="menu-icon" :src='menuIcon' @click="menu_open"/>
          <nuxt-link to="/">
            <img  class="logo" src="@/assets/images/logo.png" alt="logo"/>
          </nuxt-link>

        </div>
        <router-link to="#" class="cta">
          See Case Studies
        </router-link>
      </div>
    </section>
    <Dropdown class="menu_dropdown" v-show="showMenu"/>
  </div>
</template>

<style scoped>

.cta {
  color: white;
  font-size: 14px;
}

.navigation {
  height: 60px;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
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
  height: 30px;
  width: 30px;
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
}
</style>