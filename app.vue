<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
import { appName } from '~/constants'

useHead({
  title: appName,
  htmlAttrs: {
    dir: 'rtl',
  },
})



const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#3e93f7',
    primaryColorHover: '#3e93f7',
    primaryColorPressed: '#3e93f7',
  },
}
</script>

<template>
  <VitePwaManifest />
  <NConfigProvider :theme-overrides="themeOverrides">
    <NuxtLayout>
      <NuxtLoadingIndicator />

      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family:IRANYekanX;
   background-color: var(--color-page-bg);
   direction: rtl;
}
</style>
