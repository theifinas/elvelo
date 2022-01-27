<template>
  <div class="things">
    <div class="img">
      <img class="basketPic" :src="products.image" alt="">
    </div>
    <div class="text">
        {{products.title}}
    </div>
    <div class="price">
      ${{products.price}}
    </div>
    <div class="group">
      <button @click="reduce" class="group-minus">-</button>

      <div class="group-kolvo">
        {{products.quantity}}
      </div>
      <button @click="countAdd" class="group-plus">+</button>
    </div>
    <div class="totalPrice">
      ${{products.totalPrice}}
    </div>
    <div class="">
      <button @click="deleteProduct" class="delete"></button>
    </div>


  </div>

</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "Things",
    props: {
      products: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      deleteProduct() {
        this.delProductInBasket(this.products)
      },
      countAdd() {
        this.addCount(this.products)
      },
      reduce() {
        this.reduceI(this.products)
      },

      ...mapMutations({
        delProductInBasket: 'example/DELETE_PRODUCT',
        addCount: 'example/ADD_COUNT',
        reduceI: 'example/REDUCE',
      }),
    }
  }
</script>

<style scoped>

</style>
