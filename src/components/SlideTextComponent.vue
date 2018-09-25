<template>
  <div class="slider">
    <div class="slider-inner">
      <strong>Morse Code:</strong>
      <template v-if="textPlain !== ''">
        {{ textPlain }}
      </template>
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
}
</script>

<style lang="pcss" scoped>

</style>
