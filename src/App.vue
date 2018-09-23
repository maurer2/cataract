<template>
  <article class="layout">
    <PupilsComponent class="column"></PupilsComponent>
    <MainComponent class="column"></MainComponent>
    <SlideTextComponent class="column column--full"></SlideTextComponent>
  </article>
</template>

<script lang="ts">
// https://alligator.io/vuejs/typescript-class-components/
import { Component, Vue } from 'vue-property-decorator';
import MainComponent from './components/MainComponent.vue';
import PupilsComponent from './components/PupilsComponent.vue';
import SlideTextComponent from './components/SlideTextComponent.vue';

@Component({
  components: {
      MainComponent, PupilsComponent, SlideTextComponent
  },
})
export default class App extends Vue {
  constructor() {
    super();
  }
}
</script>

<style lang="pcss">
  :root {
    --background: #a9a9a9;
    --background-secondary: #c3c3c3;
    --foreground: #c13c86;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    height: 100%;
    font-size: 1rem;
    box-sizing: border-box;
    background: var(--background);
  }

  body {
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }

  .layout {
    display: flex;
    max-width: 90vw;
    flex-wrap: wrap;
    background: var(--background-secondary);
    color: var(--foreground);
  }

  .column {
    margin: 2rem;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
  }

  .column--full {
    flex-basis: 100%; // force break to new line
  }
</style>
