<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Card from '@/components/UI/Card.vue';
import items from '@/seeders/items.json';
import CardFooter from '@/pages/CardFooter.vue';

const breakpoints = {
  300: {
    itemsToShow: 1,
  },
  700: {
    itemsToShow: 2,
  }
};

</script>

<template>
  <carousel wrap-around :breakpoints="breakpoints">
    <slide class="card__wrapper"
           v-for="item in items"
           :key="item.id">
      <Card :name="`${item.lvl} lvl`"
            :title="item.title"
            :imgUrl="item.img" :link="`/${item.alias}`"
      >
        <template v-slot:body>
          {{ item.desc }}
        </template>
        <template v-slot:footer>
          <CardFooter :item="item"/>
        </template>
      </Card>
    </slide>
    <!--  addons  -->
    <template #addons>
      <navigation/>
    </template>
  </carousel>
</template>

<style scoped>

</style>
