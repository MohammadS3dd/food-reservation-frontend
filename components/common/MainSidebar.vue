<script setup>
import { useUserStore } from '~/composables/stores/user'

const userStore = useUserStore()
const user = computed(() => userStore.user)
</script>

<template>
  <div class="main-sidebar">
    <div class="mx-auto mb-8 mt-2 flex flex-col items-center justify-center">
      <img class="mb-4 h-20 w-20 rounded bg-gray-300" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Large avatar">
      <span class="font-bold">{{ user.first_name }} {{ user.last_name }}</span>
    </div>
    <CommonSidebarMenu />
  </div>
</template>
