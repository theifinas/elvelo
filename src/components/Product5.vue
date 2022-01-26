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
      <a href="#">GIFT CARD</a>
      <a href="#">MORE INFO</a>
    </nav>
    <div class="header-icons">
      <img src="../assets/avatarIcon.svg" alt="">
      <img src="../assets/cartIcon.svg" alt="">
    </div>
  </div>

  <div class="all">
    <div class="all-animation"   >
      <q-carousel
        animated
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        control-color="orange"
        arrows
        swipeable
        infinite
        padding

      >
        <q-carousel-slide :name="1" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-stealth-bottom_2000x.png?v=1586292277" />
        <q-carousel-slide :name="2" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-stealth-grip_2000x.png?v=1586292276" />
        <q-carousel-slide :name="3" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-stealth-motor_2000x.png?v=1586292277" />
        <q-carousel-slide :name="4" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-stealth-profile_2000x.png?v=1586292276" />
        <q-carousel-slide :name="5" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-stealth-size_2000x.jpg?v=1610482402" />
      </q-carousel>
    </div>

    <div class="all-text">
      <div class="all-text__title">
        <p style=" font-weight: 500; font-family: Roboto; font-size: 35px;">Boosted Stealth</p>
        <p class="all-text__title-price">$890.00</p>
        <p class="all-text__title-sub">The pinnacle of performance.  The Boosted Stealth is the fastest, cleanest and most powerful skateboard ever built.   The Mini X is the favorite board for old school shredders and those looking for the most nimble board available today.
        </p>
      </div>

      <div class="all-text__opportunities">
        <img src="https://images.ctfassets.net/axbo81ontyws/2mwGjOVeaN25eEh9EZeYi9/02ebf17503441bde246fa4c883c1d8fd/speed_geschwindigkeit_vitesse_velocidad.png" alt="">
        <p>20 mph Top Speed</p>
        <img src="https://images.ctfassets.net/axbo81ontyws/6NVJGROsWHmcszGQkmvCiE/fefbbaad0db35e813fb69b94bc9ef90e/MileRange.svg" alt="">
        <p>Extended Range (14 Miles)</p>
        <img src="https://images.ctfassets.net/axbo81ontyws/4kEvLXy4qZz7s8x9nL5tEn/38fed76b111b121464abbe97b4cce9dc/super_flex_composite_deck.png" alt="">
        <p>Deep Dish Composite Deck</p>
      </div>

      <div class="all-text__subtitle">
        <p>New Condition - New in box, all original packing materials. </p>
        <p>Refurb Condition - Like new out of the box. Motors, guards, and wheels are all new. The deck might have light scuffs. Manuals not included. 60 day warranty applies.</p>
        <p>Used Condition - Battery, Motors, and belts operate perfectly.  The board will have signs of use including but not limited to: Packaging, motor guards, deck, and covers.  Used boards are sold as is,  our warranty does not apply.</p>
      </div>

      <div class="all-text__buttons">
        <button class="all-text__buttons-btn1">Add to cart</button>
        <button class="all-text__buttons-btn2">Buy it now</button>
      </div>

    </div>

  </div>

  <div class="delivery">

    <img class="delivery-img" src="https://cdn.shopify.com/s/files/1/0268/1454/6031/files/free-shipping.png?v=1602535478" alt="" style="width: 80px; height: 80px;">
    <p>FAST, FREE SHIPPING <span>ON ORDERS OVER $99</span></p>
  </div>

  <div class="utube">
    <iframe width="1180" height="664" src="https://www.youtube.com/embed/DOs7Dd2nNNg?list=TLGGKCbp0hkxF1AyMzAxMjAyMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    import {ref} from "vue";

    export default {
        name: "Product5",
      setup () {
        return {
          slide: ref(1),
        }
      }
    }
</script>

<style scoped>

</style>
