<template>
  <div class="">
    <div class="" v-if="courseData">
      <div
        @click="courseListDetailPopupToggle"
        class="courseList p-6 flex items-center justify-between bg-white cursor-pointer hover:bg-slate-300"
      >
        <div class="flex items-center">
          <starComponent
            :star-full-control="starFullIsTrue"
            @toggle-star="toggleStar"
          ></starComponent>
          <div
            class="department-circle flex justify-center items-center font-bold text-2xl px-4 py-3 mr-4"
          >
            外
          </div>
          <div class="course font-bold lg:text-2xl md:text-xl text-base">
            {{ props.courseData.name }}
          </div>
        </div>
        <div class="flex items-center" v-show="props.listIsCourseList">
          <div class="comment flex items-center mr-3">
            <p class="text-3xl font-bold mr-3">50</p>
            <img src="@/assets/images/write.png" class="icon" />
          </div>
        </div>
      </div>
      <CourseListDetailPopup
        :data="courseData"
        :course-list-detail-popup-show="courseListDetailPopupShow"
        @close-popup="closePopup"
      ></CourseListDetailPopup>
    </div>
    
    <div class="" v-else>
        <div
          @click="courseListDetailPopupToggle"
          class="courseList p-6 flex items-center justify-between bg-white cursor-pointer hover:bg-slate-300"
        >
          <div class="flex items-center">
            <div class="course font-bold lg:text-2xl md:text-xl text-base">
              資料Loading.....
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script setup>
import starComponent from "@/components/Star/index.vue";
import CourseListDetailPopup from "@/components/CourseListDetailPopup/index.vue";
import { ref, defineProps } from "vue";
const props = defineProps({
  listIsCourseList: Boolean,
  courseData: Object,
});
const starFullIsTrue = ref(false);
const courseListDetailPopupShow = ref(false);
const toggleStar = () => {
  //api串接
  starFullIsTrue.value = !starFullIsTrue.value;
};
const courseListDetailPopupToggle = () => {
  courseListDetailPopupShow.value = true;
  document.body.style.overflowY = "hidden";
};
const closePopup = () => {
  courseListDetailPopupShow.value = false;
  document.body.style.overflowY = "auto";
};
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
