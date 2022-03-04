<template>
  <div class="title title-right">
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
