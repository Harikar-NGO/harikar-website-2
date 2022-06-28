<template>
  <footer>
    <div class="info">
      <div class="brand">
        <img alt="" src="/harikar-logo.svg" width="40" height="80" />
        <p>Harikar NGO</p>
      </div>
      <p class="info-text">
        We have been working in the humanitarian sector for more than a decade,
        helping people is in our name.
      </p>
    </div>
    <div class="copyright">
      <p>© Harikar NGO - All Rights Reserved 2021</p>
    </div>
    <div class="links">
      <div class="list harikar">
        <p class="list-title">harikar</p>
        <ul class="list-items">
          <li class="list-item">
            <a href="/executive-board-members">executive board</a>
          </li>
          <li class="list-item">
            <a :href="route.name === 'index' ? '#profile' : '/#profile'"
              >profile</a
            >
          </li>
          <li class="list-item"><a href="/legal-status">Legal Status</a></li>
        </ul>
      </div>
      <div class="list ref">
        <p class="list-title">references</p>
        <ul class="list-items">
          <li class="list-item"><a href="/policies">policies</a></li>
        </ul>
      </div>
      <div class="list other">
        <p class="list-title">other</p>
        <ul class="list-items">
          <li class="list-item"><a href="/contact">contact us</a></li>
          <li class="list-item">
            <a :href="route.name === 'index' ? '#address' : '/#address'"
              >address</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="social">
      <a href="https://www.facebook.com/Harikar2004/" target="__blank">
        <img
          alt="link to harikar's facebook page"
          src="/icons8-facebook.svg"
          width="35"
          height="35"
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCfAUdyLGTADpz5yi7f3OFFg"
        target="__blank"
      >
        <img
          alt="link to harikar's youtube channel"
          src="/icons8-youtube.svg"
          width="35"
          height="35"
        />
      </a>
      <a href="https://www.instagram.com/harikarngo/" target="__blank">
        <img
          alt="link to harikar's instagram page"
          src="/icons8-instagram.svg"
          width="35"
          height="35"
        />
      </a>
    </div>
  </footer>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped>
@import "./footer.css";
</style>
