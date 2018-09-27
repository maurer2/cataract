<template>
  <article class="layout">
    <div class="row">
      <div class="column">
        <PupilsComponent></PupilsComponent>
      </div>
      <div class="column">
        <MainComponent></MainComponent>
      </div>
    </div>
    <div class="row">
      <div class="column column--auto-width">
        <strong>Morse Code:</strong>
      </div>
      <div class="column">
        <SlideTextComponent></SlideTextComponent>
      </div>
    </div>
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

<style lang="scss">
  :root {
    --background: #a9a9a9;
    --background-secondary: #c3c3c3;
    --foreground: #c13c86;
    --spacing: 15px;
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
    max-width: 90vw;
    padding: var(--spacing);
    background: var(--background-secondary);
    color: var(--foreground);
  }

  .row {
    display: flex;
    margin: calc(var(--spacing) * -1);
  }

  .column {
    padding: var(--spacing);
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
  }

  .column--auto-width {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
  }
</style>
