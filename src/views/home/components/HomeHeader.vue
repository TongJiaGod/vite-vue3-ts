<script setup lang="ts">
import BreadCrumb from './headerComp/BreadCrumb.vue'
import Logo from './headerComp/Logo.vue'
BreadCrumb
</script>

<template>
  <div class="home-header">
    <logo />
    <bread-crumb />
  </div>
</template>

<style scoped lang="scss">
.home-header {
  display: flex;
  height: 60px;
}
</style>
