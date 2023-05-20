import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const AuthToken = useStorage('AuthStorage', '', localStorage)
  const isAuthenticated = computed(() => false)
  return {
    AuthToken,
    isAuthenticated,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
