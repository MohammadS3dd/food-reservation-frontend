<template>
  <div w-full flex px-8 pt-6>
    <aside class="ml-8 h-full rounded-t-3xl bg-white p-4 md:w-[350px]">
      <slot name="aside" />
    </aside>
    <main class="w-full flex px-6">
      <slot />
    </main>
  </div>
</template>
