<template>
    <div class="transition duration-150 ease-out fixed top-0"
        :class="{ 'translate-x-0': $store.isOpen, 'translate-x-[-100%]': !$store.isOpen }">">123
    </div>
</template>
<script setup>
import { useBurgerStore } from '../store/burger';
const $store = useBurgerStore()
</script>
