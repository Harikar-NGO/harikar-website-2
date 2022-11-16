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
        <SendButton text="Write to Us" />
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
import Triangle from "../Shapes/Triangle.vue";
import SendButton from "../Buttons/SendButton.vue";
</script>

<style>
@import "./hero.css";
</style>
