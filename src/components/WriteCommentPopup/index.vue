<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-50"
    v-show="writeCommentPopupShow"
  >
    <div
      class="model-overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
      @click="$emit('closePopup')"
    ></div>
    <div
      class="model-container rounded-md shadow-md bg-white w-96 lg:h-[500px] h-[60%] lg:min-w-[1000px] mx-auto px-8 py-12 z-50 relative"
    >
      <div class="flex lg:flex-row flex-col h-full lg:gap-16 gap-2">
        <div class="lg:w-1/2 w-full h-full">
          <textarea
            type="text"
            class="w-full resize-none h-full text-1xl text-gray-400 p-2 border-gray-400 border rounded relative text-xl"
            placeholder="換你說說話！"
          ></textarea>
        </div>
        <div class="lg:w-1/2 w-full mt-5">
          <button
            @click="$emit('closePopup')"
            class="absolute top-0 right-2 text-gray font-bold py-2 px-4 lg:text-4xl text-2xl rounded"
          >
            X
          </button>
          <div class="h-full">
            <div class="img flex mb-4 items-center">
              <img src="@/assets/images/comment.png" alt="" />
              <p class="lg:text-4xl text-2xl ml-2">綜合評價</p>
            </div>
            <div class="w-full text-xl rounded py-4">
              <div class="flex mb-2 items-center gap-2">
                <p class="w-[60px]">收穫</p>
                <Progress :data="reward" :can-drag="true"></Progress>
              </div>
              <div class="flex mb-2 items-center gap-2">
                <p class="w-[60px]">甜度</p>
                <Progress :data="sweet" :can-drag="true"></Progress>
              </div>
              <div class="flex mb-2 items-center gap-2">
                <p class="w-[60px]">涼度</p>
                <Progress :data="cool" :can-drag="true"></Progress>
              </div>
            </div>
            <select class="sortSelect w-[150px] h-[40px] border-2 border-gray-300 font-bold">
              <option v-for="(year, i) in yearPicker" :key="i">
                {{ year }}
              </option>
            </select>
            <button
              class="button absolute bottom-4 lg:bottom-10 right-10 bg-[#19647E] rounded text-white text-2xl py-2 px-4"
            >
              送出
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Progress from "@/components/ProgressBar/index.vue";
import { defineProps, ref } from "vue";
const reward = ref(3);
const sweet = ref(4);
const cool = ref(5);
const props = defineProps({
  writeCommentPopupShow: Boolean,
});
const yearPicker = ["110上學期", "110下學期", "111上學期", "111下學期"];
</script>
