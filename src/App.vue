<template>
  <div class="">
    <NavBar></NavBar>
    <Sidebar></Sidebar>
    <main class="flex pl-3 pr-3 gap-2">
      <LikeCourse></LikeCourse>
      <DepartmentCourse></DepartmentCourse>
    </main>
  </div>
</template>
<script setup>
import NavBar from "@/components/NavBar.vue";
import LikeCourse from "@/components/LikeCourse.vue";
import DepartmentCourse from "@/components/DepartmentCourse.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>
<style>
#app {
  min-width: 500px;
  max-width: 1920px;
  margin: 0 auto;
}

main {
  display: flex;
}
</style>
