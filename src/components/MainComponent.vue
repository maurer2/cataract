<template>
  <div class="content">
    <div class="slider">
      <div class="slider-inner">
        <!--
        <h1>
          {{ textPlain }}
        </h1>
        -->
      </div>
    </div>
    <input :value="textPlain" type="text" placeholder="Input plaintext" @input="updateText($event.target.value)" />
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
    protected text!: [String, Boolean]; // https://github.com/kaorun343/vue-property-decorator/issues/81

    constructor(){
        super();
    }

    get textPlain() {
        return this.text;
    }

    updateText(value: string) {
      const textPlain = this.$emit('update-text', value);
    }
}
</script>

<style lang="pcss" scoped>

</style>
