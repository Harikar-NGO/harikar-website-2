<template>
  <div class="article-card">
    <figure>
      <img
        :src="img"
        alt="img"
        :width="feed ? 300 : 350"
        :height="feed ? 200 : 250"
      />
    </figure>
    <div class="text">
      <p class="title">
        {{ title }}
      </p>
      <p class="desc">{{ desc }}</p>
      <p>
        {{ date }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.article-card {
  display: grid;
  place-items: center;
  place-content: center;
  gap: var(--size-2);
}
.img {
  width: 100%;
  height: auto;
}

.text {
  display: grid;
  gap: var(--size-1);
}

.title {
  max-width: 33ch;
  color: var(--brand);
}
.article-card:hover .title {
  --brand: hsl(226 80% 20% / 1);
  color: var(--brand);
}
.desc {
  max-width: 32ch;
  min-width: 32ch;
  justify-self: start;
}

.date {
  justify-self: start;
  align-self: end;
  max-width: max-content;
}
</style>

<script setup>
const props = defineProps({
  img: String,
  title: String,
  desc: String,
  date: String,
  feed: Boolean,
});
</script>
