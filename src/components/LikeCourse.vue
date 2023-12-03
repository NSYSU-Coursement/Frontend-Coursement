<template>
  <div class="department items-center w-4/12 lg:block hidden">
    <DepartmentTextBox></DepartmentTextBox>
    <div class="title lg:text-4xl text-2xl font-bold mb-3 flex">
      <img class="icon mr-4" src="@/assets/images/heart-full.png" />已收藏課程
    </div>
    <div
      class="course-list-container flex flex-col overflow-y-auto overflow-x-hidden"
    >
      <div class="" v-if="fakeData">
        <CourseList
          :list-is-course-list="false"
          :courseData="fakeData"
        ></CourseList>
        <CourseList
          :list-is-course-list="false"
          :courseData="fakeData"
        ></CourseList>
        <CourseList
          :list-is-course-list="false"
          :courseData="fakeData"
        ></CourseList>
        <CourseList
          :list-is-course-list="false"
          :courseData="fakeData"
        ></CourseList>
        <CourseList
          :list-is-course-list="false"
          :courseData="fakeData"
        ></CourseList>
      </div>
      <div class="" v-else>
        <div
          @click="courseListDetailPopupToggle"
          class="courseList p-6 flex items-center justify-between bg-white cursor-pointer hover:bg-slate-300"
        >
          <div class="flex items-center">
            <div class="course font-bold lg:text-2xl md:text-xl text-base">
              尚未有喜好課程！
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CourseList from "@/components/CourseList.vue";
import DepartmentTextBox from "@/components/DepartmentTextBox/index.vue";
const fakeData = {
  name: "112 二十世紀美國戲劇",
  code: "DFLL621",
  teacher: "范澤凱",
  department: "外文碩",
  time: "[一] 567",
  room: "LA3018",
};
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
