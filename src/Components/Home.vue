<template>
<div>
<b-container fluid class="p-4 bg-dark">
  <b-row>
    <b-col>
      <router-link class="img-position" tag="a" active-class="active" to="/sweetcart">
      <b-img class = "img" thumbnail fluid src="../static/Sweetcart.jpeg" alt="Thumbnail" />
      </router-link>
      <h3 class = "captions">Sweetcart</h3>
    </b-col>
    <b-col>
      <router-link class="img-position" tag="a" active-class="active" to="/photobooth">
      <b-img class = "img" thumbnail fluid src="../static/Booth.jpg" alt="Thumbnail" />
      </router-link>
      <h3 class = "captions">PhotoBooth</h3>
    </b-col>
    <b-col>
      <router-link class="img-position" tag="a" active-class="active" to="/packages">
      <b-img class = "img" thumbnail fluid src="../static/Packages.jpg" alt="Thumbnail" />
      </router-link>
      <h3 class = "captions">Packages</h3>
    </b-col>
  </b-row>
</b-container>
<h2 class = "heading">About Us</h2>
<p class = "paragraph">
    Night star events is a photobooth and sweetcart company covering the Northeast of England. We provide a excellent service and try to be the very best on the market. We cover a wide range of events from birthdays to weddings blah blah blah
    </p>
</div>
</template>

<script>

export default {
    
}

</script>

<style>
.img {
    max-height: 250px;
    max-width: 300px;
    min-width: 300px;
    min-height: 250px;
    cursor: pointer;
    
}

.captions {
    text-align: center;
    color: white;
}

.paragraph {
    text-align: center;
    padding-right: 40px;
    padding-left: 40px;
}

.heading {
    text-align: center;
}

.img-position{
  padding-left: 75px;
}
</style>

