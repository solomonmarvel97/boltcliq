<template>
  <Hero />
  <Hero2 />
  <DevelopmentProcess />
  <Experience />
  <Hero3 />
  <Services />
  <Contact />
</template>

<script>
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import DevelopmentProcess from "./DevelopmentProcess";
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
    DevelopmentProcess,
    Experience,
    Services,
    CaseStudy,
    Projects,
    Contact,
  },
};
</script>
