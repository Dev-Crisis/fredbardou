<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const counter = ref(5);
onMounted(() => {
  setInterval(() => {
    if (counter.value === 0) {
      router.replace("/");
    } else {
      counter.value--;
    }
  }, 1000);
});
</script>
<template>
  <section class="flex justify-center items-center flex-col gap-6 p-6">
    <h1 class="text-4xl xl:text-8xl text-center">Page non trouvé</h1>
    <h2 class="text-2xl xl:text-5xl text-center">
      Redirection vers la page d'accueil dans
      <span ref="counter-text">{{ counter }}</span
      >s
    </h2>
  </section>
</template>
