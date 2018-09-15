<template>
  <form class="content">
    <label for="textplain" class="label">Plaintext</label>
    <input class="input" type="text" name="textplain" id="textplain" placeholder="Plaintext"
      :value="textPlain" @input="updateText($event.target.value)" />

    <button class="button" type="button" @click.prevent="toggleDotDash">
      Dummy Test
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// https://github.com/vuejs/vue-class-component/issues/220#issuecomment-381557825
@Component<Main>({
  props: {
    text: [String, Boolean],
  }
})
export default class Main extends Vue {
    private text!: string; // https://github.com/kaorun343/vue-property-decorator/issues/81
    private isDot: boolean = true;

    constructor(){
        super();
    }

    get textPlain() {
        return this.text ;
    }

    updateText(value: string) {
      this.$emit('update-text', value);
    }

    toggleDotDash() {
      this.isDot = !this.isDot;
      this.$emit('toggle-dot-dash', this.isDot);
    }
}
</script>

<style lang="scss" scoped>
%defaulInputStyles {
  user-select: none;
  border: 1px solid black;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 0;
}

.label {
  display: block;
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
