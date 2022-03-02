<template>
  <div class="main-wrap surface1">
    <div class="section-title">
      <title-left title="Our Expertise" />
    </div>
    <div class="content">
      <p class="content-title">
        We have expertise in a wide range of humanitarian and technical
        departments.
      </p>
      <div class="expertise">
        <div
          v-for="(list, index) in expertiseList"
          :key="index"
          class="expertise-list"
          :class="{ active: isActive && index === 1 }"
        >
          <button
            v-for="(item, index) in list"
            :key="index"
            class="expertise-btn"
          >
            {{ item }}
          </button>
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
  padding-block: var(--size-10);
  display: grid;
  grid-template:
    "title" 0.2fr
    "content" 2fr / 1fr;

  place-items: center;
  position: relative;
  gap: var(--size-8);
}
@media (min-width: 850px) {
  .main-wrap {
    grid-template: "title content" / 1fr 2fr;
    padding-bottom: var(--size-12);
    padding-top: var(--size-10);
    padding-inline: var(--size-10);
    gap: var(--size-4);
  }
}

.tint {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: var(--layer-1);
}

.tint svg {
  position: relative;
  display: block;
  width: calc(159% + 1.3px);
  height: 50px;
  transform: rotateY(180deg);
}

.tint .shape-fill {
  fill: var(--surface3);
  stroke: var(--surface3);
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
.expertise {
  display: grid;
  place-items: center;
  gap: var(--size-2);
  font-size: var(--font-size-fluid-0);
  overflow: hidden;
  height: var(--size-11);
  position: relative;
}

.expertise-list {
  display: flex;
  gap: var(--size-5);
}
.expertise-btn {
  padding: var(--size-2);
  background: transparent;
}

.active > button {
  background: var(--brand);
  color: var(--gray-2);
  border-radius: var(--radius-2);
  animation: var(--animation-slide-in-down);
}
</style>

<script setup>
const { breakPoints } = useBreakpoints();

const isActive = ref(true);

let expertiseList = ref([
  ["General Protection", "GBV", "Legal Assistance"],
  ["Livelihood", "PSEA Trainings", "WASH"],
  ["Reproductive Health", "Child Protection", "Green Houses"],
  ["Awarness raising", "PSS", "Case managment"],
]);
const flipList = () => {
  let array = expertiseList.value;
  array.unshift(array.pop());
  return array;
};

setInterval(flipList, 2800);
</script>
