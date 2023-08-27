<script setup>
import MainHeader from './MainHeader.vue'
</script>

<template>
  <div class="overflow-visible rounded-xl bg-white">
    <slot>
      <MainHeader />
    </slot>
  </div>
</template>
