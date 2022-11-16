<template>
  <div class="main-wrap surface3">
    <div class="section-title">
      <Title title="Our Projects" right />
    </div>
    <div class="container">
      <div class="media-scroller snaps-inline">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="media-element"
        >
          <img
            loading="lazy"
            alt="an image from the project"
            :src="getImg(project.id)"
            width="208"
            height="125"
          />
          <p class="media-element__title">
            {{ project.name.substr(0, 80) + "..." }}
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

const { data: projects } = await useFetch(
  "https://harikar-reports-api.cyclic.app/v2/projectsmini"
);

const getImg = (id) => {
  return `https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/projects/project-${id}.webp`;
};
</script>

<style scoped>
@import "./projects.css";
</style>
