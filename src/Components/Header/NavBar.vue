<template>
<b-navbar toggleable="md" type="light" variant="purple">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand>
  <router-link class="nav-link" tag="a" active-class="active" to="/">Night Star Events</router-link>
  </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item>
        <router-link class="nav-link" tag="a" active-class="active" to="/" exact>Home</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link class="nav-link" tag="a" active-class="active" to="/gallery">Gallery</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link class="nav-link" tag="a" active-class="active" to="/pricing">Pricing</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link class="nav-link" tag="a" active-class="active" to="/blog">Blog</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link class="nav-link" tag="a" active-class="active" to="/contact">Contact</router-link>
      </b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<style>
.nav-link{
  color:black;
}

.bg-purple {
      background-color: #FFEE58 !important;
}
</style>

