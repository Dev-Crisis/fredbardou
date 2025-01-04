<script setup>

import {useHead} from "@vueuse/head";
import {onBeforeMount} from "vue";
import Image from "@components/globals/Image.vue";
import gardenIllustration from '@assets/illustrations/garden-illustration.svg';
import garden from '@assets/images/garden.webp';
import hands from '@assets/images/hands.webp';
import pool from '@assets/images/pool.webp';
import car from '@assets/images/car.webp';
import ServiceCard from "@components/services/ServiceCard.vue";

const services = [
  {
    id: 1,
    name: "Jardinier",
    price: 15,
    image: garden,
    details: ['Tonte de gazon', 'Création de potager', 'Rempotage', 'Taillage de haie (<2m)'],
    link: "/services#jardinier"
  },
  {
    id: 2,
    name: "Service à domicile",
    price: 12,
    image: hands,
    details: ['Pharmacie', 'Courses', 'Rempotage', 'Récupérer/Déposer un colis'],
    link: "/services#service-a-domicile"
  }
]

const extras = [
  {
    id: 1,
    name: "Entretien Piscine",
    price: 20,
    image: pool,
    details: ['Tonte de gazon', 'Création de potager', 'Rempotage', 'Taillage de haie (<2m)'],
    link: "/services#jardinier"
  },
  {
    id: 2,
    name: "Entretien Auto",
    price: 20,
    image: car,
    details: ['Pharmacie', 'Courses', 'Rempotage', 'Récupérer/Déposer un colis'],
    link: "/services#service-a-domicile"
  }
]

onBeforeMount(() => {
  useHead({
    title: 'Frédéric Bardou | Service à domicile',
    meta: [
      {
        name: "description",
        content: "Frédéric Bardou, jardinier/paysagiste, service à domicile, petits bricolage, entretien auto, entretien piscine sur Rivesaltes"
      },
    ]
  })
});


</script>

<template>
  <section class="px-5 pb-6 flex items-center justify-center flex-col gap-16">
    <div class="flex items-start justify-center flex-col gap-5">
      <h1 class="text-6xl">Frédéric Bardou</h1>
      <h2 class="uppercase text-[15px]">Jardinier | service à domicile | petit bricolage</h2>
    </div>
    <Image height="350px" width="350px" alt="Personne paisible" :src="gardenIllustration"/>
  </section>
  <section class="bg-fbBackground min-h-[calc(100vh/2)] flex items-center justify-start py-12 flex-col gap-12">
    <h3 class="font-title text-5xl">Services</h3>
    <div class="grid grid-cols-1 w-full place-items-center gap-12">
      <ServiceCard v-for="service in services" :key="service.id" :service="service" />
    </div>
  </section>
</template>

<style scoped>

</style>