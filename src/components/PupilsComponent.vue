<template>
  <div>
    <figure class="figure">
      <img src="../assets/pupils.jpg" class="image" alt="cat" />
      <div class="pupil pupil-left" v-bind:class="{ 'pupil--is-dash': dotDash === false }"></div>
      <div class="pupil pupil-right" v-bind:class="{ 'pupil--is-dash': dotDash === false }"></div>
    </figure>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component<PupilsComponent>({
  props: {
    dotDash: Boolean,
  }
})
export default class PupilsComponent extends Vue {
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

.image {
  display: block;
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
