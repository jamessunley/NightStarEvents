<template>
<div>
<b-container fluid class="p-4 bg-dark">
  <b-row>
    <b-col class = "test">
      <b-img class = "img" thumbnail fluid src="../static/Sweetcart.jpeg" alt="Thumbnail" />
      <h3 class = "captions">Sweetcart</h3>
    </b-col>
    <b-col class = "test">
      <b-img class = "img" thumbnail fluid src="../static/Booth.jpg" alt="Thumbnail" />
      <h3 class = "captions">PhotoBooth</h3>
    </b-col>
    <b-col class = "test1">
      <b-img class = "img" thumbnail fluid src="../static/Packages.jpg" alt="Thumbnail" />
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
    
}

.captions {
    text-align: Left;
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

.test{
  padding-left: 75px;
  padding-right: 50px;
}

.test1
{
  padding-left: 75px;
}
</style>

