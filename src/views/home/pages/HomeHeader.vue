<script setup lang="ts">
import BreadCrumb from '../components/BreadCrumb.vue'
import Logo from '../components/Logo.vue'
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
