<template>
  <div class="hero-wrap">
    <div class="hero">
      <h1 class="hero-message animate-top-down">
        <div>Harikar NGO</div>
      </h1>
      <p class="under-hero animate-top-down">
        Harikar NGO is a neutral, non-governmental, non-profit humanitarian
        organization.
      </p>
      <div class="button-list animate-top-down">
        <button class="primary">
          write to us
          <span><SendIcon color="var(--gray-3)" h="16" width="16" /></span>
        </button>
      </div>
    </div>
    <picture class="promo-art">
      <img
        src="https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/cover.webp"
        alt="A mother with three young kids"
        width="964"
        height="723"
      />
    </picture>
    <Triangle />
  </div>
</template>

<script setup>
import SendIcon from "../Icons/SendIcon.vue";
import Triangle from "../Shapes/Triangle.vue";
</script>

<style scoped>
@import "./hero.css";
</style>
