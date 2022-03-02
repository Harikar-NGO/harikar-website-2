<template>
  <div class="main-wrap">
    <div>
      <p class="quote">
        Provision of required services to destitute people is not a task of
        charity, rather an act of humanity and justice.
      </p>
      <footer>- Salah Y. Majid</footer>
    </div>
  </div>
</template>

<style scoped>
.main-wrap {
  padding-block: var(--size-4);
  padding-inline: var(--size-8);
  display: grid;
  place-items: center;
  background: var(--surface3);
  background-image: var(--gradient-29);
}

.quote {
  font-size: var(--font-size-fluid-1);
  /* quotes: "\201C""\201D""\2018""\2019"; */
  padding-block: var(--size-2);
  padding-inline: var(--size-4);
  line-height: var(--font-lineheight-2);
  max-width: var(--size-content-3);
}

.quote::before {
  content: open-quote;
  display: inline;
  line-height: 0;
  left: -0.1em;
  position: relative;
  top: 0.5em;
  color: var(--brand);
  font-size: 3em;
}
.quote::after {
  content: close-quote;
  display: inline;
  line-height: 0;
  left: 0.1em;
  position: relative;
  top: 0.5em;
  color: var(--brand);
  font-size: 3em;
}
footer {
  margin: 0;
  text-align: right;
  font-size: var(--font-size-fluid-1);
  font-style: italic;
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
