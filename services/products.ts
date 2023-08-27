import type { AsyncData } from 'nuxt/app'

export const getProducts = function (fetch: any): AsyncData | Error {
  return fetch('/products/all', { method: 'Get' })
}
