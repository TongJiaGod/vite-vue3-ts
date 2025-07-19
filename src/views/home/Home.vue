<script setup lang="ts">
import HomeAside from './components/HomeAside.vue'
import HomeHeader from './components/HomeHeader.vue'
</script>

<template>
  <div class="home">
    <el-container>
      <el-header><home-header /></el-header>

      <el-container class="main-container">
        <el-aside width="200px"><home-aside /></el-aside>

        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.home {
  height: 100vh;
  .el-header {
    border-bottom: 1px solid var(--line-color);
  }

  .main-container {
    height: calc(100vh - 60px);
  }
}
</style>
