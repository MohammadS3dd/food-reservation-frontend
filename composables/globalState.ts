import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

export default createGlobalState(
  () => {
    const isDrawerOpen = ref(false)
    const toggleDrawer = () => {
      isDrawerOpen.value = !isDrawerOpen.value
    }
    const closeDrawer = () => {
      isDrawerOpen.value = false
    }
    const openDrawer = () => {
      isDrawerOpen.value = true
    }
    return { isDrawerOpen, closeDrawer, openDrawer, toggleDrawer }
  },
)
