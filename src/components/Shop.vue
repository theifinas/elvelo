<template>

  <div class="title">
      <p class="title-text">Electric  Skateboards</p>
      <div class="title-line"></div>
      <p class="title-subtitle">All of boards are 100% Boosted.</p>
  </div>

  <div class="catalog">
    <div v-for="product in  thingsMas" :key="product.id">
      <catalog :product-item="product"/>
    </div>
  </div>


</template>

<script>
  import catalog from "./catalog"
  import {mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "Shop",
      components: {
          catalog
        },
      computed: {
          thingsMas() {
            console.log(this.$store.getters["example/THINGSMAS_GETTER"]);
            return this.$store.getters["example/THINGSMAS_GETTER"];
          }
      },
      methods: {
          ...mapActions({
            actionProduct: "example/GET_PRODUCT"
          })

      },
      created() {
          this.actionProduct();
        console.log(this.thingsMas)
      }
    }
</script>

<style scoped>

</style>
