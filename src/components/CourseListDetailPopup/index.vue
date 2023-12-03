<template>
  <Teleport to="body">
    <div
      v-if="courseListDetailPopupShow"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        class="model-overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
        @click="$emit('closePopup')"
      ></div>
      <div
        class="model-container rounded-md shadow-md bg-white w-96 lg:h-[600px] h-[90%] lg:min-w-[960px] min-w-[80%] mx-auto px-8 py-4 z-50 relative overflow-y-auto"
      >
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 w-full">
            <h2 class="lg:text-4xl text-3xl mb-2">{{ props.data.name }}</h2>
            <div class="flex">
              <div class=" w-full">
                <div
                  class="lg:text-3xl text-2xl mt-4 mb-4 bg-slate-200 text-black py-4 px-4 rounded lg:max-w-[400px]"
                >
                  <p>課程代號：{{ props.data.code }}</p>
                  <p>課程教師：{{ props.data.teacher }}</p>
                  <p>課程單位：{{ props.data.department }}</p>
                  <p>課程時間：{{ props.data.time }}</p>
                  <p>課程教室：{{ props.data.room }}</p>
                </div>
                <div class="">
                  <div class="img flex mb-4 items-center">
                    <img src="@/assets/images/comment.png" alt="" />
                    <p class="lg:text-4xl text-3xl ml-2">綜合評價</p>
                  </div>
                  <div
                    class="w-full text-2xl border-gray-400 border rounded p-4 lg:max-w-[400px]"
                  >
                    <div class="flex mb-2 items-center gap-2">
                      <p class="w-[60px]">收穫</p>
                      <Progress :data="reward"></Progress>
                    </div>
                    <div class="flex mb-2 items-center gap-2">
                      <p class="w-[60px]">甜度</p>
                      <Progress :data="sweet"></Progress>
                    </div>
                    <div class="flex items-center gap-2">
                      <p class="w-[60px]">涼度</p>
                      <Progress :data="cool"></Progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 w-full mt-5">
            <button
              @click="$emit('closePopup')"
              class="absolute top-0 right-2 text-gray font-bold py-2 px-4 lg:text-4xl text-2xl rounded"
            >
              X
            </button>
            <div class="flex items-center content-start lg:text-4xl text-3xl mb-2">
              <img src="@/assets/images/light.png" />
              <h4>同學怎麼說</h4>
            </div>
            <div class="overflow-y-auto max-h-[400px] mb-2">
              <div
                class="comment bg-[#8cb8ba] p-2 rounded mb-2 text-2xl"
                v-for="comment in fakeComment"
                :key="comment.id"
              >
                <p>{{ comment.time }}</p>
                <p>{{ comment.content }}</p>
              </div>
            </div>
            <div
              @click="WriteCommentHandlerPopup"
              class="w-full h-[80px] text-1xl text-gray-400 p-2 border-gray-400 border rounded relative text-2xl cursor-pointer"
            >
              換你說說話！
              <img
                src="@/assets/images/send.png"
                class="absolute right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
      <WriteCommentPopup
        :write-comment-popup-show="WriteCommentPopupToggle"
        @close-popup="closePopup"
      ></WriteCommentPopup>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, ref } from "vue";
import Progress from "@/components/ProgressBar/index.vue";
import WriteCommentPopup from "@/components/WriteCommentPopup/index.vue";
const props = defineProps({
  courseListDetailPopupShow: Boolean,
  data: Object,
});
const WriteCommentPopupToggle = ref(false);
const WriteCommentHandlerPopup = () => {
  WriteCommentPopupToggle.value = !WriteCommentPopupToggle.value;
};
//fakeData
const reward = ref(3);
const sweet = ref(6);
const cool = ref(7);
const fakeComment = [
  {
    id: 0,
    time: "111-1 學期",
    content:
      "老師上課很用心，如果認真聽課可以有很大的收穫！分數方面也不用太擔心，老師人很好，我上學期都有到期末就是A+。",
  },
  {
    id: 1,
    time: "111-2 學期",
    content:
      "甜甜涼涼的學分，超級適合缺學分的我~基本上不要太常翹課分數都不會太難看，蠻適合用來拚GPA的 ！",
  },
  {
    id: 3,
    time: "111-2 學期",
    content:
      "甜甜涼涼的學分，超級適合缺學分的我~基本上不要太常翹課分數都不會太難看，蠻適合用來拚GPA的 ！",
  },
  {
    id: 4,
    time: "111-2 學期",
    content:
      "甜甜涼涼的學分，超級適合缺學分的我~基本上不要太常翹課分數都不會太難看，蠻適合用來拚GPA的 ！",
  },
  {
    id: 5,
    time: "111-2 學期",
    content:
      "甜甜涼涼的學分，超級適合缺學分的我~基本上不要太常翹課分數都不會太難看，蠻適合用來拚GPA的 ！",
  },
];
const closePopup = () => {
  WriteCommentPopupToggle.value = false;
};
</script>

<style lang="scss" scoped></style>
