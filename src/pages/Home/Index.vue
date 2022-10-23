<template>
  <Header/>
  <Industries/>
  <ProductLedExperience/>
  <BusinessPractices/>
  <!--  <About/>-->
  <OurExperience/>
  <Care/>
  <Services/>
  <Contact/>
</template>

<script>
import Header from "./Header";
import ProductLedExperience from "./ProductLedExperience";
import BusinessPractices from "./BusinessPractices";
import About from "./About"
import OurExperience from "./OurExperience";
import Care from "./Care";
import Services from "./Services";
import Contact from "./Contact";
import Industries from "@/pages/Home/Industries";

export default {
  name: "HomeView",
  components: {
    Industries,
    Header,
    ProductLedExperience,
    BusinessPractices,
    About,
    OurExperience,
    Care,
    Services,
    Contact,
  },
};
</script>
