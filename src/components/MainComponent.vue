<template>
  <div class="content">
    <input type="text" name="text-in" id="text-in" placeholder="Text eingeben" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue {
    constructor(){
        super();
    }
}
</script>

<style lang="pcss" scoped>

</style>
