<template>
  <article class="layout">
    <header class="header">Header - {{ text }}</header>
    <main class="main" >
        <PupilsComponent class="column" :text="text" :dotDash="dotDash"></PupilsComponent>
        <MainComponent class="column" :text="text" @update-text="updateTextPlain" @toggle-dot-dash="updateDotDash"></MainComponent>
    </main>
    <!-- <footer class="footer">Header</footer> -->
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
    dotDash: boolean = false;

    get text() {
      return this.textPlain;
    }

    updateTextPlain(value: string) {
      this.textPlain = value;
    }

    updateDotDash(value: boolean){
      this.dotDash = value;
      console.log('toggle', this.dotDash);
    }
}
</script>

<style lang="pcss">
  :root {
    --background: #a9a9a9;
    --foreground: #c13c86;
  }

  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    height: 100%;
    font-size: 1rem;
    background: var(--background);
  }

  .wrapper {
    display: flex;
    margin: 0;
    min-height: 100%;
  }

  .layout {
    margin: auto;
    padding: 1rem;
    flex-grow: 0;
    max-width: 980px;
    background: #c3c3c3;
    color: var(--foreground);
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
</style>
