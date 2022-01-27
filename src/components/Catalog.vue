<template>
  <div class="catalogItem">
    <div class="catalogItem__img">
      <img v-on:click="getMoreInfo" :src="productItem.image" alt="">
    </div>
    <div class="catalogItem__title">
      {{productItem.title}}
    </div>
    <div class="catalogItem__price">
      <p>{{productItem.price}}</p>
    </div>
    <div class="catalogItem__btn">
      <button class="catalogItem__btn-btns" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
  // import {ref} from "vue"
  // import {defineComponent} from "vue";
  import {mapMutations} from "vuex"


  export default {
    name: "Catalog",
    props: {
      productItem: {
        type: Object
      }
    },
    methods: {
      ...mapMutations({
        addProductToBasket: 'example/ADD_PRODUCT',
      }),
      getMoreInfo() {
        this.$router.push(`/catalog/item/${this.productItem._id}`)
        console.log('clicked')
      },
      addToCart() {
        this.addProductToBasket(this.productItem)
        console.log(this.addProductToBasket)
      },
    },
    mounted() {
      console.log('iuiuji', this.productItem)

    },
    // cart(){
    //     this.putToBusket(
    //       this.productItem
    //     )
    // }
  }

</script>

<style scoped>

</style>
