<template>
  <div class="dropdown">
    <section>
      <div class="dropdown_container">
        <div class="dropdown_wrapper">
          <!-- properties -->
          <div class="dropdown_item">
            <span>Services</span>
            <a class="flex" href="#">
              Design Services
            </a>
            <a class="flex" href="#">
              IT Consulting Services
            </a>
            <a class="flex" href="#">
              R&D Services
            </a>
            <a class="flex" href="#">
              Marketing Services
            </a>
            <a class="flex" href="#">
              Business Consulting
            </a>
          </div>

          <!-- subsidiaries -->
          <div class="dropdown_item">
            <span>Platforms</span>
            <a href="#">Top Universe</a>
            <a href="#">Prime Learn</a>
            <a href="#">Top Africa</a>
            <a href="#">Rossele Proptech</a>
            <a href="#">Swiftgo Platform</a>
          </div>

          <!-- about us -->
          <div class="dropdown_item">
            <span>Company</span>
            <a href="/blog">Blog</a>
            <a href="/about">About us</a>
            <a href="/faq">FAQ.</a>
          </div>

          <!--contact us-->
          <div class="dropdown_item">
            <span>Contact</span>
            <a target="_blank" href="mailto:info@boltcliq.com">
              <div class="flex">
                <p>info@boltcliq.com</p>
              </div>
            </a>
            <div>
              <div class="flex">
                <div>
                  <a target="_blank" href="tel:+1(579)500-8848">
                    +1 (579)500-8848 </a>
                </div>
              </div>
            </div>
          </div>
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

.dropdown .dropdown_container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
}

.dropdown span {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600 !important;
  color: var(--primary) !important;
}


.dropdown_wrapper {
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  align-items: flex-start;

}

.dropdown_item {
  display: grid;
  gap: 5px;
  margin-top: 1em;
}

.dropdown_item a, p {
  text-decoration: none;
  font-weight: 600;
  font-size: 25px;
  line-height: 1.4;
  color: white;
  transition: all 100ms ease-in;
}

.dropdown_item span {
  font-weight: 600;
  color: #171717;
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
    font-weight: 600;
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
