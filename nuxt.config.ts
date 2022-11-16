import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  components: true,
  css: ["~/assets/style.css"],
  modules: ["@nuxtjs/color-mode", "@nuxt/content"],
  meta: {
    title: "Harikar NGO",
    description: "Harikar's backup website",
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
  },
});
