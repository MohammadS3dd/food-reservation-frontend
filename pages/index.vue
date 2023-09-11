<script setup lang="ts">
import DashboardView from '~/components/views/DashboardView.vue'
import useGlobalState from '~/composables/globalState'

definePageMeta({ layout: 'main' })

const online = useOnline()
const state = useGlobalState()
</script>

<template>
  <DashboardView>
    <div class="mt-4 w-full flex flex-col">
      <div class="grid grid-cols-4 mb-4 gap-8">
        <NuxtLink to="/charge">
          <div class="card-md h-48 w-full cursor-pointer items-center justify-center font-bold text-gray-700">
            <div i-solar:add-circle-line-duotone class="mb-6 h-18 w-18" />
            <span>افزایش اعتبار</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/new-order">
          <div class="card-md h-48 w-full cursor-pointer items-center justify-center font-bold text-gray-700">
            <div i-solar:cart-plus-line-duotone class="mb-6 h-18 w-18" />
            <span>رزرو غذا</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/orders">
          <div class="card-md h-48 w-full cursor-pointer items-center justify-center font-bold text-gray-700">
            <div i-solar:checklist-minimalistic-line-duotone class="mb-6 h-18 w-18" />
            <span>سفارشات</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/profile">
          <div class="card-md h-48 w-full cursor-pointer items-center justify-center font-bold text-gray-700">
            <div i-solar:user-bold-duotone class="mb-6 h-18 w-18" />
            <span>پروفایل </span>
          </div>
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 mb-4 gap-8">
        <div class="card-md h-48 w-full cursor-pointer items-center justify-center font-bold text-gray-700">
          a
        </div>
        <div class="card-md h-48 w-full cursor-pointer items-center justify-center font-bold text-gray-700">
          a
        </div>
      </div>
    </div>
  </DashboardView>
</template>

<style scoped lang="scss">
.card-md{
  @apply flex flex-1 flex-col rounded-lg bg-white bg-opacity-80 p-6
}
</style>
