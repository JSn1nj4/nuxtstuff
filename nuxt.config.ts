import { defineNuxtConfig } from 'nuxt'
import {
  HmrOptions,
  ServerOptions,
  UserConfig
} from "vite";

// Import environment variables
const {
  VITE_SERVER_HTTPS,
  VITE_SERVER_HOST,
  VITE_SERVER_HMR_HOST,
  VITE_SERVER_HMR_PROTOCOL,
  VITE_SERVER_HMR_PORT,
  VITE_SERVER_HMR_CLIENTPORT
} = process.env

// Define types and related objects
// config.vite.server.hmr
const hmr: HmrOptions = {}

if(VITE_SERVER_HMR_HOST) hmr.host = VITE_SERVER_HMR_HOST
if(VITE_SERVER_HMR_PORT) hmr.port = parseInt(VITE_SERVER_HMR_PORT)
if(VITE_SERVER_HMR_PROTOCOL) hmr.protocol = VITE_SERVER_HMR_PROTOCOL
if(VITE_SERVER_HMR_CLIENTPORT) hmr.clientPort = parseInt(VITE_SERVER_HMR_CLIENTPORT)

const server: ServerOptions = {}
if(Object.keys(hmr).length > 0) server.hmr = hmr
// server.hmr = true

// config.vite
const vite: UserConfig = {}
if(VITE_SERVER_HTTPS) {
  server.https = VITE_SERVER_HTTPS === 'true'
}
if(VITE_SERVER_HOST) {
  server.host = VITE_SERVER_HOST !== "true" ?
    VITE_SERVER_HOST :
    true
}
if(Object.keys(server).length > 0) vite.server = server

// config
type nuxtConfig = {
  vite?: UserConfig,
}
const config: nuxtConfig = {}
if(Object.keys(vite).length > 0) config.vite = vite

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig(config)
