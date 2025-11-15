<script lang="ts" setup>
import 'animate.css'
import { useAnimateOnScroll } from '~/composables/useAnimateOnScroll'

const route = useRoute()
const { t } = useI18n()

const tungstenSoftTitle = useAnimateOnScroll('resetAnimate').target
const tungstenSoftList1 = useAnimateOnScroll('resetAnimate').target
const tungstenSoftList2 = useAnimateOnScroll('resetAnimate').target
const tungstenSoftList3 = useAnimateOnScroll('resetAnimate').target

useHead({
  title: '收購項目-碳化鎢軟廢料',
})
</script>
<template>
  <NuxtLayout name="list">
    <div>
      <AcquisitionItem
        :item-name="'碳化鎢軟廢料'"
        :item-img="'/img/TungstenSoft/soft-head.jpg'"
        :quote-url="`${ route.path }#ContractForm`"
      >
        <template #desc>
          <p class="text-2xl leading-[2]">
            {{ t('我們購買碳化鎢泥,也稱為碳化鎢研磨切屑或碳化鎢軟廢料。') }}
          </p>
        </template>
      </AcquisitionItem>
      <div class="recycleBlock circleBg bg-accent text-white overflow-hidden">
        <div ref="tungstenSoftTitle" class="animate_start_opacity">
          <h3 class="text-[48px] desktopSmWidth:text-[64px] font-bold mb-4">
            {{ t('我們收購的項目') }}
          </h3>
          <p class="text-xl tableSmWidth:text-2xl mb-20 !leading-[2] whitespace-pre-line">
            {{ t('我們將通過在我們的乾燥爐中乾燥來明確確認砂輪和含油和水分的硬質合金污泥的質量,從而提供合適的購買價格。碳化鎢泥的百分比不會太高或太低:濕的或乾的,20%W或90%W,我們都買。我們購買國內和國際材料,並很樂意協助任何物流。如需當前報價請聯繫我們。') }}
          </p>
          <ul>
            <li ref="tungstenSoftList1" class="animate_start_opacity grid tableSmWidth:grid-cols-3 grid-cols-1 gap-4 w-full mb-12">
              <img src="/img/TungstenSoft/soft-1.jpg" alt="" class="col-span-1 w-full h-auto object-cover" />
              <div class="tableSmWidth:p-4 mb-4 text-xl col-span-1">
                {{ t('收購各種型態 也提供派車取貨服務') }}
              </div>
            </li>
            <li ref="tungstenSoftList2" class="animate_start_opacity grid tableSmWidth:grid-cols-3 grid-cols-1 gap-4 w-full mb-12">
              <img src="/img/TungstenSoft/soft-2.jpg" alt="" class="col-span-1 w-full h-auto object-cover tableSmWidth:order-2" />
              <div class="tableSmWidth:col-start-2 tableSmWidth:p-4 mb-4 text-xl col-span-1 tableSmWidth:order-1">
                {{ t('擊碎、乾燥、取樣') }}
              </div>
            </li>
            <li ref="tungstenSoftList3" class="animate_start_opacity grid tableSmWidth:grid-cols-3 grid-cols-1 gap-4 w-full mb-12">
              <img src="/img/TungstenSoft/soft-3.jpg" alt="" class="col-span-1 w-full h-auto object-cover" />
              <div class="tableSmWidth:p-4 mb-4 text-xl col-span-1">
                {{ t('濕的或乾的,20% W 或90%W,我們都買') }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ContractForm id="ContractForm" class="pb-[200px]" banner-img="/img/TungstenSoft/soft-bottom.jpg" />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.recycleBlock {
  padding-top: 100px;
  padding-bottom: 100px;
  @include baseWidth(calc((100% - 1200px)/2), calc((100% - 1200px)/2));
}
.circleBg {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 20%;
    width: 100%;
    height: 100%;
    display: block;
    background:url('/img/circle-L.svg') no-repeat 100% 100%;
    z-index: 0;
  }

  &>div {
    position: relative;
    z-index: 2;
  }
}

@media (max-width: 900px) {
  .circleBg {
    &::before {
      top: 0%;
      left: 20%;
      background-size: cover;
    }
  }
}

@media (max-width: 600px) {
  .circleBg {
    &::before {
      top: 0;
      left: 20%;
      background-size: unset;
    }
  }
}
</style>
