<template>
  <div class="main-wrap">
    <div class="section-title">
      <title-left title="About us" />
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

<style scoped>
.main-wrap {
  padding-block: var(--size-10);
  display: grid;
  grid-template:
    "title" 0.2fr
    "content" 2fr / 1fr;

  place-items: center;
  background: var(--gray-0);
}
@media (min-width: 850px) {
  .main-wrap {
    grid-template: "title content" / 1fr 2fr;
    padding-top: var(--size-12);
    padding-bottom: var(--size-11);
    gap: var(--size-8);
  }
}

.title {
  grid-area: section-title;
}

.content {
  grid-area: content;
  padding: var(--size-6);
  display: flex;
  flex-direction: column;
  gap: var(--size-5);
  justify-items: center;
}
.content-title {
  font-size: var(--font-size-fluid-1);
  font-weight: var(--font-weight-6);
  max-inline-size: var(--size-content-2);
}
.stats {
  display: flex;
  align-item: center;
  justify-content: space-around;
}
.stats-item {
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  gap: var(--size-6);
}
.stats-item--title {
  font-size: var(--font-size-fluid-1);
  align-self: center;
  font-weight: var(--font-weight-6);
  text-transform: capitalize;
  position: relative;
}
.stats-item--title:before {
  content: "";
  position: absolute;
  top: -1.2rem;
  left: 25%;
  right: 0;
  border-top: var(--border-size-3) solid var(--brand);
  width: 50%;
  border-radius: var(--radius-2);
}
.stats-item--value {
  font-size: var(--font-size-fluid-2);
  font-weight: var(--font-weight-7);
  align-self: center;
}
</style>

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
