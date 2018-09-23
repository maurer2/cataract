<template>
  <div class="slider">
    <div class="slider-inner">
      <strong>Morse Code:</strong> {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// https://github.com/vuejs/vue-class-component/issues/220#issuecomment-381557825
@Component<SlideTextComponent>({
  props: {
    text: [String, Boolean],
  }
})

export default class SlideTextComponent extends Vue {
  constructor(){
      super();
  }
}
</script>

<style lang="scss" scoped>

</style>
