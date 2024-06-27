<script setup>
import Card from '@/components/UI/Card.vue';
import items from '@/seeders/items.json';

</script>

<template>
  <div class="md-body">
    <div class="card__wrapper"
         v-for="item in items"
         :key="item.id">
      <Card :name="`${item.lvl} lvl`"
            :title="item.title"
            :imgUrl="item.img" :link="`/${item.alias}`">
        <template v-slot:body>
          {{ item.desc }}
        </template>
        <template v-slot:footer>
          <div class="card-stats">
            <div class="one-third"
                 v-for="(stat, index) in item.info"
                 :key="index">
              <p class="stat">{{stat.title}}</p>
              <span class="stat-value">{{stat.value}}</span>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
