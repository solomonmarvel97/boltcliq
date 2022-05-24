<template>
  <Hero />
  <Hero2 />
  <Processes />
  <Projects />
  <Experience />
  <Services />
  <Journey />
  <Testimonials />
  <About />
  <Contact />
</template>

<script>
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Processes from "./Processes";
import Services from "./Services";
import Experience from "./Experience";
import Journey from "./Journey";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import About from "./About";
import Contact from "./Contact";

export default {
  name: "HomeView",
  components: {
    Hero,
    Hero2,
    Processes,
    Experience,
    Services,
    Journey,
    Projects,
    Testimonials,
    About,
    Contact,
  },
};
</script>
