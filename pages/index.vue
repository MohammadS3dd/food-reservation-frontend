<script setup lang="ts">
import DashboardView from '~/components/views/DashboardView.vue'
import useGlobalState from '~/composables/globalState'

definePageMeta({ layout: 'main' })

const online = useOnline()
const state = useGlobalState()
</script>

<template>
  <DashboardView>
    <template #aside>
      <CommonMainSidebar />
    </template>
    <div>
      <BaseButton @click="state.toggleDrawer">
        {{ state.isDrawerOpen }}
      </BaseButton>
    </div>
  </DashboardView>
</template>
