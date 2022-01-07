<template>
    <div class="cart">
      <div class="cartProduct">
        <div class="cartThe">
          <things/>
        </div>
      </div>
    </div>
</template>

<script>
  import Things from "./Things"
    export default {
        name: "Cart",
      components: {Things},
      data () {
          return {
            thingsMas: []
          }
      }
    }
</script>

<style scoped>

</style>
