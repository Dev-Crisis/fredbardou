<script setup>

import {useHead} from "@vueuse/head";
import {onBeforeMount} from "vue";
import Image from "@components/globals/Image.vue";
import gardenIllustration from '@assets/illustrations/garden-illustration.svg';
import garden from '@assets/images/garden.webp';
import hands from '@assets/images/hands.webp';
import tools from '@assets/images/tools.webp';
import pool from '@assets/images/pool.webp';
import car from '@assets/images/car.webp';
import CESU from '@assets/images/cesu-logo.webp'
import ServiceCard from "@components/services/ServiceCard.vue";
import CTA from "@components/globals/CTA.vue";

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
    details: ['Pharmacie', 'Courses', 'Récupérer/Déposer un colis'],
    link: "/services#service-a-domicile"
  },
  {
    id: 3,
    name: "Petits Bricolage",
    price: 12,
    image: tools,
    details: ['Pose de tringle à rideaux', 'Petits travaux de peintures', 'Montage de meubles'],
    link: "/services#petits-bricolage"
  }
]

const extras = [
  {
    id: 1,
    name: "Entretien Piscine",
    price: 20,
    image: pool,
    details: ['Passage du balai de fond', 'Remplacement des produits présents', 'Nettoyage de la ligne d’eau', 'Remplissage de la piscine'],
    link: "/services#entretien-piscine"
  },
  {
    id: 2,
    name: "Entretien Auto",
    price: 20,
    image: car,
    details: ['Passage de l’aspirateur (moquette & sièges)', 'Nettoyage de la carrosserie à la main sans eau (toutes carrosseries)', 'Rénovation des phares et des plastiques intérieur & extérieur', 'Lavage du plafonnier'],
    link: "/services#entretien-auto"
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
  <section class="px-5 lg:px-12 grid grid-cols-1 place-items-center lg:grid-cols-2 gap-16 min-h-[75vh]">
    <div class="flex items-start justify-center flex-col gap-5">
      <h1 class="text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl">Frédéric Bardou</h1>
      <h2 class="uppercase text-lg md:text-xl lg:text-3xl">simplifiez-vous la vie quotidienne</h2>
    </div>
    <Image :lazy="false" height="350px" width="350px" alt="Personne paisible" class="md:w-[500px] xl:w-[600px]"
           :src="gardenIllustration"/>
  </section>
  <section
      class="bg-fbBackground flex items-center justify-start py-12 px-6 md:p-12 flex-col gap-12">
    <h3 class="font-title text-5xl xl:text-6xl">Services</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-stretch gap-12 max-w-[1500px]">
      <ServiceCard v-for="service in services" :key="service.id" :service="service"/>
    </div>
  </section>
  <section
      class="bg-fbBackground2 flex items-center justify-start py-12 px-6 md:p-12 flex-col gap-12">
    <h3 class="font-title text-5xl xl:text-6xl">Extras</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 w-full place-items-center gap-12 max-w-[1500px]">
      <ServiceCard v-for="extra in extras" :key="extra.id" :service="extra"/>
    </div>
  </section>
  <section class="bg-fbBackground flex items-center justify-start py-12 flex-col gap-5">
    <h3 class="font-title text-5xl xl:text-6xl">Le CESU</h3>
    <h4 class="lg:text-xl">Le CESU c'est quoi</h4>
    <div class="grid grid-col-1 place-items-center lg:grid-cols-2 p-6 gap-6">
      <div class="flex items-start justify-center gap-6 flex-col">
        <h5 class="text-3xl md:text-4xl xl:text-5xl uppercase font-title">Un service simple </h5>
        <p class="text-lg lg:text-xl">Le CESU (Chèque Emploi Service Universel) est une solution simple et pratique pour
          rémunérer et déclarer les
          services à domicile, y compris pour des activités liées à l’entretien des jardins, aux petits travaux de
          bricolage ou à l’aide quotidienne. Si vous êtes à la recherche de services comme le taillage de haies, la
          tonte de gazon, le rempotage, l’entretien de votre potager, ou encore des petits travaux de bricolage tels que
          la pose de tringle à rideaux, peinture, ou des réparations simples, le CESU est un moyen facile pour faire
          appel à des professionnels tout en bénéficiant d’avantages fiscaux.
        </p>
        <p class="text-lg lg:text-xl">
          Grâce au CESU, vous pouvez rémunérer votre prestataire de manière totalement sécurisée et déclarer simplement
          son travail. Vous profitez ainsi de réductions fiscales (crédit ou réduction d’impôt) et d’une couverture
          sociale pour les salariés à domicile, ce qui garantit leur protection et la vôtre. Ce dispositif vous permet
          également de déclarer de manière simplifiée les services de courses, récupération de médicaments ou autres
          tâches de la vie quotidienne, tout en réduisant la charge administrative.
          Utiliser le CESU pour des services comme l’entretien de votre jardin, les petits travaux de bricolage, ou même
          l’aide à domicile, c’est non seulement simplifier votre gestion mais aussi bénéficier d’une solution adaptée,
          sécurisée et avantageuse.
        </p>
        <RouterLink
            class="bg-fbInteractive2 transition-all duration-300 border-2 border-fbBorder hover:bg-fbInteractive rounded-lg text-2xl py-2 px-3"
            to="/cesu">En savoir plus
        </RouterLink>
      </div>
      <Image height="350px" width="350px" class="md:w-[450px] xl:w-[550px]" alt="CESU Logo" :src="CESU"/>
    </div>
  </section>
  <CTA/>
</template>

<style scoped>

</style>