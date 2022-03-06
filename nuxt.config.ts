import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  components: true,
  css: ["~/assets/style.css", "@mdi/font/css/materialdesignicons.min.css"],
  modules: ["@nuxtjs/color-mode"],
  head: {
    title: "Harikar NGO website",
    lang: "en",
    meta: [{ description: "Harikar NGO's main website" }],
  },
});
