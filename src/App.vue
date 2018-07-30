<template>
  <article class="layout">
    <header class="header">Header</header>
    <main class="main">
        <PupilsComponent></PupilsComponent>
        <MainComponent :textPlain="textPlain"></MainComponent>
    </main>
  </article>
</template>

<script lang="ts">
// https://alligator.io/vuejs/typescript-class-components/
import { Component, Vue } from 'vue-property-decorator';
import MainComponent from './components/MainComponent.vue';
import PupilsComponent from './components/PupilsComponent.vue';

@Component({
  components: {
      MainComponent, PupilsComponent
  },
})
export default class App extends Vue {
    textPlain: string | boolean = 'Lorem ipsum dolor sit amet';
}
</script>

<style lang="pcss">
  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    height: 100%;
    font-size: 16px;
    background-image: radial-gradient(salmon 20%, transparent 0);
    background-size: 2vh 2vh;
  }

  body {
    display: flex;
    margin: 0;
    min-height: 100%;
    color: #2c3e50;
  }

  .layout {
    margin: auto;
    padding: 1rem;
    flex-grow: 1;
    max-width: 980px;
    background: #c3c3c3;
  }

  .header {

  }

  .main {
    display: flex;

  }
</style>
