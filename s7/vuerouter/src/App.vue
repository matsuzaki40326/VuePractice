<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about" exact-active-class="test">About</router-link> |
      <!-- <router-link to="/about" tag="button">About</router-link> -->
      <router-link to="/book">BookList</router-link> |
      <router-link to="/item/1">Item</router-link> |
      <router-link to="/user/profile">User</router-link>
    </nav>
    <div class="vue-b"></div>
    <router-view />
    <router-view  name="sub" />
  </div>
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

nav a.router-link-active {
  color: red;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a.test {
  color: lightblue;
}

.vue-b {
  border: #42b983 1px solid;
}
</style>
