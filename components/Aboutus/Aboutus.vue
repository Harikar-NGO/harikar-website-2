<template>
  <div class="main-wrap surface1">
    <div class="section-title">
      <Title title="About us" left />
    </div>
    <div class="content">
      <p class="content-title">
        Through our large capacity we dare to say we are different.
      </p>
      <div class="stats">
        <div class="stats-item" v-for="item in statsItems" :key="item.index">
          <p class="stats-item--value">{{ item.value }}</p>
          <p class="stats-item--title">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const statsItems = [
  {
    title: "emplyees",
    value: "+500",
  },
  {
    title: "projects",
    value: "8",
  },
  {
    title: "partners",
    value: "13",
  },
];
</script>

<style scoped>
@import "./aboutus.css";
</style>
