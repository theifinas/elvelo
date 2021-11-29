<template>
  <div class="header-menu">

    <img src="../assets/boostedLogo.svg" alt="">
    <nav>
      <a href="#">ELECTRIC SKATEBOARDS</a>
      <a href="#">ELECTRIC SCOOTERS</a>
      <a href="#">ACCESSORIES</a>
      <a href="#">MORE INFO</a>
    </nav>
    <div class="header-icons">
      <img src="../assets/cartIcon.svg" alt="">
    </div>
  </div>

<div class="welcome">

  <p class="welcome-title">Welcome to Boosted USA</p>
  <p class="welcome-subtitle">The Holy Grail of Electric Skateboards and One REVolutionary Scooter</p>
  <div class="welcome-buttons">
    <button class="welcome-buttons__btn1">BOOSTED REVS</button>
    <button class="welcome-buttons__btn2">BOOSTED BOARDS</button>
  </div>

</div>

  <div class="navigations-icons">
    <div>
      <a target="_blank" :href="electrek" >
        <img src="../assets/electrek.svg" alt="">
      </a>
    </div>
    <div>
      <a target="_blank" :href="techcrunch">
      <img src="../assets/techCrunch.svg" alt="">
    </a>
    </div>
    <div>
      <a target="_blank" :href="popular">
        <img src="../assets/popular.svg" alt="">
      </a>
    </div>
    <div>
      <a target="_blank" :href="wired">
        <img src="../assets/wired.svg" alt="">
      </a>
    </div>
  </div>

  <div class="shop">
    <p class="shop-title">Looking for Boosted Boards, or Boosted Revs?</p>
    <p class="shop-subtitle">Boosted USA acquired <strong>all</strong> of the remaining inventory directly from Boosted.  This means we have the electric skateboards and scooter you all love and have been looking for.  Get your hands on these <strong>highly sought after</strong> products while supplies last. </p>

    <div class="shop-line"></div>

    <div class="shop-img">
      <div class="shop-img__box">
        <img src="../assets/skateboard.svg" alt="">
      </div>
      <div class="shop-img__box2">
        <img src="../assets/rev.svg" alt="">
      </div>
    </div>

  </div>

  <div class="elskate">
    <p class="elskate-words">High-performance</p>
    <p class="elskate-title">Electric Skateboards</p>
    <p class="elskate-subtitle">Cruising campus, going to work or getting through that long list of errands has never been easier or more fun.</p>
    <button class="elskate-btn">SHOP NOW</button>
  </div>

  <div class="revshop">
    <div class="revshop-img1">
      <img src="../assets/girlRev.svg" alt="">
    </div>
    <div class="revshop-img2">
      <img src="../assets/girlRev2.svg" alt="">
    </div>

    <div class="revshop-words">
      <p class="revshop-words__title">Boosted Rev</p>
      <p class="revshop-words__subtitle">There's never been an electric scooter quite like this. Speed past traffic at 24 mph. Go up to 22 miles on a single charge. You'll get there in no time at all. Stop and go with the roll of your thumb. Its intuitive design means there’s almost no learning curve.</p>
      <button class="revshop-words__btn">SHOP NOW</button>
    </div>

  </div>

  <div class="skateshop">
    <div class="skateshop-first">
      <img src="../assets/skate1.svg" alt="">
      <div class="skateshop-first__tekst">
        <p class="skateshop-first__tekst-title">Shop Boosted Stealth</p>
        <p class="skateshop-first__tekst-subtitle">IN STOCK</p>
      </div>
    </div>

    <div class="skateshop-second">
      <img src="../assets/skate2.svg" alt="">
      <div class="skateshop-second__tekst2">
        <p class="skateshop-second__tekst2-title">Shop Boosted Stealth</p>
        <p class="skateshop-second__tekst2-subtitle">IN STOCK</p>
      </div>
    </div>

    <div class="skateshop-third">
      <img src="../assets/skate3.svg" alt="">
      <div class="skateshop-third__tekst3">
        <p class="skateshop-third__tekst3-title">Shop Boosted Stealth</p>
        <p class="skateshop-third__tekst3-subtitle">IN STOCK</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BoostedHeader",
      data(){
          return{
            electrek: "https://electrek.co/",
            techcrunch: "https://techcrunch.com/",
            popular: "https://www.popularmechanics.com/",
            wired: "https://www.wired.com"
          }
      }
    }
</script>

<style scoped>

</style>
