import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    components: true,
    css: ["~/assets/style.css"],
    modules: ["@nuxtjs/color-mode"],
    meta: {
        title: "Harikar NGO website",
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1"
        }
});
