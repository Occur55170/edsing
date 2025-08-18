<template>
  <div>
    <NuxtLayout>
      <div>
        <img class="block" src="../public/header.jpg" alt="">
        <img class="hidden" src="../public/header-m.jpg" alt="">
      </div>
      <!-- #020F17 -->
      <div class="flex flex-row justify-center bg-white">
        <label class="text-gray-600">{{ t('language') }}</label>
        <span class="ml-4 font-bold text-gray-800">{{ locale }}</span>
      </div>
      ---
      hello
      {{ t('hello') }}
      -

      <NuxtLink to="/recycle">
        go recycle.vue
      </NuxtLink>

      <div style="background-color:#000;">
        <p class="text-white">
          lorem
        </p>
      </div>
      <div>
        <div class="list">
          <h3>
            <span>貴金屬</span>資源循環
            <br>
            保護土地，力求
            <span>環保永續</span>
          </h3>
          <p>重視製造過程水與空氣的環保處理，並建構完整設備及機制確保工廠用水及空氣排放安全及潔淨，保護土地，力求環保永續。</p>
        </div>
        <div class="cycle" />
        <div class="equipment" />
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const { locale, locales, setLocale, t } = useI18n()

const a: string = '11'

const num: number = 123

function returnNothing ():void {
  console.log('returnNothing')
}

const myFunc = function () {
  return 'template<NBSP>string'
}

const qux = function () {
  return 'test' /* <ENSP> */
}
const b = 'a'

</script>

<style lang="scss" scoped>
    /* Write scss here */
    div {
        color: red;
    }
</style>
