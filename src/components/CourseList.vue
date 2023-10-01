<template>
  <div class="courseList p-6 flex items-center justify-between mb-2 bg-white cursor-pointer hover:bg-slate-300">
    <div class="flex items-center">
      <starComponent :star-full-control="starFullIsTrue" @toggle-star="toggleStar"></starComponent>
      <div class="department-circle flex justify-center items-center font-bold text-xl px-4 py-3 mr-4">
        外
      </div>
      <div class="course font-bold text-xl">112世紀美國戲劇</div>
    </div>
    <div class="flex items-center">
      <div class="comment flex items-center mr-3">
        <p class="text-3xl font-bold mr-3">50</p>
        <img src="@/assets/images/write.png" class="icon" />
      </div>
    </div>
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
.courseList {
  border: 2px solid #cdcdcd;

  .department-circle {
    border-radius: 100%;
    background-color: #fffdee;
  }
}
</style>
