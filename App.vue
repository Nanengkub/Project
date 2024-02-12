<template>
  <nav>
    <router-link to="/login">LOGIN</router-link> |
    <router-link to="/First">HOME</router-link> |
    <router-link to="/Q1">Q1</router-link> |
    <router-link to="/Q2">Q2</router-link> |
    <router-link to="/Q3">Q3</router-link> |
    <router-link to="/Q4">Q4</router-link> |
    <router-link to="/Q5">Q5</router-link> |
    <router-link to="/end">END</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
