<template>
  <div>
    <NuxtLayout>
      <!-- <div>
        <img class="block" src="../public/header.jpg" alt="">
        <img class="hidden" src="../public/header-m.jpg" alt="">
      </div> -->
      <!-- <div class="flex flex-row justify-center bg-white">
        <label class="text-gray-600">{{ t('language') }}</label>
        <span class="ml-4 font-bold text-gray-800">{{ locale }}</span>
      </div> -->
      ---

      <div class="my-10 flex" style="background: #000e14">
        <h3 class="text-white">
          回收鎢
        </h3>
        <ul class="flex">
          <li>
            <p class="text-white">
              鎢硬廢料/合金
            </p>
            <p class="text-white">
              鑽頭/刀片/採礦等級/鎢基合金鈷鎳高溫合金
            </p>
            <NuxtLink to="/recycle">
              {{ t('more') }}
            </NuxtLink>
          </li>
          <li>
            <p class="text-white">
              鎢軟廢料
            </p>
            <p class="text-white">
              碳化鎢泥/切屑粉末/過濾材料/下腳料
            </p>
            <NuxtLink to="/recycle">
              {{ t('more') }}
            </NuxtLink>
          </li>
          <li>
            <p class="text-white">
              高速鋼
            </p>
            <p class="text-white">
              高速鋼刨花/銑刀/鑽頭/牙板/各式合金
            </p>
            <NuxtLink to="/recycle">
              {{ t('more') }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <div class="list">
          <h3>
            <span>貴金屬</span>資源循環
            <br />
            保護土地，力求
            <span>環保永續</span>
          </h3>
          <p>重視製造過程水與空氣的環保處理，並建構完整設備及機制確保工廠用水及空氣排放安全及潔淨，保護土地，力求環保永續。</p>
        </div>
        <div class="cycle"></div>
        <div class="equipment"></div>
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
    // div {
    //     color: red;
    // }
</style>
