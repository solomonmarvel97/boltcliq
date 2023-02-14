<script>
import Dropdown from "@/components/Navigation/Dropdown";

export default {
  components: {Dropdown},
  data() {
    return {
      showMenu: false,
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
      } else {
        // Enable scroll
        body.style.overflow = "auto";
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
  <nav>
      <a class="logo" href="/">
        <img src="@/assets/images/logo.png"/>
      </a>
      <div class="menu" id="desktop_menu">
        <ul>
          <li><a href="/#products">Products</a></li>
          <li><a href="/#services">Services</a></li>
          <a target="_blank" class="button-dark" href="https://blog.boltcliq.com">Portfolio</a>
        </ul>
      </div>

      <div class="menu" id="mobile_menu" v-if="showMenu">
        <ul class="shadow-1">
          <li><a href="/#products">Products</a></li>
          <li><a href="/#services">Services</a></li>
          <a target="_blank" class="button-dark" href="https://blog.boltcliq.com">Portfolio</a>
        </ul>
      </div>

      <div class="hamburger" @click="menu_open"></div>
    </nav>
    <!-- end navigation -->


</template>

<style scoped>/* start nav */
nav {
    height: 80px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    place-items: center;
    padding: 0 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.066);
    z-index: 999;
    width: 100%;
    position: sticky;
    top: 0px;
    left: 0px;
  }

  ul a {
  color: white;
  text-decoration: none !important;
  padding: 10px 30px
}

  nav .logo h3 {
    min-width: 150px;
  }
  
  nav .logo img {
    height: 25px;
    border-radius: 5px;
    /* max-width: 150px; */
    object-fit: cover;
  }
  
  nav .menu ul {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    place-items: center;
    list-style: none;
  }
  
  nav .menu ul li a {
    all: unset;
    font-size: 14px;
    cursor: pointer;
    padding: 10px 0;
  }
  
  nav .menu ul li a:hover {
    color: black;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.378);
  }
  
  nav .try {
    background-color: var(--primary);
    color: white;
    cursor: pointer;
  }
  
  nav .try:hover {
    background-color: var(--primary-tint);
    color: white !important;
  }

  nav .action button {
    padding: 16px;
    min-width: 150px;
    color: var(--white);
    background-color: var(--primary-tint);

    border: none;
    cursor: pointer;
  }
  
  nav .action button:hover {
    background-color: var(--primary);
    transition: 0.5s ease;
  }
  
  nav .hamburger {
    display: none;
  }
  
  #mobile_menu {
    /* display: none; */
  }
  
  @media (max-width: 1000px) {
    #desktop_menu {
      display: none;
    }
  
    nav {
      height: 80px;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  
    nav .menu ul {
      width: 100%;
      position: absolute;
      top: 80px;
      left: 0;
      gap: 0;
      flex-direction: column;
      z-index: 99;
      background-color: var(--background-color);
    }
  
    nav .menu ul li {
      font-size: 14px;
      width: 100%;
      display: flex;
      justify-content: center;
      place-items: center;
      height: 50px;
      border-bottom: 0.2px solid rgba(0, 0, 0, 0.066);
    }
  
    nav .try {
      display: block;
    }
  
    nav .action {
      display: none;
    }
  
    nav .hamburger {
      display: block;
      width: 20px;
      height: 20px;
      background-image: url("@/assets/icons/menu-icon.svg");
      background-color: var(--background-color);
      border: none;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  
  .visible {
    display: block !important;
  }
  
  /* end nav */
</style>
