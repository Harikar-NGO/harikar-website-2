<template>
  <div
    class="card"
    :style="{ 'border-top': 'var(--border-size-3) solid' + setColor(dl) }"
  >
    <div class="content">
      <p class="title">
        {{ title }}
      </p>
      <p>
        <span><strong>Project name: </strong></span> {{ project }}
      </p>
      <p>
        <span><strong>Number of vacancies: </strong></span>{{ vacancies }}
      </p>
      <p>
        <span><strong>Project area: </strong></span>{{ projectArea }}
      </p>
      <p>
        <span><strong>Applicant's residence: </strong></span>{{ residence }}
      </p>
      <p>
        <span><strong>Preferable gender: </strong></span>{{ gender }}
      </p>
      <p>
        <span><strong>Type of contract: </strong></span> {{ typeOfContract }}
      </p>
    </div>
    <div class="dates">
      <p class="announcement-data">
        <span><strong>Expected starting date: </strong> </span>{{ starting }}
      </p>
      <p class="deadline">
        <span><strong>Deadline: </strong></span>{{ deadline }}
      </p>
    </div>
    <div class="buttons">
      <button class="button">Read more</button>
      <button v-if="dl > 0" class="button">Apply</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  project: String,
  vacancies: String,
  projectArea: String,
  residence: String,
  gender: String,
  typeOfContract: String,
  starting: String,
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
