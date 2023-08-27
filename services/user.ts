import type { AsyncData } from 'nuxt/app'

export const userLoginService = function (fetch: any, username: string, password: string): AsyncData | Error {
  return fetch('/auth/login', { method: 'Post', body: { email: username, password } })
}
export const getMeService = function (fetch: any): AsyncData | Error {
  return fetch('/auth/me', { method: 'Get' })
}
