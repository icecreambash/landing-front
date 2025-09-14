import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui','yandex-metrika-module-nuxt3'],
  colorMode:{
    preference:'light'
  },
  css: ['~/assets/css/main.css'],
  vite: {    plugins: [      tailwindcss(),    ],  },
  yandexMetrika: {
    id: 66930724,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  },
})
