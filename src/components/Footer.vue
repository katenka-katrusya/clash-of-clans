<script setup>
import { LINKS } from '@/constants/index.js';
</script>

<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
        <li class="navbar-item" v-for="link in LINKS" :key="link.alias">
          <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>

</style>
