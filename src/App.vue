<template>
  <div id="app">
    <CalculatorVue />
  </div>
</template>

<script>
import CalculatorVue from './components/Calculator.vue';

export default {
  name: 'Calculator-app',
  components: {
    CalculatorVue
  }
}
</script>

<style>
@font-face {
  font-family: 'Geometria';
  src: url('./assets/fonts/geometria_medium.otf') format('opentype'),
    url('./assets/fonts/geometria_bold.otf') format('opentype');
}

:root {
  --text-main: #F2F2F2;
  --text-alt: #2B589A;
}

html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: Geometria, Helvetica, Avenir, Arial, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(122.76deg, #FFA2A2 4.09%, #FF7B7B 91.04%), #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
