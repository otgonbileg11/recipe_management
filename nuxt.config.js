export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Online Recipes',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/default.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAI_L-kHVI8GgPdFAOwDzCvry6fbQGuHcc",
          authDomain: "recipe-management-36911.firebaseapp.com",
          projectId: "recipe-management-36911",
          storageBucket: "recipe-management-36911.appspot.com",
          messagingSenderId: "626103465471",
          appId: "1:626103465471:web:cbea086c68749917b7e3ca"
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChanged',
            },
            ssr: true,
          },
        }
      }
    ]
  ],

  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
