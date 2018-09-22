<template>
  <article class="layout">
    <main class="main">
        <PupilsComponent class="column" :text="text"></PupilsComponent>
        <MainComponent class="column" :text="text" @update-text="updateTextPlain"></MainComponent>
    </main>
    <template v-if="textPlain !== ''">
      <footer class="footer">
        <div class="slider">
          <div class="slider-inner">
            <strong>Morse Code:</strong> {{ textPlain }}
          </div>
        </div>
      </footer>
    </template>
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
    textPlain: string = '';

    constructor() {
        super();
    }

    get text() {
      return this.textPlain;
    }

    updateTextPlain(value: string) {
      this.textPlain = value;
    }
}
</script>

<style lang="pcss">
  :root {
    --background: #a9a9a9;
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
    min-height: 100%;
  }

  .layout {
    margin: auto;
    padding: 2rem;
    flex-grow: 1;
    background: #c3c3c3;
    color: var(--foreground);
    max-width: 90vw;
  }

  .main {
    display: flex;
    margin-left: -1rem;
    margin-right: -1rem;
  }

  .column {
    margin-left: 1rem;
    margin-right: 1rem;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
  }

  .footer {
    margin-top: 1rem;
  }
</style>
