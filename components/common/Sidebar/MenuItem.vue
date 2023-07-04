<script setup>
const props = defineProps(['item'])
</script>

<template>
  <li>
    <a :href="item.link" class="main-list-item flex items-center rounded-lg p-2 text-gray-900 dark:text-white dark:hover:bg-gray-700">
      <slot name="icon" />
      <span class="ml-3">{{ item.title }}</span>
    </a>
  </li>
</template>

<style lang="scss">
.main-list-item svg{
    @apply h-6 w-6 ml-1 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white
}
</style>
