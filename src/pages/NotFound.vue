<script setup>
import { ROUTERS_PATH } from '@/constants/index.js';
</script>

<template>
  <div class="wrapper">
    <h2 class="title">404 NOT FOUND</h2>
    <router-link :to="ROUTERS_PATH.HOME">
      <button class="btn btnPrimary">Back to home</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
}

.btnPrimary {
  background-color: #ec9b3b;
  border-color: #ec9b3b;
}

.title {
  color: #fff;
}
</style>
