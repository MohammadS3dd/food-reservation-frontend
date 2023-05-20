<script setup>
import { useAttrs } from 'vue'
import { NButton } from 'naive-ui'

const attrs = useAttrs()
defineExpose({ attrs })
</script>

<template>
  <NButton v-bind="attrs" class="base-button">
    <slot />
  </NButton>
</template>

<style lang="scss" scoped>
.base-button{
  @apply rounded-xl flex align-middle justify-center hover:border-red-600
}
</style>
