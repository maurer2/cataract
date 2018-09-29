<template>
  <article class="layout">
    <div class="row row--valign">
      <div class="column">
        <PupilsComponent></PupilsComponent>
      </div>
      <div class="column">
        <ControlComponent></ControlComponent>
      </div>
    </div>
    <transition name="fade">
      <div class="row" v-if="showSlideComponenRow">
        <div class="column column--auto-width">
          <strong>Morse Code:</strong>
        </div>
        <div class="column">
          <SlideTextComponent></SlideTextComponent>
        </div>
      </div>
    </transition>
  </article>
</template>

<script lang="ts">
// https://alligator.io/vuejs/typescript-class-components/
import { Component, Vue } from 'vue-property-decorator';
import ControlComponent from './components/ControlComponent.vue';
import PupilsComponent from './components/PupilsComponent.vue';
import SlideTextComponent from './components/SlideTextComponent.vue';

@Component({
  components: {
      ControlComponent, PupilsComponent, SlideTextComponent
  },
})
export default class App extends Vue {
  constructor() {
    super();
  }

  get showSlideComponenRow() {
    return (this as any).$store.getters.morseTextAsString.length > 0;
  }
}
</script>

<style lang="pcss">
  :root {
    --background: #f5f5f5;
    --background-secondary: #fff;
    --foreground: #c13c86;
    --box-shadow: rgba(0, 0, 0, 0.25);
    --spacing: 1rem;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    margin: 0;
    height: 100%;
    box-sizing: border-box;
    background: var(--background);
    font-size: 1rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    box-shadow: 0 0 calc(var(--spacing)) var(--box-shadow);
  }

  .row {
    display: flex;
    margin: calc(var(--spacing) * -1);
  }

  .row--valign {
    align-items: center;
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
