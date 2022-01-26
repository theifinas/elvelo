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
        <q-carousel-slide :name="1" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-rev-3-4-turn_2000x.png?v=1586294735" />
        <q-carousel-slide :name="2" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Boosted-Rev-Folded_2x_00a83c75-409a-4b19-86b2-9808fcf5208e_2000x.png?v=1586294736" />
        <q-carousel-slide :name="3" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-rev-light_2000x.png?v=1586294735" />
        <q-carousel-slide :name="4" img-src="https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-rev-profile-left_2000x.png?v=1586294735" />
      </q-carousel>
    </div>

    <div class="all-text">
      <div class="all-text__title">
        <p style=" font-weight: 600; font-family: Roboto; font-size: 35px;">Boosted Rev Electric Scooter</p>
        <p class="all-text__title-price">$1490.00</p>
        <p style=" font-weight: 600; font-size: 30px; font-family: Roboto ">Boosted Rev</p>
        <p class="all-text__title-sub">The World's most desirable scooter is back. Packed full of power this dual motor scooter attacks hills with speed and comfort. The Boosted Rev is by far the smoothest, safest scooter on the planet. Get to where you are going with style and ease.</p>
      </div>

      <div class="all-text__opportunities">
        <img src="https://images.ctfassets.net/axbo81ontyws/2mwGjOVeaN25eEh9EZeYi9/02ebf17503441bde246fa4c883c1d8fd/speed_geschwindigkeit_vitesse_velocidad.png" alt="">
        <p>20 mph Top Speed</p>
        <img src="https://images.ctfassets.net/axbo81ontyws/6NVJGROsWHmcszGQkmvCiE/fefbbaad0db35e813fb69b94bc9ef90e/MileRange.svg" alt="">
        <p>Extended Range (14 Miles)</p>
      </div>

      <div class="all-text__subtitle">
        <p>Refurb Condition - Like new out of the box. Motors, display, and wheels are all new. The deck might have light scuffs. Manuals not included. 60 day warranty applies.  *Packaging will be original but will notebe double boxed. </p>
        <p>Used Condition - Battery, Motors, and belts operate perfectly.  The board will have signs of use including but not limited to: Packaging, motor guards, deck, and covers.  Used boards are sold as is,  our warranty does not apply.</p>
      </div>

      <div class="all-text__buttons">
        <button class="all-text__buttons-btn1">Add to cart</button>
      </div>

    </div>

  </div>

  <div class="delivery">

    <img class="delivery-img" src="https://cdn.shopify.com/s/files/1/0268/1454/6031/files/free-shipping.png?v=1602535478" alt="" style="width: 80px; height: 80px;">
    <p>FAST, FREE SHIPPING <span>ON ORDERS OVER $99</span></p>
  </div>

  <div class="utube">
    <iframe width="1180" height="664" src="https://www.youtube.com/embed/78bXV1ZqQWI?list=TLGGuaIxILZvDyoyMzAxMjAyMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>



</template>

<script>
    import {ref} from "vue";

    export default {
        name: "Product6",
      setup () {
        return {
          slide: ref(1),
        }
      }
    }
</script>

<style scoped>

</style>
