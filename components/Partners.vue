<template>
  <div class="main-wrap surface3">
    <div class="section-title">
      <title-right title="Our Partners" />
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

<style scoped>
.main-wrap {
  padding-block: var(--size-8);
  display: grid;
  grid-template:
    "title" 0.5fr
    "content" 2fr / 1fr;

  place-items: center;
  overflow: hidden;
  position: relative;
  gap: var(--size-8);
}
@media (min-width: 850px) {
  .main-wrap {
    grid-template: "content title" / 2fr 1fr;
    padding-block: var(--size-11);
    padding-inline: var(--size-10);
    gap: var(--size-4);
  }
}

.title {
  grid-area: section-title;
}

.section-title {
  grid-area: title;
}

.container {
  grid-area: content;
  overflow: hidden;
  max-width: 100%;
}
.media-scroller {
  --_spacer: var(--size-2);
  display: grid;
  grid-auto-flow: column;
  gap: var(--size-3);
  grid-auto-columns: 10rem;
  padding-inline: var(--_spacer);
  padding-block: var(--_spacer);
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  place-items: center;
}

.media-element {
  display: grid;
  place-content: center;
  grid-template-rows: min-content;
  gap: var(--_spacer);
  padding: var(--_spacer);
  min-height: 10rem;
  max-height: 10rem;
  min-width: 10rem;
  box-shadow: var(--shadow-2);
  background: var(--surface4);
}

.partner-logo {
  object-fit: cover;
  max-width: 9rem;
  max-height: 9rem;
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
