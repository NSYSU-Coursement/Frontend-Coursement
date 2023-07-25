
<template>
    <div class="slider lg:w-8/12 w-full">
        <NavbarTextBox class="lg:hidden flex mx-auto mb-4"></NavbarTextBox>
        <div><img class="bg-cover" src="@/assets/images/slider.png"></div>
        <DepartmentTextBox class="lg:hidden block"></DepartmentTextBox>
        <SortSelect></SortSelect>
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
import CourseList from '@/components/CourseList.vue';
import NavbarTextBox from '@/components/NavbarTextBox/index.vue';
import DepartmentTextBox from '@/components/DepartmentTextBox/index.vue';
import SortSelect from '@/components/SortSelect/index.vue';
</script>
<style lang="scss"></style>
  