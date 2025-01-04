<script setup lang="ts">

defineProps({
  src: {
    type: [Object, String],
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  }
});

</script>

<template v-once>
  <img :width="width" :height="height" loading="lazy" :alt="alt" :src="src"/>
</template>
