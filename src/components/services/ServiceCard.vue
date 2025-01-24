<script setup>
import Image from "@components/globals/Image.vue";

defineProps({
  service: { type: Object, required: true },
});
</script>

<template>
  <div
    class="bg-fb-interactive text-fb-text2 w-full rounded-lg border border-fb-border flex items-center justify-start flex-col gap-5 pb-2"
  >
    <Image
      height="100px"
      width="350px"
      :alt="service.name"
      :src="service.image"
      class="object-left-top object-cover h-[150px] w-full rounded-t-md"
    />
    <h4 class="font-title uppercase text-3xl">{{ service.name }}</h4>
    <ul class="w-full px-4 min-h-[100px]">
      <li :key="detail.id" v-for="detail in service.details">
        <h5 class="text-xl">- {{ detail }}</h5>
      </li>
    </ul>
    <div class="h-full w-full flex justify-between items-center px-4">
      <RouterLink
        class="bg-fb-interactive2 border-2 border-fb-border transition-all duration-300 hover:bg-fb-interactive rounded-lg text-xl md:text-2xl py-2 px-3"
        :to="service.link"
        >En savoir plus
      </RouterLink>
      <h6 class="text-xl">A partir de {{ service.price }}€/h</h6>
    </div>
  </div>
</template>

<style scoped></style>
