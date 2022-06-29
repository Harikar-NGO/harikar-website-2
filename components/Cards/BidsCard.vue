<template>
  <div
    class="card"
    :style="{ 'border-top': 'var(--border-size-3) solid' + setColor(dl) }"
  >
    <div class="content">
      <p class="eng" lang="eng" dir="ltr">
        {{ eng }}
      </p>
      <p class="ara" lang="ar" dir="rtl">{{ ara }}</p>
      <p class="kurd" lang="ku" dir="rtl">
        {{ kurd }}
      </p>
    </div>
    <div class="dates">
      <p class="announcement-data">
        <span><strong>Announced at: </strong> </span>{{ date }}
      </p>
      <p class="deadline">
        <span><strong>Deadline: </strong></span>{{ deadline }}
      </p>
    </div>
    <div class="buttons">
      <button class="button">Read more</button>
      <button class="button">Download</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  eng: String,
  ara: String,
  kurd: String,
  data: String,
  deadline: String,
  link: String,
  dl: Number,
});
const setColor = (dl) => {
  const color =
    dl > 7
      ? "#2196F3"
      : dl >= 3
      ? "#4CAF50"
      : dl < 3 && dl > 0
      ? "#F44336"
      : "#424242";
  return color;
};
</script>

<style scoped>
@import "./announcement-cards-style.css";
</style>
