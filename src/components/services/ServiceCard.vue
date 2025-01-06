<script setup>

import Image from "@components/globals/Image.vue";

defineProps({
  service: {type: Object, required: true},
})
</script>

<template>

  <div
      class="bg-fbInteractive text-fbText2 w-full rounded-lg h-[450px] border border-fbBorder flex items-center justify-start flex-col gap-5">
    <Image height="100px" width="350px" :alt="service.name" :src="service.image"
           class="object-left-top object-cover h-[150px] w-full rounded-t-md"/>
    <h4 class="font-title uppercase text-3xl">{{ service.name }}</h4>
    <ul class="w-full px-4">
      <li :key="detail.id" v-for="detail in service.details">
        <h5 class="text-xl">- {{ detail }}</h5>
      </li>
    </ul>
    <div class="h-full w-full flex justify-between items-center px-4">
      <RouterLink class="bg-fbInteractive2 border-2 border-fbBorder transition-all duration-300 hover:bg-fbInteractive rounded-lg text-xl md:text-2xl py-2 px-3" :to="service.link">En savoir plus
      </RouterLink>
      <h6 class="text-xl">A partir de {{ service.price }}€/h</h6>
    </div>
  </div>
</template>

<style scoped>

</style>