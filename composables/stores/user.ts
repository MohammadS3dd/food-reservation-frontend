import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { getMeService, userLoginService } from '~/services/user'

export const useUserStore = defineStore('user', () => {
  const nuxt = useNuxtApp()
  const AuthToken = useStorage('AuthStorage', '', localStorage)
  const isAuthenticated = ref(false)
  const pendingLogin = ref(true)
  const initialLoginFailed = ref(false)
  const user = reactive({})

  const AuthenticateIfTokenAvailable = () => {
    pendingLogin.value = true
    initialLoginFailed.value = false
    if (String(AuthToken.value).length > 5) {
      console.log(12, String(localStorage.getItem('AuthStorage')?.replace('\n', '')))

      getMeService(nuxt.$dfetch).then((userData: any) => {
        Object.assign(user, userData)
        isAuthenticated.value = true
        pendingLogin.value = false
      }).catch((error: Error) => {
        pendingLogin.value = false
        initialLoginFailed.value = true
        console.log(error)
      })
    }
    else {
      isAuthenticated.value = false
      pendingLogin.value = false
      initialLoginFailed.value = true
    }
  }
  // AuthenticateIfTokenAvailable()

  watch(AuthToken, () => {
    AuthenticateIfTokenAvailable()
  }, { immediate: true })

  const login = async (username: string, password: string) => {
    pendingLogin.value = true
    AuthToken.value = ''

    try {
      const res = await userLoginService(nuxt.$gfetch, username, password)
      if (res.statusCode !== 401 && res.accessToken)
        AuthToken.value = res.accessToken
      return res
    }
    catch (error) {
      pendingLogin.value = false
      return error
    }
  }

  function $reset() {
    Object.assign(user, {})
    isAuthenticated.value = false
    AuthToken.value = ''
    pendingLogin.value = false
  }
  return {
    AuthToken,
    isAuthenticated,
    login,
    pendingLogin,
    user,
    $reset,
    initialLoginFailed,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
