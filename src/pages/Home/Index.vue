<template>
  <Hero />
  <Hero2 />
  <Processes />
  <Hero3 />
  <Experience />
  <Services />
  <Hero4 />
  <CaseStudy />
  <Contact />
</template>

<script>
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";
import Processes from "./Processes";
import Services from "./Services";
import Experience from "./Experience";
import CaseStudy from "./CaseStudy";
import Projects from "./Projects";
import Contact from "./Contact";

export default {
  name: "HomeView",
  components: {
    Hero,
    Hero2,
    Hero3,
    Hero4,
    Processes,
    Experience,
    Services,
    CaseStudy,
    Projects,
    Contact,
  },
};
</script>
