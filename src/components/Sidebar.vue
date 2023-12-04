<template>
  <div class="">
    <div
      class="sidebar transition bg-white duration-150 ease-out fixed top-0 h-full z-20 max-w-[410px]"
      :class="{
        'translate-x-0': $store.isOpen,
        'translate-x-[-100%]': !$store.isOpen,
      }"
    >
      <div
        class="sidebar-head bg-[#19647E] flex justify-start items-center min-h-[250px] w-full"
      >
        <img src="@/assets/images/user.png" />
        <div class="text">
          <p class="text-white font-bold text-2xl mb-3">Hello 王小明！</p>
          <p class="text-white font-bold text-2xl cursor-pointer">會員登出</p>
        </div>
      </div>
      <div class="sidebar-body p-4">
        <div class="title lg:text-4xl text-2xl font-bold my-3 flex">
          <img
            class="icon mr-4"
            src="@/assets/images/heart-full.png"
          />已收藏課程
        </div>
        <div
          class="course-like-list-container max-h-[470px] flex flex-col overflow-y-auto overflow-x-hidden"
        >
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
      </div>
    </div>
    <div
      class="landing fixed left-0 top-0 z-10 w-full h-full"
      @click="$store.burgerToggle"
      v-show="$store.isOpen"
    ></div>
  </div>
</template>
<script setup>
import { useBurgerStore } from "@/store/burger";
import CourseList from "@/components/CourseList.vue";
const fakeData = {
  name: "112 二十世紀美國戲劇",
  code: "DFLL621",
  teacher: "范澤凱",
  department: "外文碩",
  time: "[一] 567",
  room: "LA3018",
};
const $store = useBurgerStore();
</script>
<style lang="scss">
.course-like-list-container {
  border-top: 5px solid #cdcdcd;
  border-bottom: 5px solid #cdcdcd;
  border-left: 10px solid #cdcdcd;
  border-right: 10px solid #cdcdcd;
}

.landing {
  background-color: rgba($color: #000000, $alpha: 0.3);
}
</style>
