<template>
  <div class="main-wrap surface3">
    <div class="section-title">
      <title-right title="Our Projects" />
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
    <div v-if="breakPoints == 'lg'" class="tint">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.main-wrap {
  padding-block: var(--size-8);
  display: grid;
  grid-template:
    "title" 0.5fr
    "content" 2fr / 1fr;
  place-items: center;
  position: relative;
  gap: var(--size-8);
}

.tint {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.tint svg {
  position: relative;
  display: block;
  width: calc(159% + 1.3px);
  height: 50px;
}

.tint .shape-fill {
  fill: var(--surface1);
  stroke: var(--surface1);
}

@media (min-width: 850px) {
  .main-wrap {
    grid-template: "content title" / 2fr 1fr;
    padding-bottom: var(--size-12);
    padding-top: var(--size-10);
    padding-inline: var(--size-10);
    gap: var(--size-4);
  }
}

.section-title {
  grid-area: title;
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
  background: var(--surface4);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
}
.media-element > img {
  inline-size: 100%;
  aspct-ratio: var(--ratio-landscape);
  object-fit: cover;
}
.media-element__title {
  font-size: var(--font-size-fluid-0);
}

.media-element__btn {
  font-size: var(--font-size-fluid-0);
  padding-inline: var(--size-1);
  padding-block: var(--size-1);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  background: var(--brand);
  color: var(--gray-2);
  display: block;
}

.media-element__btn:hover {
  transform: scale(1.1);
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
const { breakPoints } = useBreakpoints();
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
