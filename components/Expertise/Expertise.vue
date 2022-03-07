<template>
  <div class="main-wrap surface1">
    <div class="section-title">
      <Title title="Our Expertise" left />
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
            tabindex="-1"
            v-for="(item, index) in list"
            :key="index"
            class="expertise-btn"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </div>
    <Tint flipped gray />
  </div>
</template>

<script setup>
import Tint from "../Shapes/Tint.vue";

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

setInterval(flipList, 4000);
</script>

<style scoped>
@import "./expertise.css";
</style>
