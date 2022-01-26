<template>

  <div class="header-menu">
    <router-link to="/">
      <img src="../assets/boostedLogo.svg" alt="">
    </router-link>

    <nav>
      <router-link to="/Shop">
        <a>ELECTRIC ACCESSORIES</a>
      </router-link>
      <router-link to="/product6">
        <a>ELECTRIC SCOOTERS</a>
      </router-link>
      <router-link to="/gift">
        <a>GIFT CARD</a>
      </router-link>
      <a href="#">MORE INFO</a>
    </nav>
    <div class="header-icons">
      <img src="../assets/avatarIcon.svg" alt="">
      <img src="../assets/cartIcon.svg" alt="">
    </div>
  </div>

</template>

<script>
    export default {
        name: "Giftcard"
    }
</script>

<style scoped>

</style>
