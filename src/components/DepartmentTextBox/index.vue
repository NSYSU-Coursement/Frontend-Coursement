<template>
    <div class="">
        <div class="title lg:text-4xl text-2xl font-bold flex lg:justify-start justify-center my-5">
            <img class="icon mr-4" src="@/assets/images/magnifier-full.png" />依系所查詢
        </div>
        <div class="flex relative items-center w-full">
            <input type="text" v-model="departmentTextBox"
                class="departmentSearch bg-gray-100 p-2 mb-5 leading-10 text-2xl font-bold w-full" placeholder="輸入系所查詢" />
            <img src="@/assets/images/wrong-black.png" class="absolute right-4 cursor-pointer transform -translate-y-[50%]"
                @click="clearDepartmentTextBox" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const departmentTextBox = ref('')
const clearDepartmentTextBox = () => {
    departmentTextBox.value = ''
}
</script>