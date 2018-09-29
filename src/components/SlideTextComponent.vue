<template>
  <div class="slider">
    <div class="letter" v-for="(letter, index) in textPlain" :key="index">
      <span>
        {{ letter }}
      </span>
      <span class="overlay" v-if="index === currentPosition">
        {{ letter }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// https://github.com/vuejs/vue-class-component/issues/220#issuecomment-381557825
@Component<SlideTextComponent>({})
export default class SlideTextComponent extends Vue {
  constructor(){
    super();
  }

  get textPlain() {
    return (this as any).$store.getters.morseTextAsString;
  }

  get currentPosition() {
    return (this as any).$store.state.textPosition;
  }
}
</script>

<style lang="pcss" scoped>
.slider {
  display: flex;
  font-size: 2rem;
  line-height: 0.5;
  color: black;
}

.letter {
  position: relative
}

.overlay {
  position: absolute;
  top: 0;
  color: red;
}
</style>
