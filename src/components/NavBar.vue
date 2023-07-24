
<template>
  <div class="navbar flex justify-between items-center">
    <div class="title flex items-center ">
      <img src="@/assets/images/logo.png">
      <h1 class="mr-4 text-white font-bold">NSYSU選課小幫手</h1>
      <div class="flex items-center relative" style="width: 500px;">
        <img src="@/assets/images/magnifier.png" class="navbar-icon absolute left-2">
        <input type="text" class="navbar-textbox text-white pl-10 w-full placeholder:text-white font-bold" placeholder="搜尋「課程名稱」、「課程代碼」、「教師姓名」
">
        <img src="@/assets/images/wrong-white.png" class=" absolute right-2">
      </div>
    </div>
    <div class="text-2xl ul-list flex text-white font-bold">
      <div class="mr-4">Hello！王小明</div>
      <div>會員登出</div>
    </div>
  </div>
</template>

<style lang="scss">
.navbar {
  background: #19647E;
  line-height: 100px;
  max-height: 100px;
  padding: 0 10px;

  .title {

    img {
      max-width: 80px;
    }

    h1 {
      font-size: 30px;
    }

    .navbar-icon {
      width: 22px;
      height: 22px;
    }
  }

  &-textbox {
    border-radius: 3px;
    background-color: #97ABB1;
    height: 35px;
  }
}
</style>
