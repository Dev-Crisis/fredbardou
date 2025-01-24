<script setup>
import Image from "@components/globals/Image.vue";
import contactIllustration from "@assets/illustrations/contact-illustration.svg";
import { ref } from "vue";

defineProps({
  image: { type: Boolean, default: true },
});

const form = ref({ firstname: "", lastname: "", email: "", message: "" });
const msg = ref(false);

const handleSubmit = () => {
  if (
    form.value.firstname.toString().trim() === "" ||
    form.value.lastname.toString().trim() === "" ||
    form.value.email.toString().trim() === "" ||
    form.value.message === ""
  ) {
    msg.value = "Les champs doivent être complétés";
    setTimeout(() => (msg.value = false), 4000);
  } else {
    console.log("SEND FORM");
  }
};
</script>

<template>
  <section
    class="bg-fb-background2 min-h-[calc(100vh/2)] flex items-center justify-start py-12 px-6 md:p-12 flex-col gap-5"
  >
    <h3 class="font-title text-4xl lg:text-5xl xl:text-6xl">Contactez-moi</h3>
    <h4 class="lg:text-xl text-center">
      Un besoin, un information ?<br />Contactez-moi via le formulaire
      ci-dessous !
    </h4>
    <div
      :class="image ? 'justify-between' : 'justify-center'"
      class="flex items-center w-full flex-col gap-8 md:flex-row"
    >
      <Image
        :class="image ? '' : 'hidden'"
        class="md:w-[450px] xl:w-[550px] w-full md:max-w-[50%]"
        height="350px"
        width="350px"
        alt="CESU Logo"
        :src="contactIllustration"
      />
      <div
        class="flex justify-center items-center w-full md:w-1/2 flex-col gap-6"
      >
        <form
          class="grid grid-cols-2 place-items-center w-full gap-6"
          @submit.prevent="handleSubmit"
        >
          <input
            type="text"
            placeholder="Prénom"
            class="bg-fb-text2 p-4 text-fb-interactive2 rounded-md md:rounded-lg w-full"
            v-model="form.firstname"
          />
          <input
            type="text"
            placeholder="Nom"
            class="bg-fb-text2 p-4 text-fb-interactive2 rounded-md md:rounded-lg w-full"
            v-model="form.lastname"
          />
          <input
            type="text"
            placeholder="Email"
            class="col-span-2 bg-fb-text2 p-4 text-fb-interactive2 rounded-md md:rounded-lg w-full"
            v-model="form.email"
          />
          <textarea
            placeholder="Message"
            rows="8"
            v-model="form.message"
            class="resize-none col-span-2 bg-fb-text2 p-4 text-fb-interactive2 rounded-md md:rounded-lg w-full"
          ></textarea>
          <button
            type="submit"
            class="capitalize col-span-2 bg-fb-text2 p-4 text-lg font-light text-fb-interactive2 rounded-md md:rounded-lg w-full"
          >
            envoyer
          </button>
        </form>
        <Transition name="bounce">
          <div v-if="msg">{{ msg }}</div>
        </Transition>
      </div>
    </div>
  </section>
</template>
