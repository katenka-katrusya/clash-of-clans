<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card-stats">
    <div class="one-third"
         v-for="(stat, index) in item.info"
         :key="index"
    >
      <p class="stat">{{ stat.title }}</p>
      <span class="stat-value">{{ stat.value }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
