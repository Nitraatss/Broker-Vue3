<template>
  <div class="box-stock">
    <div  class="box-stock__item" v-for="(value) in stock" :key="value.stock">
      <div class="box-stock__title">
        <div class="box-stock__img">
          <img :src="'https://financialmodelingprep.com/image-stock/' + value.symbol + '.png'" :alt="value.companyName">
        </div>

        <h3>
          {{ value.companyName }} <span>{{ value.symbol }}</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from 'axios';

  export default {
    name: 'Stock',
    data() {
      return {
        stock: [],
        errors: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=24&apikey=2bb568f919ef88d57c59ffefff64b788');

        this.stock = response.data;
      } catch(error) {
        this.errors.push(error);
      }
    }
  }
</script>

<style scoped>
  .box-stock {
    @apply grid grid-cols-4 gap-4 mb-6;
  }

  .box-stock__item {
    @apply bg-white rounded-md flex-1 px-8 py-4 flex items-center justify-between;
  }

  .box-stock__title {
    @apply flex items-center w-8/12;
  }

  .box-stock__title h3 {
    @apply truncate;
  }

  .box-stock__title span {
     @apply block text-gray-400 text-sm;
  }

  .box-stock__img {
     @apply overflow-hidden mr-4 h-8 w-8 flex-shrink-0;
  }

  .box-stock__img img {
     @apply h-8 w-8 object-contain;
  }

  .box-stock__price {
    @apply w-4/12 text-right;
  }
</style>