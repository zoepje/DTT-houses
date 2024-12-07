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
  header {
    position: fixed;
    bottom: 0;
  }

  main {
    height: 100vh;
  }

  @media only screen and (min-width: 600px){
    header {
      position: sticky;
      top: 0;
    }
  }
</style>
