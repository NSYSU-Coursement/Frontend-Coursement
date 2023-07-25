import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useBurgerStore = defineStore('burger', () => {
    const isOpen = ref(true)
    const burgerToggle = () => {
        isOpen.value = !isOpen.value
        console.log(isOpen.value)
    }

    return { isOpen, burgerToggle }
})