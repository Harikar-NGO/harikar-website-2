<template>
  <div>
    <Breadcrumbs class="breadcrumbs" :items="items" />
    <div class="main-wrap">
      <div class="content-wrap">
        <JobsCard
          title=" International Consultant"
          project="Enhance justice for children services and system in Duhok and Erbil governorates KR_IRAQ"
          vacancies="1"
          projectArea="Duhok and Erbil"
          residence="International"
          gender="Both"
          typeOfContract="Part Time"
          starting="1st May 2022"
          deadline="14th April 2022"
          :dl="getTime('2022-04-14')"
        >
        </JobsCard>
      </div>
    </div>
  </div>
</template>

<script setup>
/* const { data: bids } = await useFetch(
 *   "https://harikar-reports-api.herokuapp.com/v2/policies"
 * ); */

import JobsCard from "~/components/Cards/JobsCard";
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
    name: "Job opportunities",
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
