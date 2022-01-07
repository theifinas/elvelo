<template>

  <div class="header-menu2">
    <router-link to="/">
      <img src="../assets/boostedLogo.svg" alt="">
    </router-link>

    <nav>
      <a @click="shop">ELECTRIC SKATEBOARDS</a>
      <a href="#">ELECTRIC SCOOTERS</a>
      <a href="#">ACCESSORIES</a>
      <a href="#">GIFT CARD</a>
      <a href="#">MORE INFO</a>
    </nav>
    <div class="header2-icons">
      <img src="../assets/cartIcon.svg" alt="">
      <img src="../assets/avatarIcon.svg" alt="">
    </div>
  </div>

  <div class="title">
      <p class="title-tekst">Electric  Skateboards</p>
      <div class="title-line"></div>
      <p class="title-subtitle">All of boards are 100% Boosted.</p>
  </div>

  <div v-for="product in  thingsMas" :key="product.id" class="catalog">
    <catalog :product-item="product"/>
<!--    <div class="catalog-first">-->
<!--      <img src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Mini-X-Belly_400x.png?v=1586292701" alt="">-->
<!--      <div class="catalog-first__title">-->
<!--        <a class="catalog-first__title-name" href="">Boosted Mini X</a>-->
<!--        <p class="catalog-first__title-price">from $899.00</p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="catalog-second">-->
<!--      <img src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-plus-battery_400x.png?v=1586292529" alt="">-->
<!--      <div class="catalog-second__title">-->
<!--        <a class="catalog-second__title-name" href="">Boosted Mini X</a>-->
<!--        <p class="catalog-second__title-price">from $899.00</p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="catalog-third">-->
<!--      <img src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-mini-1-1_2000x.png?v=1587690465" alt="">-->
<!--      <div class="catalog-third__title">-->
<!--        <a class="catalog-third__title-name" href="">Boosted Mini X</a>-->
<!--        <p class="catalog-third__title-price">from $899.00</p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="catalog-fourth">-->
<!--      <img src=" https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-2ndgen-board_400x.jpg?v=1610481207" alt="">-->
<!--      <div class="catalog-fourth__title">-->
<!--        <a class="catalog-fourth__title-name" href="">Boosted Mini X</a>-->
<!--        <p class="catalog-fourth__title-price">from $899.00</p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="catalog-fifth">-->
<!--      <img src="     https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-stealth-bottom_2000x.png?v=1586292277" alt="">-->
<!--      <div class="catalog-fifth__title">-->
<!--        <a class="catalog-fifth__title-name" href="">Boosted Mini X</a>-->
<!--        <p class="catalog-fifth__title-price">from $899.00</p>-->
<!--      </div>-->
<!--    </div>-->



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
