<template>
  <form class="controls" autocomplete="off" @submit.prevent>
    <fieldset class="section">
      <label for="textplain" class="label">Plaintext</label>
      <input class="input" type="text" id="textplain" name="textplain" placeholder="Plaintext" autocomplete="false"
             :value="textPlain" @change.prevent="updateText" />
    </fieldset>
    <fieldset class="section" :disabled="textPlain.length === 0">
      <label for="textplain" class="label" :class="{ 'disabled': textPlain.length === 0}">
        Switch to next letter
      </label>
      <button class="button" type="button" @click.prevent="nextLetter">
        Next letter
      </button>
      <label for="textplain" class="label" :class="{ 'disabled': textPlain.length === 0}">
        Switch to previous letter
      </label>
      <button class="button" type="button" @click.prevent="prevLetter">
        Previous letter
      </button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MorseConverter } from '../morse/MorseConverter';

// https://github.com/vuejs/vue-class-component/issues/220#issuecomment-381557825
@Component<ControlComponent>({})
export default class ControlComponent extends Vue {
  // private text!: string; // https://github.com/kaorun343/vue-property-decorator/issues/81
  private mc: MorseConverter;

  constructor(){
    super();

    (this as any).$store.subscribe((mutation: any) => {
      if (mutation.type === 'updateTextPlain'){
        // this.updateMorse();
      }
    })
  }

  updateText(event: any, this: any) {
    const newText: string = event.target.value;
    // dummy
    const encodedText = [ '.', '-', '.', '.', '-', '-', '.', '-', '.', '.', '-', '-' ];

    this.$store.dispatch('updatePlainText', newText);
    this.$store.dispatch('updateMorseText', encodedText);
  }

  nextLetter(this: any) {
    this.$store.dispatch('setTextPositionToNext');
  }

  prevLetter(this: any) {
    this.$store.dispatch('setTextPositionToPrevious');
  }

  get textPlain() {
    return (this as any).$store.state.textPlain;
  }
}
</script>

<style lang="scss" scoped>
%defaulInputStyles {
  user-select: none;
  border: 1px solid black;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: 0;
}

.section {
  margin: 0;
  border: 0;
}

.label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;

  &.disabled {
    color: graytext;
  }
}

.input {
  @extend %defaulInputStyles;

  display: block;
  margin-bottom: 1rem;
}

.button {
  @extend %defaulInputStyles;

  display: inline-block;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
