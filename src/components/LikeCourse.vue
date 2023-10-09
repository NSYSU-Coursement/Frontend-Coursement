<template>
  <div class="department items-center w-4/12 lg:block hidden">
    <DepartmentTextBox></DepartmentTextBox>
    <div class="title text-4xl font-bold mb-3 flex">
      <img class="icon mr-4" src="@/assets/images/heart-full.png" />已收藏課程
    </div>
    <div class="course-list-container flex flex-col overflow-y-auto overflow-x-hidden">
            <CourseList :list-is-course-list="false"></CourseList>
            <CourseList :list-is-course-list="false"></CourseList>
            <CourseList :list-is-course-list="false"></CourseList>
            <CourseList :list-is-course-list="false"></CourseList>
    </div>
  </div>
</template>
<script setup>
import CourseList from "@/components/CourseList.vue";
import DepartmentTextBox from "@/components/DepartmentTextBox/index.vue";
</script>
<style lang="scss">
.department {
  padding: 0 10px;

  .course-list-container {
    border-top: 5px solid #cdcdcd;
    border-bottom: 5px solid #cdcdcd;
    border-left: 10px solid #cdcdcd;
    border-right: 10px solid #cdcdcd;
    max-height: 400px;
  }
}
</style>
