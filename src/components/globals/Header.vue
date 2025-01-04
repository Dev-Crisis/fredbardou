<script setup>

import {ref} from "vue";
import {X, AlignJustify} from "lucide-vue-next";
import Image from "./Image.vue";
import logo from '@assets/logo.svg'

const isOpen = ref(false);

const toggleMenuState = () => {
  isOpen.value = !isOpen.value;
  document.body.style.overflowY = isOpen.value ? "hidden" : "";
}

</script>
<template>
  <header class="fixed w-full bg-fbInteractive shadow-lg p-2">
    <div class="flex w-full justify-between items-center px-5">
      <Image height="60px" width="44px" alt="Logo de Frédéric Bardou" :src="logo"/>
      <AlignJustify :size="36" @click.passive="toggleMenuState"/>
    </div>
    <nav class="bg-fbBackground absolute min-h-screen top-0 -left-full transition-all duration-300 w-full flex items-center justify-center"
         :class="isOpen ? '!left-0 z-10' : ''">
      <X :size="36" @click.passive="toggleMenuState"/>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/cesu">CESU</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>
</template>