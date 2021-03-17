<template>
  <table class="dividends-table">
    <thead>
      <tr class="dividends-table__row">
        <th class="dividends-table__header">Дата объявления</th>
        <th class="dividends-table__header">Дата закрытия реестра</th>
        <th class="dividends-table__header">Дата выплат</th>
        <th class="dividends-table__header">Тикер</th>
        <th class="dividends-table__header">Размер выплат</th>
      </tr>
    </thead>
    <tbody>
      <tr class="dividends-table__row" v-for="(value) in dividends.slice(0, 10)" :key="value.dividends">
        <td class="dividends-table__data">{{value.declarationDate}}</td>
        <td class="dividends-table__data">{{value.recordDate}}</td>
        <td class="dividends-table__data">{{value.paymentDate}}</td>
        <td class="dividends-table__data">{{value.symbol}}</td>
        <td class="dividends-table__data">{{value.dividend}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import axios from 'axios';

  export default {
    name: 'Dividends',
    data() {
      return {
        dividends: [],
        errors: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/stock_dividend_calendar?from=2020-06-01&to=2020-09-10&apikey=2bb568f919ef88d57c59ffefff64b788');

        this.dividends = response.data;
      } catch(error) {
        this.errors.push(error);
      }
    }
  }
</script>

<style scoped>
  .dividends-table {
    @apply table w-full mr-auto mb-8;
  }

  .dividends-table__row {
    @apply table-row;
  }

  .dividends-table__header {
    @apply table-cell px-2 py-2 text-center text-gray-400 font-medium;
  }

  .dividends-table__data {
    @apply table-cell px-2 py-4 text-center border-b-2 border-gray-100 bg-white;
  }
</style>