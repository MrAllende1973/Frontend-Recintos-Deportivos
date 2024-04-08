// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['@hapi', '@sideway'],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false,
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-swiper',
    'dayjs-nuxt',
  ],
  colorMode: {
    preference: 'light',
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
  },
  swiper: {
    modules: ['effect-coverflow'],
  },
  dayjs: {
    locales: ['es'],
    plugins: ['weekOfYear', 'isoWeek', 'timezone', 'weekday'],
    defaultLocale: 'es',
    defaultTimezone: 'America/Santiago',
  },
});
