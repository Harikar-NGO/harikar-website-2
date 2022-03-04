<template>
  <div class="tint" :class="{ flipped: flipped }">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
        :class="{white: white, gray: gray}"
      ></path>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
   flipped: Boolean,
   white: Boolean,
   gray: Boolean,
});
</script>

<style scoped>
@import "tint.css";
</style>
