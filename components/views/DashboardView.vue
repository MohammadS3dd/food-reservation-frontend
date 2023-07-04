<script setup>
import { NDrawer, NDrawerContent } from 'naive-ui'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import useGlobalState from '~/composables/globalState'

const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanMd = breakpoints.greater('md')

const state = useGlobalState()
</script>

<template>
  <div class="w-full flex px-8 pt-6">
    <aside v-show="largerThanMd" class="aside-container ml-8 h-full overflow-y-scroll rounded-t-3xl bg-gray-200 p-4 md:w-[350px]">
      <slot name="aside" />
    </aside>
    <NDrawer v-model:show="state.isDrawerOpen.value">
      <NDrawerContent closable>
        <template #header>
          Header
        </template>
        <template #footer>
          test
        </template>
      </NDrawerContent>
    </NDrawer>

    <main class="w-full flex flex-col px-2 md:px-6">
      <header class="" />
      <div>
        <slot />
      </div>
    </main>
  </div>
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
