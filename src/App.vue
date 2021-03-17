<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
  import PageAdmin from './views/PageAdmin.vue';
  import PageClient from './views/PageClient.vue';
  import Header from './components/Header.vue';

  export default {
    name: 'Dashboard',
    components: { Header, PageAdmin, PageClient },
    watch: {
      $route: {
        immediate: true,
        handler(to, from) {
          document.title = to.meta.title || 'Брокерская кампания';
        }
      },
    }
  }
</script>
