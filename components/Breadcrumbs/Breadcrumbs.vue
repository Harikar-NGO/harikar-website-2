<template>
  <ul class="breadcrumb">
    <li v-for="item in items" :key="item.name">
      <a
        :class="{ disabled: item.disabled }"
        :href="item.link ? item.link : ''"
        >{{ item.name }}</a
      >
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  items: Array,
});
</script>

<style scoped>
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li + li:before {
  padding: 8px;
  color: var(--text2);
  content: "/\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: var(--brand);
  text-decoration: none;
  text-transform: capitalize;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
  text-decoration: underline;
}

.disabled {
  color: currentColor;
  cursor: not-allowed;
  opacity: 0.5;
  text-decoration: none;
}
</style>
