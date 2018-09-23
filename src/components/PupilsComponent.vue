<template>
  <figure class="figure">
    <img src="../assets/pupils.jpg" class="image" alt="cat" />
    <div class="pupil pupil-left" :class="pupilState" ref="pupil-left"></div>
    <div class="pupil pupil-right" :class="pupilState" ref="pupil-right"></div>
  </figure>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component<PupilsComponent>({
  props: {
    dotDash: Boolean,
  }
})
export default class PupilsComponent extends Vue {
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
          { transform: (this.isDot) ? 'scaleX(0.5)' : 'scaleX(1)' },
          { transform: (this.isDot) ? 'scaleX(1)' : 'scaleX(0.5)' },
      ], {
          duration: 200,
          iterations: 1,
          fill: 'forwards', // fill-mode
      });
    });
  }

  setPupilsFallback() {
    return {
      'pupil--is-dash': this.isDot,
    }
  }

  get isDot() {
      return this.$store.state.isDot;
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

<style lang="pcss" scoped>
.figure {
  position: relative;
}

.image {
  display: block;
  width: 100%;
  height: auto;
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
    left: 13.5%;
  }

  &-right {
    right: 17%;
    top: 32%;
  }
}
</style>
