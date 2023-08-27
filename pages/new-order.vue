<script setup lang="ts">
import { NRadioButton, NRadioGroup } from 'naive-ui'
import { getDay, isAfter, nextFriday } from 'date-fns'
import { getProducts } from '~/services/products'
import DashboardView from '~/components/views/DashboardView.vue'
import useGlobalState from '~/composables/globalState'
import ProductCardItem from '~/components/product/ProductCardItem.vue'

console.log(getDay)

definePageMeta({ layout: 'main' })

const online = useOnline()
const state = useGlobalState()

const WeeksOptions = [{
  value: 'nextWeek',
  label: 'هفته بعد',
  checked: true,
  selected: true,
}, {
  value: 'currentWeek',
  label: 'هفته جاری',
}]
const daysOptions = [{
  value: 'friday',
  label: 'جمعه',
}, {
  value: 'thursday',
  label: 'پنج شنبه',
}, {
  value: 'wednesday',
  label: 'چهارشنبه',
}, {
  value: 'tuesday',
  label: 'سه شنبه',
}, {
  value: 'monday',
  label: 'دوشنبه',
}, {
  value: 'sunday',
  label: 'یکشنبه',
}, {
  value: 'saturday',
  label: 'شنبه',
},
]
interface weekIndexType {
  [key: string]: number
}
const weekDayIndex = { sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6 } as unknown as weekIndexType

const selectedWeek = ref('currentWeek')
const selectedDay = ref(Object.keys(weekDayIndex)[getDay(new Date())])

const nuxt = useNuxtApp()
const products = ref([])
onMounted(async () => {
  const res = await getProducts(nuxt.$dfetch)
  const productsList = res.map((item) => {
    const isNextWeek = isAfter(new Date(item.slot.date), nextFriday(new Date()))
    return {
      ...item,
      slot: {
        ...item.slot,
        weekDay: getDay(new Date(item.slot.date)),
        isNextWeek,
      },
    }
  })
  products.value = productsList
  console.log(res)
})

const filteredProducts = computed(() => {
  return products.value.filter((item: any) => {
    console.log(item.slot.weekDay === weekDayIndex[selectedDay.value], (selectedWeek.value === 'currentWeek' && item.slot.isNextWeek === false), (selectedWeek.value === 'nextWeek' && item.slot.isNextWeek === true))

    return item.slot.weekDay === weekDayIndex[selectedDay.value]
     && ((selectedWeek.value === 'currentWeek' && item.slot.isNextWeek === false) || (selectedWeek.value === 'nextWeek' && item.slot.isNextWeek === true))
  })
})
</script>

<template>
  <DashboardView>
    <div class="mt-6 min-h-screen rounded-lg bg-white p-6">
      <div class="flex flex-col">
        <label class="mb-2 text-gray-900">انتخاب هفته</label>
        <NRadioGroup v-model:value="selectedWeek" dir="ltr" name="radiobuttongroup2" size="large" class="mb-4 flex justify-end">
          <NRadioButton
            v-for="week in WeeksOptions"
            :key="week.value"
            :value="week.value"
          >
            {{ week.label }}
          </NRadioButton>
        </NRadioGroup>

        <label class="mb-2 text-gray-900">انتخاب روز</label>
        <NRadioGroup v-model:value="selectedDay" dir="ltr" name="radiobuttongroup3" size="large" class="mb-4 flex justify-end">
          <NRadioButton
            v-for="day in daysOptions"
            :key="day.value"
            :value="day.value"
          >
            {{ day.label }}
          </NRadioButton>
        </NRadioGroup>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div v-for="(item, index) in filteredProducts" :key="index">
          <ProductCardItem :product="item" />
        </div>
      </div>
      <div v-if="filteredProducts.length === 0" class="my-10 w-full flex items-center justify-center">
        برای این روز محصولی وجود ندارد
      </div>
    </div>
  </DashboardView>
</template>
