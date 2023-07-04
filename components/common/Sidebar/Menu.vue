<script setup>
</script>

<template>
  <div class="text-gray-700">
    <ul class="menu rounded-box gap-2">
      <CommonSidebarMenuItem :item="{ title: 'پیشخوان', link: '/' }">
        <template #icon>
          <div class="h-6 w-6" i-solar:shop-minimalistic-line-duotone />
        </template>
      </CommonSidebarMenuItem>
      <CommonSidebarMenuItem :item="{ title: 'رزرو جدید', link: '/new-order' }">
        <template #icon>
          <div class="h-6 w-6" i-solar:cart-plus-line-duotone />
        </template>
      </CommonSidebarMenuItem>
      <li dir="rtl">
        <details open>
          <summary>
            <div class="h-6 w-6" i-solar:hand-money-line-duotone />

            تراکنش ها
          </summary>
          <ul>
            <CommonSidebarMenuItem :item="{ title: 'پرداخت ها', link: '/transactions' }">
              <template #icon>
                <div class="h-6 w-6" i-solar:money-bag-line-duotone />
              </template>
            </CommonSidebarMenuItem>
            <CommonSidebarMenuItem :item="{ title: 'افزایش اعتبار', link: '/charge' }">
              <template #icon>
                <div class="h-6 w-6" i-solar:add-circle-line-duotone />
              </template>
            </CommonSidebarMenuItem>
          </ul>
        </details>
      </li>
      <CommonSidebarMenuItem :item="{ title: 'سفارشات', link: '/orders' }">
        <template #icon>
          <div class="h-6 w-6" i-solar:checklist-minimalistic-line-duotone />
        </template>
      </CommonSidebarMenuItem>
      <CommonSidebarMenuItem :item="{ title: 'خروج', link: '/logout' }">
        <template #icon>
          <div class="h-6 w-6" i-solar:logout-2-line-duotone />
        </template>
      </CommonSidebarMenuItem>
    </ul>
  </div>
</template>
