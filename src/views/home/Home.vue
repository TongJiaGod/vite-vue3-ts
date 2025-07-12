<script setup lang="ts">
import HomeAside from './components/HomeAside.vue'
import HomeHeader from './components/HomeHeader.vue'
</script>

<template>
  <div class="home">
    <el-container>
      <el-header><home-header /></el-header>

      <el-container>
        <el-aside width="200px"><home-aside /></el-aside>

        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.home {
  width: 100%;
}
</style>
