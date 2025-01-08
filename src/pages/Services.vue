<script setup>

import {onMounted} from "vue";
import {useHead} from "@vueuse/head";
import servicesIllustration from "@assets/illustrations/services-illustration.svg";
import Image from "@components/globals/Image.vue";
import garden from "@assets/images/garden.webp";
import hands from "@assets/images/hands.webp";
import tools from "@assets/images/tools.webp";
import pool from "@assets/images/pool.webp";
import car from "@assets/images/car.webp";
import CTA from "@components/globals/CTA.vue";

const services = [
  {
    id: 1,
    name: "Jardinier",
    price: 15,
    image: garden,
    preDetails: "En tant que jardinier/paysagiste, je propose les services suivants : ",
    details: ['Tonte de gazon', 'Création de potager', 'Rempotage', 'Taillage de haie (<2m)'],
    link: "/services#jardinier"
  },
  {
    id: 2,
    name: "Service à domicile",
    price: 12,
    preDetails: "Concernant le service à domicile, je propose les services suivants : ",
    image: hands,
    details: ['Pharmacie', 'Courses', 'Récupérer/Déposer un colis'],
    link: "#service-a-domicile"
  },
  {
    id: 3,
    name: "Petits Bricolage",
    price: 12,
    preDetails: "Pour les petits bricolage, je propose les services suivants : ",
    image: tools,
    details: ['Pose de tringle à rideaux', 'Petits travaux de peintures', 'Montage de meubles'],
    link: "petits-bricolage"
  },
  {
    id: 4,
    name: "Entretien Piscine",
    price: 20,
    preDetails: "Pour l’entretien piscine, je propose les services suivants : ",
    image: pool,
    details: ['Passage du balai de fond', 'Remplacement des produits présents', 'Nettoyage de la ligne d’eau', 'Remplissage de la piscine'],
    link: "entretien-piscine"
  },
  {
    id: 5,
    name: "Entretien Auto",
    price: 20,
    preDetails: "Pour le nettoyage auto, je propose les services suivants : ",
    image: car,
    details: ['Passage de l’aspirateur (moquette & sièges)', 'Nettoyage de la carrosserie à la main sans eau (toutes carrosseries)', 'Rénovation des phares et des plastiques intérieur & extérieur', 'Lavage du plafonnier'],
    link: "entretien-auto"
  }
]

onMounted(() => {
  useHead({
    title: 'Frédéric Bardou | Service à domicile - Services',
  })
});
</script>

<template>
  <section class="px-5 lg:px-12 grid grid-cols-1 place-items-center lg:grid-cols-2 gap-16 min-h-[75vh]">
    <div class="flex items-start justify-center flex-col gap-5">
      <h1 class="text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl">Services</h1>
      <h2 class="uppercase text-lg md:text-xl lg:text-3xl">Jardinier | service à domicile | petits bricolage</h2>
    </div>
    <Image height="350px" width="350px" alt="Personne utilisant les services" class="md:w-[500px] xl:w-[600px]"
           :src="servicesIllustration"/>
  </section>
  <section
      class="bg-fbBackground flex items-center justify-start py-12 flex-col gap-12 w-full">
    <div class="w-full flex items-center justify-center flex-wrap md:justify-between gap-16 p-6 md:p-24"
         v-for="service in services" :class="service.id % 2 ? 'bg-fbBackground' : 'bg-fbBackground2'"
         :id="service.link">
      <div class="flex items-start justify-center flex-col gap-5"
           :class="service.id % 2 ? 'order-1 md:order-2' : 'order-1 md:order-1'">
        <h3 class="text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl">{{ service.name }}</h3>
        <h4 class="text-lg md:text-xl lg:text-3xl text-left">{{ service.preDetails }}</h4>
        <ul class="text-lg md:text-xl lg:text-3xl text-left">
          <li v-for="detail in service.details" :key="detail.id">
            <p>- {{ detail }}</p>
          </li>
        </ul>
        <h5 class="text-lg md:text-xl lg:text-3xl text-center md:text-left">Tarif : {{ service.price }}€/h</h5>
      </div>
      <Image height="350px" width="350px" :alt="service.name"
             class="md:w-[500px] xl:w-[600px] aspect-[4/3] object-cover rounded-lg"
             :class="service.id % 2 ? 'order-2 md:order-1' : 'order-2 md:order-2'" :src="service.image"/>
    </div>
  </section>
  <CTA/>
</template>

<style scoped>

</style>