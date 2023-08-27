<script setup>
import { NDrawer, NDrawerContent } from 'naive-ui'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import useGlobalState from '~/composables/globalState'
import CommonMainHeader from '~/components/common/Header/MainHeader.vue'
import HeaderWrapper from '~/components/common/Header/HeaderWrapper.vue'

import { useUserStore } from '~/composables/stores/user'

const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanLg = breakpoints.greater('lg')

const state = useGlobalState()

const userStore = useUserStore()
const initialLoginFailed = computed(() => userStore.initialLoginFailed)
const isAuthenticated = computed(() => userStore.isAuthenticated)

const router = useRouter()
console.log(121, isAuthenticated)
watch(initialLoginFailed, () => {
  if (initialLoginFailed.value)
    router.push('/login')
}, { immediate: true })
</script>

<template>
  <div v-if="isAuthenticated" class="h-full w-full flex px-8 pt-6">
    <aside v-show="largerThanLg" class="relative md:w-[370px]">
      <div class="aside-container ml-8 h-full min-h-screen overflow-y-scroll rounded-3xl bg-white bg-opacity-70 p-4">
        <slot name="aside">
          <CommonMainSidebar />
        </slot>
      </div>
    </aside>

    <main class="w-full flex flex-col px-2 md:px-6">
      <HeaderWrapper>
        <CommonMainHeader />
      </HeaderWrapper>
      <div>
        <slot />
      </div>
    </main>
  </div>

  <NDrawer v-if="!largerThanLg" v-model:show="state.isDrawerOpen.value" :default-width="300">
    <NDrawerContent closable>
      <template #header>
        Header
      </template>
      <CommonMainSidebar />
    </NDrawerContent>
  </NDrawer>
</template>

<style  lang="scss">
.aside-container::-webkit-scrollbar {
  display: none;
}

.aside-container{
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
