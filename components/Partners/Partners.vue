<template>
  <div class="main-wrap surface3">
    <div class="section-title">
      <Title title="Our Partners" right />
    </div>
    <div class="container">
      <div class="media-scroller snaps-inline">
        <div
          class="media-element"
          v-for="(partner, index) in partners"
          :key="index"
        >
          <a :href="'https://' + partner.link" target="_blank">
            <img
              loading="lazy"
              class="partner-logo"
              :src="partner.img"
              :alt="partner.title + ' logo'"
              max-width="100%"
              max-height="100%"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const partners = [
  {
    title: "UNHCR",
    link: "www.unhcr.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/UNHCR-logo.webp",
  },
  {
    title: "UNICEF",
    link: "www.unicef.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/UNICEF-logo.webp",
  },
  {
    title: "UNFPA",
    link: "www.unfpa.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/UNFPA-logo.webp",
  },
  {
    title: "IHF",
    link: "www.unocha.org/iraq/about-ihf",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/IHF-logo.webp",
  },
  {
    title: "GAC",
    link: "https://www.international.gc.ca/global-affairs-affaires-mondiales/home-accueil.aspx?lang=eng",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/canada-logo.webp",
  },
  {
    title: "CARE",
    link: "www.care.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/care-logo.webp",
  },
  {
    title: "Sida",
    link: "www.sida.se/en",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/sida-logo.webp",
  },
  {
    title: "SCI",
    link: "www.savethechildren.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/sci-logo.webp",
  },
  {
    title: "WV",
    link: "www.wvi.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/wv-logo.webp",
  },
  {
    title: "Dorcas",
    link: "www.dorcas.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/dorcas-logo.webp",
  },
  {
    title: "GIZ",
    link: "www.giz.de/en/html/index.html",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/GIZ-logo.webp",
  },
  {
    title: "AFD",
    link: "www.afd.fr/en",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/afd-logo.webp",
  },
  {
    title: "BMZ",
    link: "www.bmz.de/en",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/BMZ-logo.webp",
  },
  {
    title: "UNOCHA",
    link: "www.unocha.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/unocha-logo.webp",
  },
  {
    title: "Solidarites",
    link: "www.solidarites.org/en/",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/solidarites-logo.webp",
  },
];
</script>

<style scoped>
@import "./partners.css";
</style>
