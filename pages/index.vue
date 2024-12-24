<template>
    <div>
        index
        {{ a }}
        <div style="background-color:#000;">
            <p class="text-white">lorem</p>
        </div>
    </div>
</template>

<script lang="ts" setup>

const a: string = '11'

</script>

<style lang="scss">
    /* Write scss here */
    div {
        color: red;
    }
</style>