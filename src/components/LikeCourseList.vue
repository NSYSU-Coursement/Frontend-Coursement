<template>
  <div class="list p-2 flex items-center hover:bg-slate-300 cursor-pointer">
    <img class="star icon mr-4 cursor-pointer" src="@/assets/images/star.png" />
    <div class="department-circle flex items-center justify-center font-bold text-xl px-4 py-3 mr-4">
      外
    </div>
    <div class="course font-bold text-xl">112世紀美國戲劇</div>
  </div>
</template>
<style lang="scss">
.list {
  border-top: 5px solid #cdcdcd;
  border-bottom: 5px solid #cdcdcd;
  background: #f7f7f7;

  .department-circle {
    border-radius: 100%;
    background-color: #fffdee;
  }
}
</style>
