<script lang="ts" setup>
import 'animate.css'
import { useAnimateOnScroll } from '~/composables/useAnimateOnScroll'
const route = useRoute()
const { t } = useI18n()
const tungstenHardListTitle = useAnimateOnScroll('resetAnimate').target
const tungstenHardList1 = useAnimateOnScroll('resetAnimate').target
const tungstenHardList2 = useAnimateOnScroll('resetAnimate').target
const tungstenHardList3 = useAnimateOnScroll('resetAnimate').target
const tungstenHardList4 = useAnimateOnScroll('resetAnimate').target
const tungstenHardList5 = useAnimateOnScroll('resetAnimate').target
const tungstenHardList6 = useAnimateOnScroll('resetAnimate').target

useHead({
  title: '收購項目-碳化鎢硬廢料',
})
</script>
<template>
  <NuxtLayout name="list">
    <AcquisitionItem
      :item-name="'碳化鎢硬廢料'"
      :item-img="'/img/TungstenHard/recycle-head-1.jpg'"
      :quote-url="`${ route.path }#ContractForm`"
    >
      <template #desc>
        <p class="text-xl tableSmWidth:text-2xl leading-[2] mb-5">
          {{ t('各種不同行業包括車間和製造商，') }}
          <br />
          {{ t('我們回收多種形式歡迎下方諮詢') }}
        </p>
      </template>
    </AcquisitionItem>
    <div class="recycleBlock mx-auto bg-accent text-white">
      <div ref="tungstenHardListTitle" class="animate_start_opacity">
        <h3 class="text-[48px] desktopSmWidth:text-[64px] font-bold mb-4">
          {{ t('我們收購的項目') }}
        </h3>
        <p class="desktopSmWidth:text-2xl text-xl mb-20">
          {{ t('回收您使用過的鑽頭和刀片的價值硬質合金。') }}
        </p>
      </div>
      <ul class="grid tableSmWidth:grid-cols-3 grid-cols-1 gap-x-6 gap-y-20">
        <li ref="tungstenHardList1" class="w-full animate_start_opacity">
          <img src="/img/TungstenHard/recycle-list-1.jpg" alt="" class="mb-3 w-full" />
          <p class="desktopSmWidth:text-2xl text-xl">
            {{ t('鎢鑽頭') }}
          </p>
        </li>
        <li ref="tungstenHardList2" class="w-full animate_start_opacity">
          <img src="/img/TungstenHard/recycle-list-2.jpg" alt="" class="mb-3 w-full" />
          <p class="desktopSmWidth:text-2xl text-xl">
            {{ t('碳化鎢耐磨件') }}
          </p>
        </li>
        <li ref="tungstenHardList3" class="w-full animate_start_opacity">
          <img src="/img/TungstenHard/recycle-list-3.jpg" alt="" class="mb-3 w-full" />
          <p class="desktopSmWidth:text-2xl text-xl">
            {{ t('鎢刀片') }}
          </p>
        </li>
        <li ref="tungstenHardList4" class="w-full animate_start_opacity">
          <img src="/img/TungstenHard/recycle-list-4.jpg" alt="" class="mb-3 w-full" />
          <p class="desktopSmWidth:text-2xl text-xl">
            {{ t('各式碳化鎢邊角料') }}
          </p>
        </li>
        <li ref="tungstenHardList5" class="w-full animate_start_opacity">
          <img src="/img/TungstenHard/recycle-list-5.jpg" alt="" class="mb-3 w-full" />
          <p class="desktopSmWidth:text-2xl text-xl">
            {{ t('切割料') }}
          </p>
        </li>
        <li ref="tungstenHardList6" class="w-full animate_start_opacity">
          <img src="/img/TungstenHard/recycle-list-6.jpg" alt="" class="mb-3 w-full" />
          <p class="desktopSmWidth:text-2xl text-xl">
            {{ t('礦山工具') }}
          </p>
        </li>
      </ul>
    </div>
    <div>
      <ContractForm id="ContractForm" class="pb-[200px]" banner-img="/img/TungstenHard/recycle-bottom-bg.jpg" />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.recycleBlock {
  padding-top: 100px;
  padding-bottom: 100px;
  @include baseWidth(calc((100% - 1200px)/2), calc((100% - 1200px)/2));
}
</style>
