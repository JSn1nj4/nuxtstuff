import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      https: process.env.VITE_SERVER_HTTPS &&
        (process.env.VITE_SERVER_HTTPS === "true"),
      host: process.env.VITE_SERVER_HOST ?
        (
          process.env.VITE_SERVER_HOST !== "true" ?
            process.env.VITE_SERVER_HOST :
            true
        ) :
        'localhost',
      hmr: {
        host: process.env.VITE_SERVER_HMR_HOST ?
          process.env.VITE_SERVER_HMR_HOST :
          'localhost',
        protocol: process.env.VITE_SERVER_HMR_PROTOCOL ?
          process.env.VITE_SERVER_HMR_PROTOCOL :
          'ws',
      },
    },
  },
})
