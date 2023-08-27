<script setup lang="ts">
import { NInput } from 'naive-ui'
import { toast } from 'vue3-toastify'
import { useUserStore } from '~/composables/stores/user'

definePageMeta({ layout: 'auth' })
const username = ref('')
const password = ref('')
const userStore = useUserStore()
const pendingLoading = computed(() => userStore.pendingLogin)
const isAuthenticated = computed(() => userStore.isAuthenticated)
const user = computed(() => userStore.user as any)
const router = useRouter()
function loginUser(): void {
  userStore.$reset()
  const id = toast.loading(
    'Please wait...',
    {
      position: toast.POSITION.BOTTOM_RIGHT,
    },
  )
  userStore.login(username.value, password.value)
  watch(pendingLoading, () => {
    if (pendingLoading.value === false && isAuthenticated.value) {
      toast.update(id, {
        render: 'وارد شدید!',
        autoClose: true,
        closeOnClick: true,
        closeButton: true,
        type: 'success',
        isLoading: false,
      })
      router.push('/')
    }
    if (pendingLoading.value === false && !isAuthenticated.value) {
      toast.update(id, {
        render: 'مشکلی پیش آمده است!',
        autoClose: true,
        closeOnClick: true,
        closeButton: true,
        type: 'error',
        isLoading: false,
      })
    }
  })
}
</script>

<template>
  <div>
    <BaseCard class="w-[30rem] flex-col p-8 px-12">
      <div class="mb-8 flex items-center justify-center text-center">
        <img src="~/assets/images/logo.png" alt="">
        <span text-2xl font-semibold />
      </div>
      <div>
        <baseButton size="large" class="disabled w-full">
          <div class="i-logos:google-icon ml-2 h-full w-4" />
          ورود از طریق گوگل
        </baseButton>
      </div>
      <BaseDivider dashed>
        <span class="divider-title">
          ورود با ایمیل
        </span>
      </BaseDivider>
      <div class="flex flex-col">
        <NInput v-model:value="username" type="text" placeholder="ایمیل" class="mb-4 rounded-lg" size="large" />
        <NInput v-model:value="password" type="password" placeholder="رمز عبور" class="mb-6 rounded-lg" size="large" />
        <BaseButton type="primary" size="large" class="rounded-lg bg-primary" :loading="pendingLoading" @click="loginUser">
          ورود
        </BaseButton>
      </div>
    </BaseCard>
  </div>
</template>

<style lang="scss" scoped>
.google-auth-button{
    @apply rounded-2xl p-4
}

.divider-title{

    @apply text-sm font-light

}
</style>
