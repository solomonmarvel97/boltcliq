<template>
  <div class="dropdown">
    <section>
      <div class="dropdown_container">
            <div>
            <a class="flex" href="tel: +1(579)500-8848">+1(579)500-8848</a>
            <a class="flex" href="mailto:contact@boltciq.com">contact@boltcliq.com</a>
          </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.dropdown {
  width: 100%;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding-top: 2em;
  padding-bottom: 4em;
}

.dropdown_container {
  display: flex;
  justify-content: center;
}

.dropdown_container > div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 5em;
}

a {
  text-decoration: none;
  font-size: 100px;
  line-height: 1.2;
  color: white;
  transition: all 100ms linear;
}

@media (max-width: 768px) {
  .dropdown_item a {
    font-size: 30px;
  }
}

/*flex overide*/
.flex {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .flex {
    flex-wrap: wrap;
  }
  .dropdown_wrapper {
    gap: 20px;
  }
  .dropdown_wrapper {
    justify-content: flex-start;
  }
  .dropdown_item a, p {
    text-decoration: none;
    line-height: 1.2;
    color: white;
    transition: all 100ms ease-in;
    padding: 3px;
  }
}

.text-big {
  text-transform: uppercase;
}
</style>
