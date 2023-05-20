<script setup lang="ts">
import { NInput } from 'naive-ui'

const value = ref('')
definePageMeta({ layout: 'auth' })
</script>

<template>
  <div>
    <BaseCard class="w-[30rem] flex-col p-8 px-12">
      <div mb-8 text-center>
        <span text-2xl font-semibold>ورود</span>
      </div>
      <div>
        <baseButton size="large" class="disabled w-full">
          <div class="i-logos:google-icon ml-2 h-full w-4" />
          ورود از طریق گوگل
        </baseButton>
      </div>
      <BaseDivider dashed>
        <span class="divider-title">
          ورود با ایمیل
        </span>
      </BaseDivider>
      <div class="flex flex-col">
        <NInput v-model:value="value" type="text" placeholder="ایمیل" class="mb-4 rounded-lg" size="large" />
        <NInput v-model:value="value" type="text" placeholder="رمز عبور" class="mb-6 rounded-lg" size="large" />
        <BaseButton type="primary" size="large" class="bg-primary rounded-lg">
          ورود
        </BaseButton>
      </div>
    </BaseCard>
  </div>
</template>

<style lang="scss" scoped>
.google-auth-button{
    @apply rounded-2xl p-4
}

.divider-title{

    @apply text-sm font-light

}
</style>
