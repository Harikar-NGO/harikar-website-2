<template>
  <div class="main-wrap">
    <div class="section-title">
      <h2>Our Partners</h2>
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
              :alt="partner.title + 'logo'"
              width="100%"
              height="auto"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-wrap {
  padding-block: var(--size-4);
  display: grid;
  grid-template:
    "title" 0.5fr
    "content" 2fr / 1fr;

  place-items: center;
  background: var(--gray-0);
  overflow-x: hidden;
}
@media (min-width: 850px) {
  .main-wrap {
    grid-template: "title content" / 1fr 2fr;
    padding-block: var(--size-10);
  }
}
.section-title {
  grid-area: title;
  display: grid;
  margin-inline: var(--size-8);
}
.section-title h2 {
  font-size: var(--font-size-fluid-2);
  color: var(--brand);
}
@media (min-width: 850px) {
  .section-title {
    background-image: var(--gradient-29);
    border: var(--border-size-1) solid var(--gray-3);
    border-radius: var(--radius-blob-1);
    box-shadow: var(--shadow-2);
    place-items: start;
  }
  .section-title h2 {
    padding-block: var(--size-11);
    padding-inline: var(--size-7);
  }
}

.container {
  grid-area: content;
  overflow-x: hidden;
  max-width: 100%;
}
.media-scroller {
  --_spacer: var(--size-1);
  display: grid;
  grid-auto-flow: column;
  gap: var(--_spacer);
  grid-auto-columns: 8rem;
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
}

.partner-logo {
  inline-size: 100%;
  aspct-ratio: var(--ratio-landscape);
  object-fit: cover;
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
    title: "canada",
    link: "https://www.international.gc.ca/global-affairs-affaires-mondiales/home-accueil.aspx?lang=eng",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/canada-logo.webp",
  },
  {
    title: "care",
    link: "www.care.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/care-logo.webp",
  },
  {
    title: "sida",
    link: "www.sida.se/en",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/sida-logo.webp",
  },
  {
    title: "sci",
    link: "www.savethechildren.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/sci-logo.webp",
  },
  {
    title: "wv",
    link: "www.wvi.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/wv-logo.webp",
  },
  {
    title: "dorcas",
    link: "www.dorcas.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/dorcas-logo.webp",
  },
  {
    title: "GIZ",
    link: "www.giz.de/en/html/index.html",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/GIZ-logo.webp",
  },
  {
    title: "afd",
    link: "www.afd.fr/en",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/afd-logo.webp",
  },
  {
    title: "BMZ",
    link: "www.bmz.de/en",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/BMZ-logo.webp",
  },
  {
    title: "unocha",
    link: "www.unocha.org",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/unocha-logo.webp",
  },
  {
    title: "solidarites",
    link: "www.solidarites.org/en/",
    img: "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/partners/solidarites-logo.webp",
  },
];
</script>
