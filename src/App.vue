<script setup>
  import Navigation from './components/Navigation.vue'
</script>

<template>
  <header>
    <Navigation/>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
  header{
    position: sticky;
    top: 0;
  }

  main {
    height: 100vh;
  }
</style>
