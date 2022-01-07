<template>
  <div class="things">
    <div class="img">
<!--      <img :src="thingsMas.image" alt="">-->
    </div>
    <div class="text">
      <div class="text-title">
        <div class="text-title__sub">
          {{thingsMas.title}}
        </div>
        <div class="text-title__price">
          ${{thingsMas.price}}
          ${{thingsMas.totalPrice}}
        </div>
      </div>

      <div class="text-btns">
        <div class="text-btns__plusMinus">
          <button class="text-btns__plusMinus-minus">-</button>
          <div class="tekst-btns__plusMinus-kolvo">
<!--            {{thingsMus.quantity}}-->
          </div>
          <button class="text-btns__plusMinus-plus">+</button>
        </div>
        <div class="text-btns__del">
          <button @click="del" class="delete">DELETE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Things"
    }
</script>

<style scoped>

</style>
