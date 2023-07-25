
<template>
  <div class="navbar flex relative items-center lg:justify-between justify-center mb-4 px-4">
    <div class="button burger cursor-pointer lg:hidden block absolute left-10">
      <img src="@/assets/images/burger.png">
    </div>
    <div class="title flex items-center">
      <img src="@/assets/images/logo-white.png">
      <h1 class="mr-4 text-white font-bold">NSYSU選課小幫手</h1>
      <NavbarTextBox class="hidden lg:flex"></NavbarTextBox>
    </div>
    <div class="text-2xl ul-list text-white font-bold hidden lg:flex">
      <div class="mr-4">Hello！王小明</div>
      <div class="cursor-pointer">會員登出</div>
    </div>
  </div>
</template>
<script setup>
import NavbarTextBox from './NavbarTextBox/index.vue'
</script>
<style lang="scss">
.navbar {
  background: #19647E;
  line-height: 100px;
  max-height: 100px;


  .title {

    img {
      max-width: 80px;
    }

    h1 {
      font-size: 30px;
    }
  }

  &-icon {
    width: 22px;
    height: 22px;
  }

  &-textbox-container {
    width: 450px;
  }

  &-textbox {
    background-color: #97ABB1;
  }
}

@media screen and (max-width:1140px) {
  .navbar {
    line-height: 60px;
  }
}
</style>
