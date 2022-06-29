<template>
  <div
    class="card"
    :style="{ 'border-top': 'var(--border-size-3) solid ' + setColor(dl) }"
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
      <button class="button">
        <a
          :href="`https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/bids/${refNum}_announcement.pdf`"
          target="__blank"
          >Read more</a
        >
      </button>
      <button class="button">
        <a
          :href="`https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/bids/${refNum}.pdf`"
          target="__blank"
        >
          Download
        </a>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  eng: String,
  ara: String,
  kurd: String,
  date: String,
  deadline: String,
  link: String,
  dl: Number,
  refNum: String,
});
const setColor = (dl) => {
  const color =
    dl > 7
      ? "var(--blue-7)"
      : dl >= 3
      ? "var(--green-7)"
      : dl < 3 && dl > 0
      ? "var(--red-7)"
      : "var(--surface3)";
  return color;
};
</script>

<style scoped>
@import "./announcement-cards-style.css";
</style>
