<template>
  <div class="slider lg:w-8/12 w-full">
    <NavbarTextBox class="lg:hidden flex mx-auto mb-4"></NavbarTextBox>
    <Slider></Slider>
    <DepartmentTextBox class="lg:hidden block"></DepartmentTextBox>
    <SortSelect></SortSelect>
    <div class="course-list-container flex flex-col">
      <CourseList
        :list-is-course-list="true"
        :courseData="fakeData"
      ></CourseList>
      <CourseList
        :list-is-course-list="true"
        :courseData="fakeData"
      ></CourseList>
      <CourseList
        :list-is-course-list="true"
        :courseData="fakeData"
      ></CourseList>
      <CourseList
        :list-is-course-list="true"
        :courseData="fakeData"
      ></CourseList>
    </div>
  </div>
</template>
<script setup>
import CourseList from "@/components/CourseList.vue";
import NavbarTextBox from "@/components/NavbarTextBox/index.vue";
import Slider from "@/components/Slider/index.vue";
import DepartmentTextBox from "@/components/DepartmentTextBox/index.vue";
import SortSelect from "@/components/SortSelect/index.vue";
const fakeData = {
  name: "112 二十世紀美國戲劇",
  code: "DFLL621",
  teacher: "范澤凱",
  department: "外文碩",
  time: "[一] 567",
  room: "LA3018",
};
</script>
<style lang="scss"></style>
