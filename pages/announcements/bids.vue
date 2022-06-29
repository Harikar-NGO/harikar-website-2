<template>
  <div>
    <Breadcrumbs class="breadcrumbs" :items="items" />
    <div class="main-wrap">
      <div class="content-wrap">
        <bids-card
          eng="this is the title english for this card"
          ara="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          kurd="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          data="20/06/2022"
          deadline="12/07/2022"
          :dl="getTime('2022-07-12')"
        />
        <bids-card
          eng="this is the title english for this card Lectus sit amet est placerat in egestas erat imperdiet sed."
          ara="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          kurd="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          data="20/06/2022"
          deadline="12/07/2022"
          :dl="getTime('2022-07-05')"
        />
        <bids-card
          eng="this is the title english for this card"
          ara="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          kurd="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          data="20/06/2022"
          deadline="12/07/2022"
          :dl="getTime('2022-06-30')"
        />
        <bids-card
          eng="this is the title english for this card Lectus sit amet est placerat in egestas erat imperdiet sed."
          ara="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          kurd="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          data="20/06/2022"
          deadline="12/07/2022"
          :dl="getTime('2022-07-12')"
        />
        <bids-card
          eng="this is the title english for this card Amet, dictum sit amet justo donec enim diam, vulputate ut pharetra sit amet, aliquam id diam maecenas ultricies mi eget mauris. Donec massa sapien, faucibus et molestie ac, feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare."
          ara="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          kurd="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          data="20/06/2022"
          deadline="12/07/2022"
          :dl="getTime('2022-07-12')"
        />
        <bids-card
          eng="this is the title english for this card Lectus sit amet est placerat in egestas erat imperdiet sed."
          ara="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          kurd="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          data="20/06/2022"
          deadline="12/07/2022"
          :dl="getTime('2022-07-12')"
        />
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
const getTime = (dl) => {
  const currentDate = new Date();
  const deadLine = new Date(dl);
  deadLine.setHours(deadLine.getHours() + 15);
  deadLine.setMinutes(deadLine.getMinutes() + 30);
  deadLine.setSeconds(deadLine.getSeconds() + 59);
  deadLine.setMilliseconds(deadLine.getMilliseconds() + 59);
  const difference = deadLine.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(difference / (1000 * 3600 * 24));
  return daysLeft;
};
</script>

<style scoped>
.main-wrap {
  padding-block-start: var(--size-8);
  padding-block-end: var(--size-12);
  padding-inline: var(--size-4);
}
.content-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--size-14), 1fr));
  grid-template-rows: masonry;
  align-items: start;
  masonry-auto-flow: next;
  gap: var(--size-3);
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
