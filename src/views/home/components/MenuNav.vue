<script setup lang="ts">
import type { IMenu } from '@/types'

const props = defineProps({
  menus: {
    type: Array<IMenu>,
    default: () => [],
  },
})
</script>

<script lang="ts">
export default defineComponent({
  components: {
    IconEpRefresh,
    IconEpLocation,
  },
})
</script>

<template>
  <div class="menu-nav">
    <template v-for="menu in menus" :key="menu.name">
      <el-sub-menu :index="menu.path" v-if="menu.children">
        <template #title>
          <component :is="menu.icon" />
          <span class="menu-name">{{ menu.name }}</span>
        </template>
        <menu-nav :menus="menu.children" />
      </el-sub-menu>
      <el-menu-item :index="menu.path" v-else>
        <component :is="menu.icon" />
        <span class="menu-name">{{ menu.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<style scoped lang="scss">
.menu-nav {
  .menu-name {
    margin-left: 10px;
  }
}
</style>
