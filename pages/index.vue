<template>
  <div>
    index
    {{ a }}
    <div style="background-color:#000;">
      	<p class="text-white">
        lorem
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>

const a: string = '11'

const num: number = 123

function returnNothing():void{
    console.log('returnNothing')
}
</script>

<style lang="scss" scoped>
    /* Write scss here */
    div {
        color: red;
    }
</style>
