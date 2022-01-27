<template>
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
        <q-carousel-slide :name="1" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Mini-X-Belly_2000x.png?v=1586292701" />
        <q-carousel-slide :name="2" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-mini-x_1_2000x.png?v=1586292701" />
        <q-carousel-slide :name="3" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Mini-X-Grip_2000x.png?v=1586292701" />
        <q-carousel-slide :name="4" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Mini-X-Profile_2000x.png?v=1586292700" />
      </q-carousel>
    </div>

    <div class="all-text">
      <div class="all-text__title">
        <p style=" font-weight: 500; font-family: Roboto; font-size: 35px;">Boosted Mini X</p>
        <p class="all-text__title-price">$890.00</p>
        <p class="all-text__title-sub">Where Power Meets Agility.  The Mini X is the favorite board for old school shredders and those looking for the most nimble board available today.
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
        <router-link to="/catalog">
          <button class="all-text__buttons-btn1">Back</button>
        </router-link>
      </div>

    </div>

  </div>

  <div class="delivery">

    <img class="delivery-img" src="https://cdn.shopify.com/s/files/1/0268/1454/6031/files/free-shipping.png?v=1602535478" alt="" style="width: 80px; height: 80px;">
    <p>FAST, FREE SHIPPING <span>ON ORDERS OVER $99</span></p>
  </div>

  <div class="utube">
    <iframe width="1180" height="664" src="https://www.youtube.com/embed/VlmUkX8RhJI?list=TLGGYm6Q36eGcUoyMjAxMjAyMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: "ProductInfo",
    setup () {
      return {
        slide: ref(1),
      }
    }
  }
</script>

<style scoped>

</style>
