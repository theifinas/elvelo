<template>
  <div class="catalogItem">
    <div  class="catalogItem__img">
      <img v-on:click="getMoreInfo" :src="productItem.image" alt="">
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
  import {defineComponent} from "vue";



  export default defineComponent(
    {
      name: "Catalog",
      props: {
        productItem: {
          type: Object
        }
      },
      methods: {
        getMoreInfo() {
          this.$router.push(`/catalog/item/${this.productItem._id}`)
          console.log('clicked')
        }
      },
      mounted() {
        console.log('iuiuji', this.productItem)
      }
      // cart(){
      //     this.putToBusket(
      //       this.productItem
      //     )
      // }
    }
  )
</script>

<style scoped>

</style>
