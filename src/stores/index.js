import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  let isMobileMenuOpen = ref(false)
  function openMobileMenu() {
    isMobileMenuOpen.value = true
  }
  // 把需要共享的状态和方法暴露出去
  return {
    isMobileMenuOpen,
    openMobileMenu
  }
})



