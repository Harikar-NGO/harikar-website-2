<template>
  <div>
    <Breadcrumbs class="breadcrumbs" :items="items" />
    <div class="main-wrap">
      <div class="content-wrap">
        <bids-card />
        <bids-card />
        <bids-card />
        <bids-card />
        <bids-card />
      </div>
    </div>
  </div>
</template>

<script setup>
/* const { data: bids } = await useFetch(
 *   "https://harikar-reports-api.herokuapp.com/v2/policies"
 * ); */

import BidsCard from "~/components/Cards/BidsCard";
const items = [
  {
    name: "home",
    link: "/",
    disabled: false,
  },
  {
    name: "Announcements",
    disabled: true,
  },
  {
    name: "Bids",
    disabled: true,
  },
];
</script>

<style scoped>
.main-wrap {
  padding-block-start: var(--size-8);
  padding-block-end: var(--size-12);
  padding-inline: var(--size-4);
}
.content-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--size-14), 1fr));
  place-content: space-around;
  gap: var(--size-4);
}

@media (min-width: 950px) {
  .main-wrap {
    padding-inline: var(--size-12);
    gap: var(--size-10);
  }
  .breadcrumbs {
    margin-left: var(--size-8);
    margin-top: var(--size-3);
  }
}
</style>
