<script setup>
import Header from './components/globals/Header.vue'
import Footer from './components/globals/Footer.vue'
</script>

<template>
  <Header/>
  <main class="mt-28 min-h-screen">
    <RouterView/>
  </main>
  <Footer/>
</template>