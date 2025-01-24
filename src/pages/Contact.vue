<script setup>
import contactIllustration from "@assets/illustrations/contact-2-illustration.svg";
import Image from "@components/globals/Image.vue";
import contact from "@assets/images/contact.webp";
import CTA from "@components/globals/CTA.vue";
</script>

<template>
  <section class="px-5 lg:px-12 grid grid-cols-1 place-items-center lg:grid-cols-2 gap-16 min-h-[75vh]">
    <div class="flex items-start justify-center flex-col gap-5">
      <h1 class="text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl">Contact</h1>
      <h2 class="uppercase text-lg md:text-xl lg:text-3xl">contactez-moi en cas de besoin</h2>
    </div>
    <Image height="350px" width="350px" alt="Personne paisible" class="md:w-[500px] xl:w-[600px]"
           :src="contactIllustration"/>
  </section>
  <section
      class="bg-fb-background w-full flex items-center justify-center flex-wrap md:justify-between gap-16 p-6 md:p-24">
    <Image height="350px" width="350px"
           class="md:w-[500px] xl:w-[600px] aspect-4/3 object-cover rounded-lg w-full md:max-w-[45%]"
           alt="CESU"
           :src="contact"/>
    <div class="flex items-start justify-center flex-col gap-5 w-full md:w-[45%]">
      <h3 class="font-title text-4xl xl:text-6xl">Au Téléphone ?</h3>
      <p class="text-xl md:text-2xl">
        Vous pouvez me joindre au numéro suivant : <a href="tel:0601058878" class="underline">06 01 05 88 78</a><br>
        Je ne transporte pas à grande échelle (pas de terre, terreau<br> ou autre produits nécessitant une remorque).
      </p>
    </div>
  </section>
  <CTA :image="false"/>
</template>

<style scoped>

</style>