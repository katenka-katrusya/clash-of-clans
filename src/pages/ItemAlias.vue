<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ROUTERS_PATH } from '@/constants/index.js';
import items from '@/seeders/items.json';
import NotFound from '@/pages/NotFound.vue';

const route = useRoute();
const router = useRouter();

const item = computed(() => {
  const alias = route.params.ItemAlias;
  return items.find(el => el.alias === alias);
});

if (!item.value) {
  router.push({name: 'NotFound'});
}
</script>

<template>
  <div class="person__wrapper">
    <div v-if="item">
      <img :src="item.img" :alt="item.desc">
      <h1 class="title person__title">{{ item.title }}</h1>
      <p class="person__desc">{{ item.desc }}</p>

      <div class="card-stats">
        <div class="one-third"
             v-for="(stat, index) in item.info"
             :key="index">
          <p class="stat">{{stat.title}}</p>
          <span class="stat-value">{{stat.value}}</span>
        </div>
      </div>

      <router-link :to="ROUTERS_PATH.HOME">
        <button class="btn btnPrimary">Back to home</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.person {
  &__wrapper {
    margin: 0 auto;
    text-align: center;
    max-width: 900px;
  }

  &__title {
    margin-top: 20px;

    color: #fff;
  }

  &__desc {
    margin-bottom: 20px;
  }
}

.card-stats {
  margin-bottom: 20px;
  border-radius: 14px;
}

.btnPrimary {
  background-color: #ec9b3b;
  border-color: #ec9b3b;
}
</style>
