<template>
    <div class="navbar-textbox-container items-center relative h-12 ">
        <img src="@/assets/images/magnifier.png" class="navbar-icon absolute left-2">
        <input type="text" v-model="navbarSearchText"
            class="navbar-textbox text-white pl-10 w-full placeholder:text-white font-bold h-full rounded-xl" placeholder="搜尋「課程名稱」、「課程代碼」、「教師姓名」
">
        <img src="@/assets/images/wrong-white.png" class="cursor-pointer absolute right-2" @click="clearTextBox">
    </div>
</template>
<script setup>
import { ref } from 'vue'
const navbarSearchText = ref('')
const clearTextBox = () => {
    navbarSearchText.value = ''
}
</script>