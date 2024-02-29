// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      name: 'Workout Tracker',
      short_name: 'Workout',
      description: 'A PWA to track your workouts!',
      theme_color: '#4DBA87',
      lang: 'en',
    },
  },
})
