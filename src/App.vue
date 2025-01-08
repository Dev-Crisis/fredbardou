<script setup>
import Header from './components/globals/Header.vue'
import Footer from './components/globals/Footer.vue'
import Lenis from "lenis"
import "lenis/dist/lenis.css"
import {onMounted} from "vue";

onMounted(() => {
  const lenis = new Lenis({autoRaf: true,});
  lenis.on('scroll', null);
})
</script>

<template>
  <Header v-once/>
  <main class="mt-28 min-h-screen">
    <RouterView/>
  </main>
  <Footer v-once/>
</template>