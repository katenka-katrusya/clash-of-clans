<script setup>
import { LINKS, APP } from '@/constants/index.js';
import {ROUTERS_PATH} from '@/constants/index.js';
</script>

<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link :to="ROUTERS_PATH.HOME" class="navbar-logo">{{ APP.title }}</router-link>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in LINKS" :key="link.alias">
            <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
