<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/houses">Houses</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    height: fit-content;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
</style>