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
    /* background-image: var(--gradient-29);
       border: var(--border-size-1) solid var(--gray-3);
       border-radius: var(--radius-blob-1);
       box-shadow: var(--shadow-2); */
    place-items: center;
    position: relative;
    z-index: var(--layer-3);
  }
  /* h2 {
     padding-block: var(--size-11);
     padding-inline: var(--size-8);
     } */
  h2 {
    width: 5ch;
  }
  .title::before {
    content: "";
    position: absolute;
    top: -4em;
    left: -2em;
    background-image: var(--gradient-29);
    width: 15em;
    height: 15em;
    transform: rotate(48deg);
    z-index: -1;
    border-radius: var(--radius-3);
  }
  .title::after {
    content: "";
    position: absolute;
    top: -5em;
    left: -3em;
    border: var(--border-size-1) solid var(--brand);
    border-radius: var(--radius-3);
    width: 17em;
    height: 17em;
    transform: rotate(42deg);
    z-index: -1;
  }
}
</style>
