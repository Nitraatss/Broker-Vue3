<template>
  <div class="profile">
    <div class="profile__column">
      <h2 class="profile__name">{{ TableData[$route.params.id].name }}</h2>
      <span class="profile__email">{{ TableData[$route.params.id].email }}</span>
      <span :class="`px-3 text-xs leading-5 bg-${TableData[$route.params.id].statusColor}-100 text-${TableData[$route.params.id].statusColor}-700 inline-flex rounded-full`">{{ TableData[$route.params.id].status }}</span>
    </div>
    <div class="profile__column">
      <h3 class="title">Валюты</h3>
      <Currency />

      <h3 class="title">Криптовалюты</h3>
      <Crypto />

      <h3 class="title">Акции</h3>
      <Stock />
    </div>
  </div>
</template>

<script lang="ts">
  import { useTableData } from '../interfaces/useTableData';
  import Currency from '../components/profiles/Currency.vue';
  import Crypto from '../components/profiles/Crypto.vue';
  import Stock from '../components/profiles/Stock.vue';

  export default {
    name: 'ClientProfilePage',
    components: { Currency, Crypto, Stock },
    setup() {
      const { TableData } = useTableData();

      return { TableData }
    }
  }
</script>

<style scoped>
  .profile {
    @apply flex flex-row align-top;
  }

  .profile__column {
    @apply flex flex-col justify-start bg-white items-start rounded-md px-8 py-4;
  }

  .profile__column:first-of-type {
    @apply w-4/12 mr-4;
  }

  .profile__column:last-of-type {
    @apply w-8/12;
  }

  .profile__name {
    @apply mb-4 font-medium;
  }

  .profile__email {
    @apply mb-4;
  }
</style>