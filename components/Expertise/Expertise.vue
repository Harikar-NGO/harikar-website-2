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
      <ul class="container">
        <div
          v-for="(list, index) in expertiseList"
          :key="index"
          class="expertise-list"
        >
          <li
            tabindex="-1"
            v-for="(item, index) in list"
            :key="index"
            class="expertise-item"
          >
            {{ item }}
          </li>
        </div>
      </ul>
    </div>
    <Tint flipped gray />
  </div>
</template>

<script setup>
import Tint from "../Shapes/Tint.vue";

let expertiseList = [
  ["General Protection", "GBV", "Legal Assistance"],
  ["Livelihood", "PSEA Trainings", "Child Protection"],
  ["Reproductive Health", "WASH", "Green Houses"],
  ["Awarness raising", "PSS", "Case managment"],
];
</script>

<style scoped>
@import "./expertise.css";
</style>
