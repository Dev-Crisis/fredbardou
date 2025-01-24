<script setup>
import cesuIllustration from "@assets/illustrations/cesu-illustration.svg";
import cesu from "@assets/images/cesu.webp";
import cesu2 from "@assets/images/cesu-2.webp";
import cesu3 from "@assets/images/cesu-3.webp";
import Image from "@components/globals/Image.vue";
import CTA from "@components/globals/CTA.vue";
</script>

<template>
  <section
    class="px-5 lg:px-12 grid grid-cols-1 place-items-center lg:grid-cols-2 gap-16 min-h-[75vh]"
  >
    <div class="flex items-start justify-center flex-col gap-5">
      <h1 class="text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl">CESU</h1>
      <h2 class="uppercase text-lg md:text-xl lg:text-3xl">
        le Chèque Emploi Service UniverseL
      </h2>
    </div>
    <Image
      height="350px"
      width="350px"
      alt="Personne utilisant le CESU"
      class="md:w-[500px] xl:w-[600px]"
      :src="cesuIllustration"
    />
  </section>
  <section
    class="bg-fb-background flex items-center justify-start py-12 flex-col gap-12 w-full"
  >
    <div
      class="w-full flex items-center justify-center flex-wrap md:justify-between gap-16 p-6 md:p-24"
    >
      <div
        class="order-2 md:order-1 flex items-start justify-center flex-col gap-5 w-full md:w-[45%]"
      >
        <h3 class="font-title text-3xl xl:text-5xl">
          Le CESU, ou Chèque Emploi Service Universel
        </h3>
        <p class="text-xl md:text-2xl">
          Est une façon simple pour les particuliers de payer quelqu’un pour un
          travail à domicile tout en respectant la loi. Comment ça marche ?
          <br />Pour qui ?<br />
          C’est pour les particuliers qui veulent embaucher quelqu’un pour des
          services à la maison, comme du ménage, du jardinage, de la garde
          d’enfants ou de l’aide à une personne âgée.
          <br />Pourquoi l’utiliser ?<br />
          Avec le CESU, on déclare facilement la personne qu’on embauche, ce qui
          permet qu’elle soit couverte (assurance, retraite, etc.), et on peut
          bénéficier d’aides ou de réductions d’impôts.
          <br />Comment on l’utilise ?<br />
          On s’inscrit sur le site de l’Urssaf ou on utilise un chéquier CESU
          spécial. À chaque fois qu’on paie quelqu’un, on déclare son salaire en
          ligne. L’Urssaf s’occupe de calculer et de prélever les cotisations
          sociales.
        </p>
      </div>
      <Image
        height="350px"
        width="350px"
        class="order-1 md:order-2 md:w-[500px] xl:w-[600px] aspect-4/3 object-cover rounded-lg w-full md:max-w-[45%]"
        alt="CESU"
        :src="cesu"
      />
    </div>
    <div
      class="w-full flex items-center justify-center flex-wrap md:justify-between gap-16 p-6 md:p-24"
    >
      <Image
        height="350px"
        width="350px"
        class="md:w-[500px] xl:w-[600px] aspect-4/3 object-cover rounded-lg w-full md:max-w-[45%]"
        alt="CESU"
        :src="cesu2"
      />
      <div
        class="flex items-start justify-center flex-col gap-5 w-full md:w-[45%]"
      >
        <h3 class="font-title text-3xl xl:text-5xl">Pourquoi c’est bien ?</h3>
        <p class="text-xl md:text-2xl">
          Simple : Tout se fait en ligne ou avec le chéquier.<br />
          Légal : Toutes les actions menées restent encadrées par la loi.
          <br /><br />
          Avantages fiscaux : Une partie des dépenses peut être remboursée sous
          forme de crédit d’impôt.
          <br /><br />
          C’est donc une solution pratique pour avoir de l’aide chez soi tout en
          facilitant les démarches administratives !
        </p>
      </div>
    </div>
    <div
      class="w-full flex items-center justify-center flex-wrap md:justify-between gap-16 p-6 md:p-24"
    >
      <div
        class="order-2 md:order-1 flex items-start justify-center flex-col gap-5 w-full md:w-[45%]"
      >
        <h3 class="font-title text-3xl xl:text-5xl">Simple & Rapide</h3>
        <p class="text-xl md:text-2xl">
          Créer un compte CESU est simple et rapide. Il suffit de se rendre sur
          le site officiel du CESU (<a
            class="underline"
            href="https://cesu.urssaf.fr"
            target="_blank"
            >cesu.urssaf.fr</a
          >) et de cliquer sur "Créer un compte". Vous devrez fournir quelques
          informations personnelles comme votre nom, votre adresse, votre numéro
          de Sécurité sociale, et une adresse e-mail. Une fois ces informations
          remplies, vous recevrez un e-mail pour confirmer votre inscription.
          Après validation, vous pourrez accéder à votre espace personnel pour
          déclarer vos salariés, gérer les paiements et suivre vos déclarations.
          Tout est centralisé, ce qui rend les démarches accessibles à tous.
        </p>
      </div>
      <Image
        height="350px"
        width="350px"
        class="order-1 md:order-2 md:w-[500px] xl:w-[600px] aspect-4/3 object-cover rounded-lg w-full md:max-w-[45%]"
        alt="CESU"
        :src="cesu3"
      />
    </div>
  </section>
  <CTA />
</template>

<style scoped></style>
