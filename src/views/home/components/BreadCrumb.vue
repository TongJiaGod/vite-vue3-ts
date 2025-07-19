<script setup lang="ts">
const menus = [
  {
    name: '系统总览',
    path: '/system',
  },
  {
    name: '核心技术',
    path: '/core',
  },
]
</script>

<template>
  <div class="bread-crumb flex">
    <div class="home">
      <a href="/">首页</a>
    </div>
    <el-breadcrumb separator="/" class="ellipsis">
      <template v-for="item in menus" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
.bread-crumb {
  line-height: 60px;
  font-size: 14px;

  .home {
    margin-right: 10px;
    font-weight: 600;
  }

  .el-breadcrumb {
    display: flex;
    width: 160px;
  }
}
</style>
