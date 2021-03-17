<template>
  <ul class="dashboard-info">
    <li class="dashboard-info__item currency" v-for="(value) in currency" :key="value.currency">
      <span>{{ value.name }}</span>
      <span>{{ value.price.toFixed(2) }} ₽</span>
    </li>
  </ul>
</template>

<script lang="ts">
  import axios from 'axios';

  export default {
    name: 'Currency',
    data() {
      return {
        currency: [],
        errors: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/quote/USDRUB,EURRUB?apikey=2bb568f919ef88d57c59ffefff64b788');

        this.currency = response.data;
      } catch(error) {
        this.errors.push(error);
      }
    }
  }
</script>

<style scoped>
  .dashboard-info .currency {
    @apply justify-between;
  }
</style>