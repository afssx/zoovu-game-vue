<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #app::after {
    content: "";
    background-image: url(./assets/logo.svg);
    width: 100%;
    max-width: 900px;
    height: 430px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
    background-position: 5% 20%;
    background-size: 89%;
    background-repeat: no-repeat;
  }
</style>
