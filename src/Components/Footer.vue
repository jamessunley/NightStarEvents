<template>
  <v-footer class="footer"
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="yellow lighten-1">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
          v-on:click="say(icon)"
        >
          <v-icon size="24px" color="black" >{{ icon }}</v-icon>
          
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>Night Star Events</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>


<script>

  export default {
    methods: {
    say: function (message) {
      if(message == 'fab fa-facebook')
      {
      window.location.href = "https://www.facebook.com/nightstarevents2/?fb_dtsg_ag=Adxsst_HC4sXJRF4FI-FUwBbWwTKKIjt7oHw1Z5pndpgtA%3AAdztlBwWDQxQJz1YS0Pi1YaOEHsWI-jENJrw8e_rk1KFUg"
      }

    }
  },
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-instagram'
      ]
    })
  }
</script>

<style>

.subheading{
  color: black !important;
  size: 24px;
}

.footer{
  flex-shrink: 0;
}
</style>
