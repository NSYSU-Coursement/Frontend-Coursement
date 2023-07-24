
<template>
    <div class="department items-center mt-4 w-4/12 ">
        <div class="title text-4xl font-bold mb-3 flex"> <img class="icon mr-4"
                src="@/assets/images/magnifier-full.png">依系所查詢</div>
        <div class="flex relative items-center w-full"> <input type="text"
                class="departmentSearch p-2 mb-3 leading-10 text-2xl font-bold w-full bg-gray" placeholder="輸入系所查詢">
            <img src="@/assets/images/wrong-black.png" class="absolute right-4" alt="">
        </div>
        <div class="title text-4xl font-bold mb-3 flex"> <img class="icon mr-4" src="@/assets/images/heart-full.png">已收藏課程
        </div>
        <div class="course-list-container overflow-auto flex flex-col  border border-custom-gray border-y-4">
            <LikeCourseList></LikeCourseList>
            <LikeCourseList></LikeCourseList>
            <LikeCourseList></LikeCourseList>
            <LikeCourseList></LikeCourseList>
            <LikeCourseList></LikeCourseList>
            <LikeCourseList></LikeCourseList>
            <LikeCourseList></LikeCourseList>
            <LikeCourseList></LikeCourseList>
            <LikeCourseList></LikeCourseList>
        </div>
    </div>
</template>
<script setup>
import LikeCourseList from './LikeCourseList.vue';
</script>
<style lang="scss">
.department {
    padding: 0 10px;


    .course-list-container {
        border-left: 10px solid #CDCDCD;
        border-right: 10px solid #CDCDCD;
        max-height: 600px;
    }
}
</style>
  