<template>

  <Header/>
  <router-view></router-view>
  <Footer/>

</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";

  export default {
    name: "BoostedHeader",
    components: {Header, Footer},
    data() {
      return {
        electrek: "https://electrek.co/",
        techcrunch: "https://techcrunch.com/",
        popular: "https://www.popularmechanics.com/",
        wired: "https://www.wired.com"
      }
    },
    methods: {
      shop() {
        this.$router.push("/shop")
      }
    }


  }
</script>

<style scoped>

</style>
