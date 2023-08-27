<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useUserStore } from '~/composables/stores/user'
import useGlobalState from '~/composables/globalState'

const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanLg = breakpoints.greater('lg')
const state = useGlobalState()

const userStore = useUserStore()
const user = computed(() => userStore.user)

const profileDropdown= ref(null)
</script>

<template>
  <div class="min-h-14 w-full flex items-center p-3">
    <baseButton v-show="!largerThanLg" class="rounded-lg bg-gray-100 p-2 hover:bg-gray-200" strong secondary circle size="large" @click="state.toggleDrawer">
      <div class="h-9 w-9 text-current text-gray-600" i-solar:hamburger-menu-line-duotone />
    </baseButton>
    <div class="flex items-center">
      <img src="~/assets/images/logo.png" class="h-10 px-2" alt="">
      <div class="text-brand-main text-lg font-bold">
        دانشگاه خلیج فارس
      </div>
    </div>
    <div class="mx-auto" />
    <div class="flex relative">
      <button  class="flex transform-gpu items-center justify-between rounded-lg bg-opacity-20 p-1 outline-none transition-colors duration-100 ease-in hover:bg-primary/[0.1] hover:text-primary">
        <div i-solar:cart-large-2-bold-duotone class="h-7 w-7 text-current" />
      </button>
      <button @click="profileDropdown.toggle()" class="mx-2 relative flex transform-gpu items-center justify-between rounded-lg bg-opacity-20 p-1 outline-none transition-colors duration-100 ease-in hover:bg-primary/[0.1] hover:text-primary">
        <div i-solar:user-circle-line-duotone class="h-7 w-7 text-current" />
        <CommonHeaderSubComponentsProfileDropdown ref="profileDropdown" />

      </button>
    </div>
  </div>
</template>
