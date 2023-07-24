
<template>
  <NavBar></NavBar>
  <main class="flex pl-3 pr-3 gap-2">
    <LikeCourse></LikeCourse>
    <DepartmentCourse></DepartmentCourse>
  </main>
</template>
<script setup>
import NavBar from './components/NavBar.vue'
import LikeCourse from './components/LikeCourse.vue'
import DepartmentCourse from './components/DepartmentCourse.vue'
</script>
<style>
#app {
  max-width: 1920px;
  margin: 0 auto;
}

main {
  display: flex;
}
</style>
