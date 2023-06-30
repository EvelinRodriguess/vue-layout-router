<script setup>
</script>

<template>
  <header>HEADER</header>
  <aside>
    <nav class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/a">A</router-link>
      <router-link to="/e">E</router-link>
      <router-link class="gamer" to="/gamer">Gamer</router-link>
    </nav>
  </aside>
  <main>
    <router-view />
  </main>
  <footer>FOOTER</footer>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.gamer {
background-color: black;
border-style: groove;
border-radius: 5px;
border-width: 7px;
text-align: center;
align-items: center;
font-size: 60px;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>
