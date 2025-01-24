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
  <header class="fixed w-full bg-fb-interactive shadow-lg p-2">
    <nav class="hidden md:flex justify-center items-center gap-12">
      <RouterLink class="text-xl" @click.passive="toggleMenuState" to="/">Accueil</RouterLink>
      <RouterLink class="text-xl" @click.passive="toggleMenuState" to="/services">Services</RouterLink>
      <RouterLink to="/"><Image height="60px" width="44px" alt="Logo de Frédéric Bardou" :src="logo"/></RouterLink>
      <RouterLink class="text-xl" @click.passive="toggleMenuState" to="/cesu">CESU</RouterLink>
      <RouterLink class="text-xl" @click.passive="toggleMenuState" to="/contact">Contact</RouterLink>
    </nav>
    <div class="flex w-full justify-between items-center px-5 md:hidden">
      <RouterLink to="/"><Image height="60px" width="44px" alt="Logo de Frédéric Bardou" :src="logo"/></RouterLink>
      <AlignJustify :size="36" @click.passive="toggleMenuState" class="md:hidden"/>
    </div>
    <nav
        class="md:hidden bg-fb-background absolute min-h-screen top-0 -left-full transition-all duration-300 w-full flex flex-col items-center justify-center"
        :class="isOpen ? 'left-0! z-10' : ''">
      <X class="absolute top-5 right-6 md:hidden" :size="36" @click.passive="toggleMenuState"/>
      <div class="flex items-start flex-col justify-center gap-5">
        <RouterLink class="text-4xl" @click.passive="toggleMenuState" to="/">Accueil</RouterLink>
        <RouterLink class="text-4xl" @click.passive="toggleMenuState" to="/services">Services</RouterLink>
        <RouterLink class="text-4xl" @click.passive="toggleMenuState" to="/cesu">CESU</RouterLink>
        <RouterLink class="text-4xl" @click.passive="toggleMenuState" to="/contact">Contact</RouterLink>
      </div>
    </nav>
  </header>
</template>