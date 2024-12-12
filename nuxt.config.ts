export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    resolve: {
      alias: {
        '@assets': '/assets', // Map @assets to the root `assets` folder
      },
    },
  },
  css: [
    './assets/styles/main.scss'
  ],
  app: {
    head: {
      script: [
        { src: "https://telegram.org/js/telegram-web-app.js?56", async: true },
      ],
    },
  },
});
