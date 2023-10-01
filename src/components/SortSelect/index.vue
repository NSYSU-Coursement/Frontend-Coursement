<template>
    <div class="flex justify-end mb-6">
        <select class="sortSelect border-2 border-gray-300 font-bold">
            <option v-for="(condition, i) in optionList" v-key="i">{{ condition }}</option>
        </select>
    </div>
</template>
<script setup>
const optionList=['依讚數排列','Dog','Cat','Hamster','Parrot','Spider','Goldfish']
</script>
<style lang="scss">
.sortSelect {
    margin-top: 10px ;
    width: 150px;
    height: 40px;
}
</style>