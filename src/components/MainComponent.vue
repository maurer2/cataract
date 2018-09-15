<template>
  <div class="content">
    <div class="slider">
      <div class="slider-inner">
        <!--
        <h1>
          {{ textPlain }}
        </h1>
        -->
        <input :value="textPlain" type="text" placeholder="Input plaintext" @input="updateText($event.target.value)" />
      </div>
    </div>
    <button @click="toggleDotDash">
      Dummy
    </button>
  </div>
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

<style lang="pcss" scoped>

</style>
