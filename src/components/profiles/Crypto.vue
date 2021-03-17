<template>
  <ul class="dashboard-info">
    <li class="dashboard-info__item currency" v-for="(value) in cryptos" :key="value.cryptos">
      <span>{{ value.name }}</span>
      <span>{{ value.price.toFixed(2) }} $</span>
    </li>
  </ul>
</template>

<script lang="ts">
  import axios from 'axios';

  export default {
    name: 'Crypto',
    data() {
      return {
        cryptos: [],
        errors: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/quote/BTCUSD,ETHUSD?apikey=2bb568f919ef88d57c59ffefff64b788');

        this.cryptos = response.data;
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