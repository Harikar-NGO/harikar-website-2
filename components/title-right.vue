<template>
  <div class="title">
    <h2>{{ props.title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style scoped>
.title {
  display: grid;
}
.title h2 {
  font-size: var(--font-size-fluid-2);
  text-shadow: 0 1px 0 var(--brand);
  color: var(--brand);
}
@media (min-width: 850px) {
  .title {
    place-items: start;
    position: relative;
  }
  h2 {
    width: 5ch;
    z-index: var(--layer-3);
  }
  .title::before {
    content: "";
    position: absolute;
    top: -4em;
    right: -5em;
    background-image: var(--gradient-29);
    width: 15em;
    height: 15em;
    transform: rotate(42deg);
    z-index: var(--layer-2);
    border-radius: var(--radius-3);
  }
  .title::after {
    content: "";
    position: absolute;
    top: -5em;
    right: -6em;
    border: var(--border-size-1) solid var(--brand);
    border-radius: var(--radius-3);
    width: 17em;
    height: 17em;
    transform: rotate(48deg);
    z-index: var(--layer-2);
  }
}
</style>
