<script setup>
import { NDrawer, NDrawerContent } from 'naive-ui'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import useGlobalState from '~/composables/globalState'
import CommonMainHeader from '~/components/common/Header/MainHeader.vue'
import HeaderWrapper from '~/components/common/Header/HeaderWrapper.vue'

const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanMd = breakpoints.greater('md')

const state = useGlobalState()
</script>

<template>
  <div class="w-full flex px-8 pt-6">
    <aside v-show="largerThanMd" class="aside-container ml-8 h-full overflow-y-scroll rounded-t-3xl bg-white bg-opacity-70 p-4 md:w-[350px]">
      <slot name="aside">
        <CommonMainSidebar />
      </slot>
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

  <NDrawer v-if="!largerThanMd" v-model:show="state.isDrawerOpen.value" :default-width="300">
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
