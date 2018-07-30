<template>
  <div class="content">
    <div class="slider">
      <div class="slider-inner">
       {{ textValue }}
      </div>
    </div>
    <input v-model="textValue" type="text" placeholder="Text eingeben"  />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue {
    @Prop({ default: false, type: [String, Boolean] })
    textPlain: string | boolean;

    constructor(){
        super();
    }

    get textValue() {
        return this.textPlain;
    }

    set textValue(value) {
        this.textPlain = value;
    }
}
</script>

<style lang="pcss" scoped>

</style>
