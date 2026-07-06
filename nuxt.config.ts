export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'nuxt-spa-boilerplate',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'nuxt-spa-boilerplate' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '/style.css' }
      ]
    }
  },

  css: [
    'assets/css/fonts.css'
  ],

  modules: [
    '@nuxtjs/color-mode'
  ],

  compatibilityDate: '2024-07-05'
})
