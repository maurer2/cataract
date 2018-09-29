<template>
  <figure class="figure">
    <img src="../assets/pupils.jpg" class="image" alt="cat" />
    <div class="pupil pupil-left" :class="pupilState" ref="pupil-left"></div>
    <div class="pupil pupil-right" :class="pupilState" ref="pupil-right"></div>
  </figure>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component<PupilsComponent>({})
export default class PupilsComponent extends Vue {
  private hasWebanimationsSupport: boolean = false;
  private isMounted: boolean = false;

  constructor(){
    super();
  }

  mounted(){
    this.isMounted = true;
    this.hasWebanimationsSupport = ('animate' in document.body) ? true : this.hasWebanimationsSupport;
  }

  setPupils() {
    const pupilLeft: any = this.$refs['pupil-left'];
    const pupilRight: any = this.$refs['pupil-right'];

    [pupilLeft, pupilRight].forEach((pupil) => {
      pupil.animate([
        { transform: (this.currentMorseType) ? 'scaleX(0.5)' : 'scaleX(1)' },
        { transform: (this.currentMorseType) ? 'scaleX(1.0)' : 'scaleX(0.5)' },
      ], {
        duration: 150,
        iterations: 1,
        fill: 'forwards', // fill-mode
      });
    });
  }

  setPupilsFallback() {
    return {
      'pupil--is-dot': this.currentMorseType,
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

  get currentMorseType() {
    return (this as any).$store.getters.currentMorseType;
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
  width: 100%;
  height: auto;
}

.pupil {
  position: absolute;
  width: 15%;
  height: 15%;
  border-radius: 50%;
  background: black;
  transform: scaleX(0.5);
  transition: transform 0.15s;
  animation-fill-mode: forwards;

  &--is-dot{
    transform: scaleX(1);
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
