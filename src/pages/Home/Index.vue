<template>
  <Header/>
  <Industries/>
  <ProductLedExperience/>
  <BasicPortfolio/>
  <BusinessPractices/>
  <!--  <About/>-->
  <Care/>
  <Services/>
  <Contact/>
</template>

<script>
import Header from "./Header";
import ProductLedExperience from "./ProductLedExperience";
import BusinessPractices from "./BusinessPractices";
import About from "./About"
import Care from "./Care";
import Services from "./Services";
import Contact from "./Contact";
import Industries from "@/pages/Home/Industries";
import BasicPortfolio from "./basic-portfolio.vue";

export default {
  name: "HomeView",
  components: {
    Industries,
    Header,
    ProductLedExperience,
    BusinessPractices,
    About,
    Care,
    Services,
    Contact,
    BasicPortfolio
},
};
</script>
