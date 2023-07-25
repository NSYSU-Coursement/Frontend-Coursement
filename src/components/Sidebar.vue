<template>
    <div class="sidebar transition bg-white duration-150 ease-out fixed top-0 h-screen z-20 min-w-[450px]"
        :class="{ 'translate-x-0': $store.isOpen, 'translate-x-[-100%]': !$store.isOpen }">
        <div class="sidebar-head bg-[#19647E] flex justify-start items-center min-h-[250px] w-full">
            <img src="@/assets/images/user.png">
            <div class="text">
                <P class=" text-white font-bold text-2xl mb-3">Hello 王小明！</P>
                <P class=" text-white font-bold text-2xl cursor-pointer">會員登出</P>
            </div>
        </div>
        <div class="sidebar-body p-4">
            <div class="title text-4xl font-bold mb-3 flex">
                <img class="icon mr-4" src="@/assets/images/heart-full.png" />已收藏課程
            </div>
            <div class="course-like-list-container flex flex-col overflow-y-auto overflow-x-hidden">
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
    </div>
    <div class="landing fixed left-0 top-0 z-10 w-full h-screen" @click="$store.burgerToggle" v-show="$store.isOpen"></div>
</template>
<script setup>
import { useBurgerStore } from '@/store/burger';
import LikeCourseList from "@/components/LikeCourseList.vue";
const $store = useBurgerStore()
</script>
<style lang=scss>
.course-like-list-container {
    border-top: 5px solid #cdcdcd;
    border-bottom: 5px solid #cdcdcd;
    border-left: 10px solid #cdcdcd;
    border-right: 10px solid #cdcdcd;
    max-height: 400px;
}

.landing {
    background-color: rgba($color: #000000, $alpha: .3);
}
</style>