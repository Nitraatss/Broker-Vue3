<template>
  <header>
    <div class="header">
      <h1 class="logo">Брокерская кампания</h1>
      <div>
        <button class="btn" type="button" @click="$toast.info(`W.I.P.`);">Уведомления</button>
      </div>
    </div>

    <div class="box-role">
      <h2 class="box-role__title">{{ $route.name }}</h2>
      <div>
        <router-link class="btn-role" to="/">Администратор</router-link>
        <router-link class="btn-role" to="/client">Клиент</router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  export default {
    name: 'Header',
  }
</script>

<style scoped>
  .box-role {
    @apply bg-white flex justify-between items-center rounded-md mb-6;
  }

  .box-role__title {
    @apply px-8 py-4 font-medium;
  }

  .btn-role {
    @apply border-l border-gray-300 px-8 py-5 text-sm text-gray-700;
  }
</style>