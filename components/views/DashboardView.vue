<template>
  <div w-full flex px-8 pt-6>
    <aside class="aside-container ml-8 h-full overflow-y-scroll rounded-t-3xl bg-white p-4 md:w-[350px]">
      <slot name="aside" />
    </aside>
    <main class="w-full flex px-6">
      <slot />
    </main>
  </div>
</template>

<style  lang="scss">
.aside-container::-webkit-scrollbar {
  display: none;
}

.aside-container{
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
