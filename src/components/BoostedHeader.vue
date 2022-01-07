<template>

  <div class="header-menu">
    <router-link to="/">
      <img src="../assets/boostedLogo.svg" alt="">
    </router-link>

    <nav>
      <a @click="shop">ELECTRIC SKATEBOARDS</a>
      <a href="#">ELECTRIC SCOOTERS</a>
      <a href="#">ACCESSORIES</a>
      <a href="#">GIFT CARD</a>
      <a href="#">MORE INFO</a>
    </nav>
    <div class="header-icons">
      <img src="../assets/avatarIcon.svg" alt="">
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

        <div class="shop-img__box-tekst">
          <img src="../assets/lightning.svg" alt="">
          <p class="shop-img__box-tekst__title">Shop Boosted Boards</p>
          <p class="shop-img__box-tekst__subtitle">In Stock</p>
        </div>

      </div>
      <div class="shop-img__box2">
        <img src="../assets/rev.svg" alt="">

        <div class="shop-img__box2-tekst2">
          <img src="../assets/lightning.svg" alt="">
          <p class="shop-img__box2-tekst2__title">Shop Boosted Boards</p>
          <p class="shop-img__box2-tekst2__subtitle">In Stock</p>
        </div>
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

  <div class="video">
    <div class="video-numb1">      <iframe width="540" height="304" src="https://www.youtube.com/embed/78bXV1ZqQWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

    <div class="video-numb2"> <iframe width="540" height="304" src="https://www.youtube.com/embed/oAQxk9dOJ8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

  <div class="icons">

    <div class="icons-numb1">
      <img src="../assets/icon1.svg" alt="">
      <p class="icons-numb1__title">Go Fast</p>
      <p class="icons-numb1__subtitle">Boosted is known for its premium performance boards offering a next-level experience.</p>
    </div>

    <div class="icons-numb2">
      <img src="../assets/icon2.svg" alt="">
      <p class="icons-numb2__title">Go Fast</p>
      <p class="icons-numb2__subtitle">With optional extended battery life, you can get wherever you need to go reliably.</p>
    </div>

    <div class="icons-numb3">
      <img src="../assets/icon3.svg" alt="">
      <p class="icons-numb3__title">Go Fast</p>
      <p class="icons-numb3__subtitle">Safety is a #1 priority for Boosted, always wear a helmet when riding.</p>
    </div>

    <div class="icons-numb4">
      <img src="../assets/icon4.svg" alt="">
      <p class="icons-numb4__title">Go Fast</p>
      <p class="icons-numb4__subtitle">Boosted products are engineered to last for years and are extremely reliable.</p>
    </div>



  </div>

  <div class="footer">
    <div class="footer-img">
      <img src="../assets/boostedLogo2.svg" alt="">
    </div>

    <div class="footer-explore">
      <p class="footer-explore__links">Explore</p>
      <a href="">Electric Skateboards</a>
      <a href="">Electric Scooters</a>
      <a href="">Accessories</a>
      <a href="">FAQs</a>
      <a href="">Warranty</a>
      <a href="">Quick Start Guide</a>
      <a href="">Contact</a>
      <a href="">Gift Card</a>
      <a href="">Accessibility Statement</a>
    </div>

    <div class="footer-about">
      <p class="footer-about__title">About Boosted USA</p>
      <p class="footer-about__subtitle">Boosted empowers people everywhere to commute across their cities, campuses, and communities in ways that were never before possible. Boosted is solving one of the biggest problems people face each day: transportation.</p>
      <p class="footer-about__address">
        CaliRides LLC - DBA Boosted USA
        1281 Andersen Drive Ste. K
        San Rafael, CA 94901
      </p>
    </div>
  </div>

  <div class="footer2">
    <div class="footer2-links">
      <p>
        © 2021
        <a href="">Boosted USA</a>
        . All Rights Reserved.
        <a href="">Terms of Service</a>
        . Built by
        <a href="">BH</a>
      </p>
    </div>

    <div class="footer2-imgs">
      <img src="../assets/payCard1.svg" alt="">
      <img src="../assets/payCard2.svg" alt="">
      <img src="../assets/payCard3.svg" alt="">
      <img src="../assets/payCard4.svg" alt="">
      <img src="../assets/payCard5.svg" alt="">
      <img src="../assets/payCard6.svg" alt="">
      <img src="../assets/payCard7.svg" alt="">
      <img src="../assets/payCard8.svg" alt="">
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
      },
      methods: {
          shop () {
            this.$router.push("/shop")
          }
      }



    }
</script>

<style scoped>

</style>
