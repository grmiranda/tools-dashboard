<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<style>
/* ADICIONANDO A FONTE PADRÃO DO PROJETO: MONTSERRAT */
@import url("assets/fonts/montserrat/Montserrat.scss");
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
