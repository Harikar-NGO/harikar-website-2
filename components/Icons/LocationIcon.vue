<template>
  <svg id="Layer_1" viewBox="0 0 25 25" width="16" height="16">
    <title>Location Pin</title>
    <path
      id="location-icon"
      d="M12.5,0A9.24,9.24,0,0,0,3,9.41c0,7.88,8.8,15.17,9.17,15.47a.5.5,0,0,0,.65,0C13.21,24.53,22,16.51,22,9.41A9.24,9.24,0,0,0,12.5,0Zm0,14A4.5,4.5,0,1,1,17,9.5,4.5,4.5,0,0,1,12.5,14Z"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  color: String,
});
</script>

<style scoped>
#location-icon {
  fill: v-bind(color);
}
</style>
