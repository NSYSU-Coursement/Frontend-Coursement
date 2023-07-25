import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useBurgerStore = defineStore('burger', () => {
    const isOpen = ref(false)
    const burgerToggle = () => {
        isOpen.value = !isOpen.value
        console.log(isOpen.value)
    }

    return { isOpen, burgerToggle }
})