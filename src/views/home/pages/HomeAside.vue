<script setup lang="ts">
import MenuNav from '../components/MenuNav.vue'

const menus = [
  {
    name: '系统总览',
    icon: 'IconEpRefresh',
    path: '/system',
    children: [
      {
        name: '系统技术',
        path: '/system/technology',
        icon: 'IconEpLocation',
      },
    ],
  },
]
</script>

<template>
  <div class="home-aside">
    <el-menu>
      <MenuNav :menus="menus" />
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.home-aside {
  height: 100%;
  border-right: 1px solid var(--line-color);
  // background-color: #001529;

  .el-menu {
    border: none;
  }
}
</style>
