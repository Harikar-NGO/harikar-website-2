<template>
  <div>
    <Breadcrumbs class="breadcrumbs" :items="items" />
    <div class="main-wrap">
      <div class="content-wrap">
        <bids-card
          eng="this is the title english for this card"
          ara="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          kurd="هذا بللغة العربية ة انانا نحن الذين لسنا ان كنا نحن في هااااا"
          date="20/06/2022"
          deadline="12/07/2022"
          :dl="getTime('2022-06-14')"
          refNum="ITB-HD-Harikar-2022_005"
        />
      </div>
    </div>
    <ul class="legend">
      <li class="mt7">More than 7 days left</li>
      <li class="lt7">Less than 7 days left</li>
      <li class="lt3">Less than 3 days left</li>
    </ul>
  </div>
</template>

<script setup>
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

.legend {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-inline: var(--size-10);
  padding-block: var(--size-4);
  place-items: center;
}
.legend li {
  font-weight: var(--font-weight-6);
}

.mt7 {
  color: var(--blue-7);
}
.lt7 {
  color: var(--green-7);
}
.lt3 {
  color: var(--red-7);
}
@media (min-width: 700px) {
  .legend {
    flex-direction: row;
    place-content: space-around;
  }
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
