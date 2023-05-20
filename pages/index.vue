<script setup lang="ts">
import DashboardView from '~/components/views/DashboardView.vue'

const online = useOnline()
definePageMeta({ layout: 'main' })
</script>

<template>
  <DashboardView>
    <template #aside>
      <div>
        a
      </div>
    </template>
    <div>
      m
    </div>
  </DashboardView>
</template>
