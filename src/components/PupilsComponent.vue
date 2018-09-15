<template>
  <div>
    <figure class="figure">
      <img src="../assets/pupils.jpg" class="image" alt="cat" />
      <div class="pupil pupil-left" v-bind:class="{ 'pupil--is-dash': isDash }"></div>
      <div class="pupil pupil-right" v-bind:class="{ 'pupil--is-dash': isDash }"></div>
    </figure>
    <button @click="isDash = !isDash">
      Click
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PupilsComponent extends Vue {
    //@Prop()
    //currentSignal: string= '';
    private isDash: boolean = true;

    constructor(){
        super();
    }
}
</script>

<style lang="scss" scoped>
.figure {
  position: relative;
  margin: 0;
}

.pupil {
  position: absolute;
  width: 15%;
  height: 15%;
  border-radius: 50%;
  background: black;
  transform: scaleX(1);
  transition: transform 0.2s;

  &--is-dash {
    transform: scaleX(0.5);
  }

  &-left {
    top: 18%;
    left: 9%;
  }

  &-right {
    left: 63%;
    top: 31%;
  }
}
</style>
