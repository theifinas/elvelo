<template>
  <div class="welcome">

    <p class="welcome-title">Welcome to Boosted USA</p>
    <p class="welcome-subtitle">The Holy Grail of Electric Skateboards and One REVolutionary Scooter</p>
    <div class="welcome-buttons">
      <router-link to="/product6">
        <button class="welcome-buttons__btn1">BOOSTED REVS</button>
      </router-link>
      <router-link to="/catalog">
        <button class="welcome-buttons__btn2">BOOSTED BOARDS</button>
      </router-link>
    </div>

  </div>

  <div class="navigations-icons">
    <div>
      <a target="_blank" :href="electrek">
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
    <p class="shop-subtitle">Boosted USA acquired <strong>all</strong> of the remaining inventory directly from Boosted.
      This means we have the electric skateboards and scooter you all love and have been looking for. Get your hands on
      these <strong>highly sought after</strong> products while supplies last. </p>

    <div class="shop-line"></div>

    <div class="shop-img">
      <div class="shop-img__box">
        <img src="../assets/skateboard.svg" alt="">

        <router-link to="/catalog">

        <div class="shop-img__box-tekst">
          <img src="../assets/lightning.svg" alt="">
          <p class="shop-img__box-tekst__title">Shop Boosted Boards</p>
          <p class="shop-img__box-tekst__subtitle">In Stock</p>
        </div>
        </router-link>

      </div>
      <div class="shop-img__box2">
        <img src="../assets/rev.svg" alt="">

        <router-link to="/product6">
          <div class="shop-img__box2-tekst2">
            <img src="../assets/lightning.svg" alt="">
            <p class="shop-img__box2-tekst2__title">Shop Boosted Boards</p>
            <p class="shop-img__box2-tekst2__subtitle">In Stock</p>
          </div>
        </router-link>

      </div>
    </div>

  </div>

  <div class="elskate">
    <p class="elskate-words">High-performance</p>
    <p class="elskate-title">Electric Skateboards</p>
    <p class="elskate-subtitle">Cruising campus, going to work or getting through that long list of errands has never
      been easier or more fun.</p>
    <router-link to="catalog">
      <button class="elskate-btn">SHOP NOW</button>
    </router-link>
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
      <p class="revshop-words__subtitle">There's never been an electric scooter quite like this. Speed past traffic at
        24 mph. Go up to 22 miles on a single charge. You'll get there in no time at all. Stop and go with the roll of
        your thumb. Its intuitive design means there’s almost no learning curve.</p>
      <router-link to="/product6">
        <button class="revshop-words__btn">SHOP NOW</button>
      </router-link>
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

  <div class="video">
    <div class="video-numb1">
      <iframe width="540" height="304" src="https://www.youtube.com/embed/78bXV1ZqQWI" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </div>

    <div class="video-numb2">
      <iframe width="540" height="304" src="https://www.youtube.com/embed/oAQxk9dOJ8k" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
