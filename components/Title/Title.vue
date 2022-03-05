<template>
  <div class="title" :class="{ right: right, left: left }">
    <h2>{{ props.title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  right: Boolean,
  left: Boolean,
});
</script>

<style scoped>
@import "./title.css";
</style>
