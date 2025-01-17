<template>
  <div>
    <div class="flex flex-row justify-center bg-white">
      <label class="text-gray-600">{{ t('language') }}</label>
      <span class="ml-4 font-bold text-gray-800">{{ locale }}</span>
    </div>
    ---
    hello
    {{ t('hello') }}
    -
    <div style="background-color:#000;">
      	<p class="text-white">
        lorem
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locale, locales, setLocale, t } = useI18n();

const a: string = '11'

const num: number = 123

function returnNothing():void{
    console.log('returnNothing')
}

const myFunc = function() {
    return `template <NBSP>string`;
}

const qux = function() {
    return 'test';  /*<ENSP>*/
}
const b = "a"

</script>

<style lang="scss" scoped>
    /* Write scss here */
    div {
        color: red;
    }
</style>
