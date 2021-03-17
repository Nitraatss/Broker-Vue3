<template>
  <div>
    <div class="dashboard-info">
      <div class="dashboard-info__item">
        <div class="dashboard-info__icon">
          <IconDeal />
        </div>
        <h3 class="dashboard-info__title"><span>Количество активов</span>37</h3>
      </div>
      <div class="dashboard-info__item">
        <div class="dashboard-info__icon">
          <IconMoney />
        </div>
        <h3 class="dashboard-info__title"><span>Сумма активов (RUB)</span>1000000 ₽</h3>
      </div>
      <div class="dashboard-info__item">
        <div class="dashboard-info__icon">
          <IconMoney />
        </div>
        <h3 class="dashboard-info__title"><span>Сумма активов (USD)</span>300 $</h3>
      </div>
      <div class="dashboard-info__item">
        <div class="dashboard-info__icon">
          <IconProfit />
        </div>
        <h3 class="dashboard-info__title"><span>Доход за сегодня</span>+3%</h3>
      </div>
    </div>
  </div>

  <h3 class="title">Валюты</h3>
  <Currency />

  <h3 class="title">Криптовалюты</h3>
  <Crypto />

  <h3 class="title">Акции</h3>
  <Stock />

  <h3 class="title">Календарь дивидендов</h3>
  <Dividends />

  <h3 class="title">Загрузка документа</h3>
  <FormUpload />
</template>

<script lang="ts">
  import IconDeal from '../components/icons/IconDeal.vue';
  import IconMoney from '../components/icons/IconMoney.vue';
  import IconProfit from '../components/icons/IconProfit.vue';
  import FormUpload from '../components/FormUpload.vue';
  import Currency from '../components/clients/Currency.vue';
  import Crypto from '../components/clients/Crypto.vue';
  import Stock from '../components/clients/Stock.vue';
  import Dividends from '../components/clients/Dividends.vue'

  export default {
    name: 'ClientPage',
    components: { IconProfit, IconMoney, IconDeal, FormUpload, Currency, Crypto, Stock, Dividends }
  }
</script>