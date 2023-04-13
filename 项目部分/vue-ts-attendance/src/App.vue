<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </header>
  <el-button type="primary">点击</el-button>
  <RouterView />
</template>

<style scoped></style>
