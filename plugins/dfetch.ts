import { ofetch } from 'ofetch'

export default defineNuxtPlugin((nuxtApp) => {
  const getToken = () => String(localStorage.getItem('AuthStorage')?.replace('\n', ''))
  const dfetch = ofetch.create({
    baseURL: 'http://localhost:30017/',
    async onRequest({ request, options }) {
      // Log request
      console.log('[fetch request]', request, options, getToken())
      options.headers.Authorization = `Bearer ${getToken()}`

      // Add `?t=1640125211170` to query search params
      options.query = options.query || {}
    },
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      'Access-Control-Allow-Origin': '*',
    },
  })
  const gfetch = ofetch.create({
    baseURL: 'http://localhost:30017/',
    headers: {
      'Accept': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',

    }
    ,

  })

  // You can also just do this instead of returning
  // nuxtApp.provide('ofetch', instance)

  return {
    provide: {
      dfetch,
      gfetch,
    },
  }
})
