<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="h-38 w-full flex items-start justify-between border border-gray-300 rounded-lg p-6 text-gray-950">
    <img src="~/assets/images/placeholders/placeholder.png" class="mr-4 h-26 w-26 shrink-0 rounded-lg object-contain">
    <div class="w-full flex flex-col">
      <a href="" class="font-bold">{{ product.name }}</a>
      <span>{{ product.detail }}</span>
    </div>
    <div class="h-full flex flex-shrink-0 flex-col justify-between">
      <span class="text-lg font-bold">{{ product.price }} تومان</span>
      <BaseButton size="large" class="w-28">
        خرید
      </BaseButton>
    </div>
  </div>
</template>
