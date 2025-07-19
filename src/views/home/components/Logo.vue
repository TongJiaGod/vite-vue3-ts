<script setup lang="ts"></script>

<template>
  <div class="logo flex-center">
    <div class="logo-img">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <div class="logo-text">CMS管理</div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 100%;
  margin-right: 20px;

  &-img {
    width: 30px;
    margin-right: 10px;

    img {
      width: 100%;
    }
  }

  &-text {
    font-size: 18px;
  }
}
</style>
