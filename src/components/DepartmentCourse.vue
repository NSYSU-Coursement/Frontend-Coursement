
<template>
    <div class="slider w-8/12 mt-4">
        <div class=""><img class="bg-cover" src="@/assets/images/slider.png"></div>
        <div class="course-list-container flex flex-col">
            <CourseList></CourseList>
            <CourseList></CourseList>
            <CourseList></CourseList>
            <CourseList></CourseList>
            <CourseList></CourseList>
            <CourseList></CourseList>
            <CourseList></CourseList>
        </div>
    </div>
</template>
<script setup>
import CourseList from './CourseList.vue';
</script>
<style lang="scss"></style>
  