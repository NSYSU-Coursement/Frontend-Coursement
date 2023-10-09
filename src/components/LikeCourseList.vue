<template>
  <div class="list p-2 flex items-center hover:bg-slate-300 cursor-pointer">
    <starComponent :star-full-control="starFullIsTrue" @toggle-star="toggleStar"></starComponent>
      <div class="department-circle flex items-center justify-center font-bold text-xl px-4 py-3 mr-4">
      外
    </div>
    <div class="course font-bold text-xl">112世紀美國戲劇</div>
  </div>
</template>
<script setup>

import starComponent from '@/components/Star/index.vue'
import { ref } from 'vue';
const starFullIsTrue=ref(false)
const toggleStar=()=>{
  //api串接
  starFullIsTrue.value=!starFullIsTrue.value
}
</script>
<style lang="scss">
.list {
  border-top: 5px solid #cdcdcd;
  border-bottom: 5px solid #cdcdcd;
  background: #f7f7f7;

  .department-circle {
    border-radius: 100%;
    background-color: #fffdee;
  }
}
</style>
