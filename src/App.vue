<script setup>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

import { LINKS, APP } from '@/constants/index.js';

const title = 'Template';


</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <div class="wrapper-content">
      <div class="container">
        <div class="view-sm isCenter">
          <RouterView />
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
</style>
