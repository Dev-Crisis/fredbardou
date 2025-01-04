<script setup>

import {onMounted} from "vue";
import {useHead} from "@vueuse/head";

onMounted(() => {
  useHead({
    title: 'Frédéric Bardou | Service à domicile'
  })
});
</script>

<template>
  <h1 class="text-8xl font-title">Accueil Test</h1>
</template>

<style scoped>

</style>