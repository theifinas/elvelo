<template>
    <div class="catalogItem">
      <div class="catalogItem__img">

        <img :src="productItem.image" alt="">
      </div>
      <div class="catalogItem-title">
        {{productItem.title}}
      </div>
      <div class="catalogItem-price">
        {{productItem.price}}
      </div>
      <div class="catalogItem-btn">
        <button @click="cart">Add to cart</button>
      </div>
    </div>
</template>

<script>
  import {ref} from "vue"
    export default {
        name: "Catalog",
      props: {
          productItem: {
            type: Object
          }
      },
      mounted() {
        console.log('iuiuji',this.productItem)
      }
      // cart(){
      //     this.putToBusket(
      //       this.productItem
      //     )
      // }
    }
</script>

<style scoped>

</style>
