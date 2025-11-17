<script setup lang="ts">
import 'animate.css'
import IcRoundCall from '~icons/ic/round-call'
import { useAnimateOnScroll } from '~/composables/useAnimateOnScroll'
const { t } = useI18n()

const { target: rareMetalImg } = useAnimateOnScroll('resetAnimate')
const { target: rareMetalTitle } = useAnimateOnScroll('resetAnimate')
const { target: list1 } = useAnimateOnScroll('transform-none')
const { target: list2 } = useAnimateOnScroll('transform-none')
const { target: list3 } = useAnimateOnScroll('transform-none')
const { target: list4 } = useAnimateOnScroll('transform-none')
const { target: list5 } = useAnimateOnScroll('transform-none')
const { target: list6 } = useAnimateOnScroll('transform-none')
const { target: list7 } = useAnimateOnScroll('transform-none')
const { target: list8 } = useAnimateOnScroll('transform-none')
const { target: list9 } = useAnimateOnScroll('transform-none')
const { target: rareMetalForm } = useAnimateOnScroll('transform-none')

useHead({
  title: '稀有金屬介紹',
})
</script>
<template>
  <div>
    <NuxtLayout>
      <div class="header w-full h-0 pb-[300px] tableSmWidth:pb-[30%] bg-[url('/img/rareMetal/RareMetal-top.jpg')] bg-no-repeat bg-cover bg-bottom relative">
        <h2 class="text-white text-[36px] tableSmWidth:text-[53px] absolute bottom-0 left-0 pl-[1%] xl:pl-[calc((100%-1300px)/2)]">
          {{ t('稀有金屬') }}
        </h2>
      </div>
      <div class="flex flex-wrap bg-brand tableSmWidth:bg-transparent tableSmWidth:flex-nowrap items-center relative desktopSmWidth:mt-40">
        <div ref="rareMetalImg" class="animate_start_opacity flex w-[80%] mx-auto mt-8 tableSmWidth:mt-0 tableSmWidth:w-[40%] desktopSmWidth:w-[50%] flex justify-end pr-[5%] tableSmWidth:absolute left-0 top-[50%] tableSmWidth:-translate-y-1/2 z-[2]">
          <img src="/img/rareMetal/global.png" alt="" class="w-full max-w-[700px]" />
        </div>
        <div class="text-white bg-brand w-full px-[5%] tableSmWidth:pl-[40%] desktopSmWidth:pl-[50%] py-8 text-[16px] desktopSmWidth:text-xl leading-[1.6]">
          <div ref="rareMetalTitle" class="animate_start_opacity">
            <p>{{ t('我們長期大量收購各類金屬廢料,包括') }}：</p>
            <ol class="list-disc list-inside">
              <li>{{ t('硬質合金刀具廢料') }}</li>
              <li>{{ t('金屬陶瓷廢料') }}</li>
              <li>{{ t('高速鋼廢料') }}</li>
              <li>{{ t('粉末及固體廢料') }}</li>
              <li>{{ t('油、水、鐵混合廢料') }}</li>
            </ol>
            <p class="mt-4 desktopSmWidth:my-8">
              {{ t('同時,我們也提供各式特殊及稀有金屬的回收服務') }}。
            </p>
            <p>
              <IcRoundCall class="inline" />
              {{ t('歡迎直接聯繫我們,洽詢詳情!') }}
            </p>
          </div>
        </div>
      </div>
      <div class="rareMetalBottom mb-0 pb-[200px] pt-20 desktopSmWidth:pt-48">
        <div class="rareMetaList grid tableSmWidth:grid-cols-2 grid-rows-5 gap-6 bg-white/50 p-4 relative">
          <div ref="list1" class="flex bg-white px-4 py-2 tableSmWidth:flex-nowrap flex-wrap">
            <img src="/img/rareMetal/6-1.jpg" alt="" class="w-[50%] mx-auto" />
            <div class="p-1">
              <h3 class="text-bold text-[24px] mb-2">
                {{ t('Co 鈷') }}
              </h3>
              <p class="leading-[2]">
                {{ t('高強度合金(如鈷鉻合金)、牙科與骨科植入物、燃氣渦輪葉片等') }}
              </p>
            </div>
          </div>
          <div ref="list2" class="flex bg-white px-4 py-2 tableSmWidth:flex-nowrap flex-wrap">
            <img src="/img/rareMetal/6-2.jpg" alt="" class="w-[50%] mx-auto" />
            <div class="p-1">
              <h3 class="text-bold text-[24px] mb-2">
                {{ t('V 釩') }}
              </h3>
              <p class="leading-[2]">
                {{ t('用於製造高強度鋼鐵合金(如車軸、曲軸、 齒輪)、專用工具鋼、鋼中穩定碳化物、鎳鈦合金等') }}
              </p>
            </div>
          </div>
          <div ref="list3" class="flex bg-white px-4 py-2 tableSmWidth:flex-nowrap flex-wrap">
            <img src="/img/rareMetal/6-3.jpg" alt="" class="w-[50%] mx-auto" />
            <div class="p-1">
              <h3 class="text-bold text-[24px] mb-2">
                {{ t('Cr 鉻') }}
              </h3>
              <p class="leading-[2]">
                {{ t('製造不鏽鋼、硬化鋼鍍鉻用於裝飾與耐蝕表面:鉻酸用於航空航太陽極氧化處理等') }}
              </p>
            </div>
          </div>
          <div ref="list4" class="flex bg-white px-4 py-2 tableSmWidth:flex-nowrap flex-wrap">
            <img src="/img/rareMetal/6-4.jpg" alt="" class="w-[50%] mx-auto" />
            <div class="p-1">
              <h3 class="text-bold text-[24px] mb-2">
                {{ t('Ti 鈦') }}
              </h3>
              <p class="leading-[2]">
                {{ t('航太結構件、醫療植入物(義肢、牙科、骨科)、工業加工設備、運動器材、 3D列印、表面塗層等') }}
              </p>
            </div>
          </div>
          <div ref="list5" class="flex bg-white px-4 py-2 tableSmWidth:flex-nowrap flex-wrap">
            <img src="/img/rareMetal/6-5.jpg" alt="" class="w-[50%] mx-auto" />
            <div class="p-1">
              <h3 class="text-bold text-[24px] mb-2">
                {{ t('Mo 鉬') }}
              </h3>
              <p class="leading-[2]">
                {{ t('作為添加劑用於鋼鐵、耐高溫超合金化工催化劑、阻燃劑。顏料用途等') }}
              </p>
            </div>
          </div>
          <div ref="list6" class="flex bg-white px-4 py-2 tableSmWidth:flex-nowrap flex-wrap">
            <img src="/img/rareMetal/6-6.jpg" alt="" class="w-[50%] mx-auto" />
            <div class="p-1">
              <h3 class="text-bold text-[24px] mb-2">
                {{ t('Ta 鉭') }}
              </h3>
              <p class="leading-[2]">
                {{ t('製造高溫合金:電子元件中的電解電容器:作為擴散阻barrier薄膜:硬質合金刀片中的担化合物等') }}
              </p>
            </div>
          </div>
          <div ref="list7" class="flex bg-white px-4 py-2 tableSmWidth:flex-nowrap flex-wrap">
            <img src="/img/rareMetal/6-7.jpg" alt="" class="w-[50%] mx-auto" />
            <div class="p-1">
              <h3 class="text-bold text-[24px] mb-2">
                {{ t('W 鎢') }}
              </h3>
              <p class="leading-[2]">
                {{ t('製造鎢化合物(如鎢鋼)用於切削工具、採礦設備、火藥、醫療器械焊接電極、電燈燈絲、高溫合金部件等') }}
              </p>
            </div>
          </div>
          <div ref="list8" class="flex bg-white px-4 py-2 tableSmWidth:flex-nowrap flex-wrap">
            <img src="/img/rareMetal/6-8.jpg" alt="" class="w-[50%] mx-auto" />
            <div class="p-1">
              <h3 class="text-bold text-[24px] mb-2">
                {{ t('Ir 銥') }}
              </h3>
              <p class="leading-[2]">
                {{ t('用於高性能火花塞、半導體重結晶用坩場、 電解槽電極:蘊含於OLED材料中在高温高腐蝕環境中使用合金部件等') }}
              </p>
            </div>
          </div>
          <div ref="list9" class="flex bg-white px-4 py-2 tableSmWidth:flex-nowrap flex-wrap">
            <img src="/img/rareMetal/6-9.jpg" alt="" class="w-[50%] mx-auto" />
            <div class="p-1">
              <p class="leading-[2]">
                {{ t('稀土元素 各種稀土元素廣泛應用於電子(如手機、雷達)、永磁體(電動車、風力渦輪)、螢光體、催化劑、能源技術與國防裝備等') }}
              </p>
            </div>
          </div>
        </div>
        <div ref="rareMetalForm" class="animate_start_opacity p-4 pt-32 bg-white/50">
          <ContractForm id="ContractForm" class="bg-white !p-4" banner-img="" text-class="!text-accent-light" />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>

.rareMetalBottom {
  background: url('/img/rareMetal/RareMetal-bottom.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  position: relative;

  &::before {
    content: '';
    @apply absolute top-0 left-0 w-full h-full w-full z-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.4)_30%,rgba(255,255,255,0.1)_100%)];
  }

  & > * {
    @apply z-[1];
  }

  @include baseWidth(calc((100% - 1300px)/2), calc((100% - 1300px)/2));
}
.rareMetaList {
  &>div {
    transition: all .8s;
    transition-timing-function: ease-in-out;
    opacity: 0;
  }
  &>div:nth-child(odd) {
    transform: translateX(-100px);
  }
  &>div:nth-child(even) {
    transform: translateX(100px);
  }
}
.transform-none {
  transform: translateX(0) !important;
  opacity: 1 !important;
}
</style>
