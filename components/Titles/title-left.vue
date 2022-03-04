<template>
  <div class="title title-left">
    <h2>{{ props.title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style scoped>
@import "./title.css";
</style>
