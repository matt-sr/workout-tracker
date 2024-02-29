// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/workout-tracker/', // Adjust this to match your repository name
  },
  devtools: { enabled: true },
  modules: [
    '@vite-pwa/nuxt',
  ],
  pwa: {
    workbox: {
      // Workbox options
    },
    manifest: {
      name: 'Workout Tracker',
      short_name: 'WorkoutTracker',
      description: 'Track your workouts efficiently and effectively.',
      theme_color: '#ffffff',
      lang: 'en',
    },
  },
})
