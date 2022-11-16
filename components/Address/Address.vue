<template>
  <div class="main-wrap surface1">
    <div class="section-title">
      <Title title="Our Office" left />
    </div>
    <div class="address">
      <p class="address-title">Head Quarter</p>
      <div class="address-item">
        <PhoneIcon color="var(--text1)" w="16" h="16" />
        <p>+964 773 697 1165</p>
      </div>
      <div class="address-item">
        <EmailIcon color="var(--text1)" w="16" h="16" />
        <p>info@harikar.org</p>
      </div>
      <div class="address-item">
        <LocationIcon color="var(--text1)" w="16" h="16" />
        <p>Australia St, Media Quarter, 99448 Duhok, KR-Iraq</p>
      </div>
    </div>
    <div class="content">
      <iframe
        title="Harikar location on a map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5994980935093!2d42.95007621529133!3d36.852066779937935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40088da4b0434497%3A0x9553764be14279fd!2sHarikar%20NGO!5e0!3m2!1sen!2siq!4v1619420826611!5m2!1sen!2siq"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      >
      </iframe>
    </div>
  </div>
</template>

<script setup>
import PhoneIcon from "../Icons/PhoneIcon.vue";
import EmailIcon from "../Icons/EmailIcon.vue";
import LocationIcon from "../Icons/LocationIcon.vue";
</script>

<style scoped>
@import "./address.css";
</style>
