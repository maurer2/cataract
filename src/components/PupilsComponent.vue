<template>
  <div>
    <figure class="figure">
      <img src="../assets/pupils.jpg" class="image" alt="cat" />
      <div class="pupil pupil-left" :class="pupilState" ref="pupil-left"></div>
      <div class="pupil pupil-right" :class="pupilState" ref="pupil-right"></div>
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
  private dotDash!: Boolean;
  private hasWebanimationsSupport: boolean = false;
  private isMounted: boolean = false;

  constructor(){
      super();
  }

  mounted(){
    this.isMounted = true;

    if ('animate' in document.body) {
        this.hasWebanimationsSupport = true;
    }
  }

  setPupils() {
    const pupilLeft: any = this.$refs['pupil-left'];
    const pupilRight: any = this.$refs['pupil-right'];

    [pupilLeft, pupilRight].forEach((pupil) => {
      pupil.animate([
          { transform: (this.dotDash === false) ? 'scaleX(1)' : 'scaleX(0.5)' },
          { transform: (this.dotDash === false) ? 'scaleX(0.5)' : 'scaleX(1)' },
      ], {
          duration: 200,
          iterations: 1,
          fill: 'forwards', // fill-mode
      });
    });
  }

  setPupilsFallback() {
    return {
      'pupil--is-dash': this.dotDash === true,
    }
  }

  get pupilState() {
    if(!this.isMounted) {
      return {};
    }

    if (this.hasWebanimationsSupport) {
      this.setPupils();

      return {};
    }

    return this.setPupilsFallback();
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
  animation-fill-mode: forwards;

  &--is-dash {
    transform: scaleX(0.5);
  }

  &-left {
    top: 19%;
    left: 9%;
  }

  &-right {
    left: 63%;
    top: 31%;
  }
}
</style>
