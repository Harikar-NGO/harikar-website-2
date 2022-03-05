<template>
  <div class="main-wrap surface3">
    <div class="section-title">
      <Title title="Our Projects" right />
    </div>
    <div class="container">
      <div class="media-scroller snaps-inline">
        <div
          v-for="(project, index) in currentProjects"
          :key="index"
          class="media-element"
        >
          <img
            alt="an image from the project"
            :src="getImg(project.id)"
            width="100%"
            height="auto"
          />
          <p class="media-element__title">
            {{ project.name.substr(0, 25) + "..." }}
          </p>
          <button class="media-element__btn">Learn More</button>
        </div>
      </div>
    </div>
    <Tint white />
  </div>
</template>

<script setup>
import Tint from "../Shapes/Tint.vue";
const getImg = (id) => {
  return `https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/projects/project-${id}.webp`;
};
const {
  data: {
    value: { projects },
  },
} = await useFetch("https://harikar-reports-api.herokuapp.com/v2/projects");
const currentProjects = projects.filter((item) => item.state === "onGoing");
</script>

<style scoped>
@import "./projects.css";
</style>
