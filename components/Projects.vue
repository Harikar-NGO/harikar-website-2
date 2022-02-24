<template>
  <div class="main-wrap">
    <div class="section-title">
      <h2>Our Projects</h2>
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
  </div>
</template>

<style scoped>
.main-wrap {
  padding-block: var(--size-4);
  display: grid;
  grid-template:
    "title" 0.5fr
    "content" 2fr / 1fr;

  place-items: center;
  background: var(--gray-2);
}

@media (min-width: 850px) {
  .main-wrap {
    grid-template: "content title" / 2fr 1fr;
    padding-block: var(--size-10);
  }
}
.section-title {
  grid-area: title;
  display: grid;
  margin-inline: var(--size-8);
}
.section-title h2 {
  font-size: var(--font-size-fluid-2);
  color: var(--brand);
}
@media (min-width: 850px) {
  .section-title {
    background-image: var(--gradient-29);
    border: var(--border-size-1) solid var(--gray-3);
    border-radius: var(--radius-blob-4);
    box-shadow: var(--shadow-2);
    place-items: start;
  }
  .section-title h2 {
    padding-block: var(--size-11);
    padding-inline: var(--size-7);
  }
}
.container {
  grid-area: content;
  overflow-x: hidden;
  max-width: 100%;
}
.media-scroller {
  --_spacer: var(--size-3);
  display: grid;
  grid-auto-flow: column;
  gap: var(--_spacer);
  grid-auto-columns: 12rem;
  padding-inline: var(--_spacer);
  padding-block: var(--_spacer);
  overflow-x: auto;
  overscroll-behavior-inline: contain;
}
.media-element {
  display: grid;
  grid-template-rows: min-content;
  gap: var(--_spacer);
  padding: var(--_spacer);
  background: var(--gray-0);
  border-radius: var(--radius-2);
  bax-shadow: var(--shadow-2);
}
.media-element > img {
  inline-size: 100%;
  aspct-ratio: var(--ratio-landscape);
  object-fit: cover;
}
.media-element__title {
  font-size: var(--font-size-fluid-0);
}

.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_spacer);
}
.snaps-inline > * {
  scroll-snap-align: start;
}
</style>

<script setup>
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
