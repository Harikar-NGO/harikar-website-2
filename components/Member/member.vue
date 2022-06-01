<template>
  <div class="member" :class="{ right: right, left: left }">
    <div class="info">
      <div class="avatar">
        <img alt="{{ alt }}" :src="img" width="200" height="200" />
      </div>
      <div class="name">
        <p>
          <strong>{{ name }}</strong>
        </p>
      </div>
      <div class="title">
        <p>{{ title }}</p>
      </div>
    </div>
    <div class="desc">
      <div class="desc-text">
        <p>{{ desc }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  img: String,
  alt: String,
  name: String,
  title: String,
  desc: String,
  right: Boolean,
  left: Boolean,
});
</script>

<style scoped>
@import "./member.css";
</style>
