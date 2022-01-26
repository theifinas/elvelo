<template>
  <div class="cart">
    <div class="cartProduct">
      <p style="font-family: Roboto; font-weight: 600; font-size: 33px;">Shopping Cart</p>
      <div class="title-line"></div>
      <div class="denominations">
        <p class="denominations-product">Products</p>
        <p class="denominations-price">Price</p>
        <p class="denominations-quantity">Quantity</p>
        <p class="denominations-total">Total</p>
      </div>
      <div class="prod-line"></div>
      <div v-for="(product,id) in basketProducts" class="cartThe">
        <things :products="product"/>
      </div>
      <!--        <div class="subprice">-->
      <!--          <p class="subprice-title">Subtotal:</p>-->
      <!--        </div>-->
    </div>
  </div>
</template>

<script>
  import Things from "./Things"
  import {mapState} from 'vuex'

  export default {
    name: "Cart",
    components: {Things},
    data() {
      return {
        thingsMas: []
      }
    },
    computed: {
      ...mapState({
        basketProducts: (state) => state.example.productsInBasket,
        total() {
          let total = 0
          for (let item of this.basketProducts) {
            total += item.totalPrice
          }
          return total.toFixed(2);
        },
      }),

    },
  }
</script>

<style scoped>

</style>
