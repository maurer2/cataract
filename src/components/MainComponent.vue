<template>
  <form class="content">
    <label for="textplain" class="label">Plaintext</label>
    <input class="input" type="text" id="textplain" placeholder="Plaintext" :value="textPlain" @input="updateText" />

    <button class="button" type="button" @click.prevent="toggleDotDash">
      Eye Test
    </button>

    <button class="button" type="button" @click.prevent="playSequence" :class="{ 'disabled': textPlain.length === 0}">
      Next Letter
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MorseConverter } from '../morse/MorseConverter';

// https://github.com/vuejs/vue-class-component/issues/220#issuecomment-381557825
@Component<Main>({})
export default class Main extends Vue {
  // private text!: string; // https://github.com/kaorun343/vue-property-decorator/issues/81
  private mc: MorseConverter;

  constructor(){
    super();

    (this as any).$store.subscribe((mutation: any) => {
      if (mutation.type === 'updateTextPlain'){
        this.updateMorse();
      }
    })
  }

  updateText(event: Event) {
    const newText: string = (event.target as any).value;

    (this as any).$store.dispatch('updatePlainText', newText);
  }

  updateMorse() {
    // dummy stuff
    const encodedText = [ '.', '-', '.', '.', '-', '-', '.', '-', '.', '.', '-', '-' ];
    (this as any).$store.dispatch('updateMorseText', encodedText);
  }

  toggleDotDash() {
    (this as any).$store.dispatch('toggleDotDash');
  }

  playSequence() {
    (this as any).$store.dispatch('setTextPositionToNext');
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

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

.label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input {
  @extend %defaulInputStyles;

  display: block;
  margin-bottom: 1rem;
}

.button {
  @extend %defaulInputStyles;

  display: inline-block;
  text-align: center;
}
</style>
