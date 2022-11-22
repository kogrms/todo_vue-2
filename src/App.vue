<template>
  <div id="app">
    <h1>Todo application</h1>
    <hr />
    <router-view />
    <footer>&copy; 2022 Konstantin Babushkin</footer>
  </div>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
