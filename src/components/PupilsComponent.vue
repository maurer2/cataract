<template>
  <aside>
    <img src="../assets/pupils.jpg" alt="" />
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PupilsComponent extends Vue {
    //@Prop()
    //currentSignal: string= '';

    constructor(){
        super();
    }
}
</script>

<style lang="pcss" scoped>

</style>
