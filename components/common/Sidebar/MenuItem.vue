<script setup>
const props = defineProps(['item'])

const type = computed(() => {
  return typeof props.item.children === 'object'
})
</script>

<template>
  <li v-if="type === 'nested'" class="main-list-item">
    <button
      type="button" class="main-list-item group w-full flex items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example"
    >
      <slot name="icon" />
      <span class="ml-3 flex-1 whitespace-nowrap text-left">{{ item.title }}</span>
      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </button>
    <ul id="dropdown-example" class="hidden py-2 space-y-2">
      <li v-for="(item, index) in item.children" :key="index">
        <a :href="item.link" class="group w-full flex items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{{ item.title }}</a>
      </li>
    </ul>
  </li>
  <li v-else>
    <a :href="item.link" class="main-list-item flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
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
