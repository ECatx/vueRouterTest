<template>
  <div class="">
  <nav class="bg-gray-900 py-1 shadow-md rounded-lg text-3xl text-center text-white">
    <router-link to="/">Home</router-link> |
    <router-link to="/About">About</router-link> |
    <router-link to="/Hamburger">Burger</router-link>

  </nav>
  </div>
  <router-view/>
</template>

<script setup></script>