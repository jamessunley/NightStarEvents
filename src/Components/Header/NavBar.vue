<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">
        <router-link class="nav-link active" tag="a" active-class="active" to="/">Night Star Events</router-link>
        </a>
      <button class="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" tag="a" active-class="active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
               <router-link class="nav-link" tag="a" active-class="active" to="/gallery">Gallery</router-link>
          </li>
          <li class="nav-item">
             <router-link class="nav-link"  tag="a" active-class="active" to="/pricing">Pricing</router-link>
          </li>
          <li class="nav-item">
               <router-link class="nav-link" tag="a" active-class="active"  to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" tag="a" active-class="active"  to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>
