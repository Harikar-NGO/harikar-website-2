<template>
  <button>
    {{ text }}
    <span><SendIcon color="var(--gray-3)" h="16" width="16" /></span>
  </button>
</template>

<script setup>
import SendIcon from "../Icons/SendIcon.vue";

const props = defineProps({
  text: String,
  btype: String,
  link: String,
});
</script>

<style scoped>
button {
  font-size: var(--font-size-0);
  padding-inline: var(--size-fluid-2);
  padding-block: var(--size-fluid-1);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-3);
  background: var(--brand);
  color: var(--gray-1);
  font-weight: var(--font-weight-6);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: var(--size-3);
}

button:hover {
  transform: scale(1.1);
}
</style>
