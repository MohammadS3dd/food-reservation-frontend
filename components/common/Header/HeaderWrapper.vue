<script setup>
import MainHeader from './MainHeader.vue'
</script>

<template>
  <div class="overflow-hidden rounded-xl">
    <slot>
      <MainHeader />
    </slot>
  </div>
</template>
