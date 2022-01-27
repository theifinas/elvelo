<template>
  <div class="header-menu">
    <router-link to="/">
      <img src="../assets/boostedLogo.svg" alt="">
    </router-link>

    <nav>
      <router-link to="/catalog">
        <a href="#">ELECTRIC ACCESSORIES</a>
      </router-link>
      <router-link to="/product6">
        <a>ELECTRIC SCOOTERS</a>
      </router-link>
      <router-link to="/shipping">
        <a>SHIPPING</a>
      </router-link>
      <router-link to="/info">
        <a href="#">MORE INFO</a>

      </router-link>
    </nav>
    <div class="header-icons">
      <!--      <img src="../assets/avatarIcon.svg" alt="">-->

      <div v-if="minBasket" class="countFirst"><span class="countFirst-sp">{{totalCount}}</span></div>

      <router-link to="/cart">
        <img class="cartPic" src="../assets/cartIcon.svg" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Header",
    data() {
      return {
        minBasket: false
      }
    },
    computed: {
      ...mapState({
        basketProducts: (state) => state.example.productsInBasket,
        totalCount() {
          let total = 0
          for (let item of this.basketProducts) {
            total += item.quantity
          }
          return total.toFixed(0);
        },

      })
    },
    watch: {
      totalCount() {
        if (this.basketProducts.length > 0) {
          this.minBasket = true
        } else if (this.basketProducts.length < 1) {
          this.minBasket = false
        }
      }
    },
    created() {
      if (this.basketProducts.length >= 1) {
        this.minBasket = true
      }

    },
  }
</script>

<style scoped>

</style>
