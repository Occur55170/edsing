<script lang="ts" setup>
import 'animate.css'
import { useAnimateOnScroll } from '~/composables/useAnimateOnScroll'

const route = useRoute()
const { t } = useI18n()

const h3Text = useAnimateOnScroll('resetAnimate').target
const description = useAnimateOnScroll('resetAnimate').target
const highSpeedSteel1 = useAnimateOnScroll('resetAnimate').target
const highSpeedSteel2 = useAnimateOnScroll('resetAnimate').target
const highSpeedSteel3 = useAnimateOnScroll('resetAnimate').target
const highSpeedSteel4 = useAnimateOnScroll('resetAnimate').target
const highSpeedSteel5 = useAnimateOnScroll('resetAnimate').target
const highSpeedSteel6 = useAnimateOnScroll('resetAnimate').target

useHead({
  title: '收購項目-高速鋼合金廢料',
})
</script>

<template>
  <NuxtLayout name="list">
    <div>
      <AcquisitionItem :item-name="'高速鋼合金廢料'" :item-img="'/img/HighSpeedSteel/HighSpeedSteel-list-4.jpg'"
        :quote-url="`${route.path}#ContractForm`">
        <template #desc>
          <p class="text-2xl leading-[2]">
            {{ t('高速鋼(HSS)有多種牌號,所有鋼都包括碳作為常見的合金元素,以及鎢、鈷和銅等各種其他成分。') }}
          </p>
        </template>
      </AcquisitionItem>
      <div class="recycleBlock bg-accent text-white">
        <h3 ref="h3Text" class="animate_start_opacity text-[48px] desktopSmWidth:text-[64px] font-bold mb-4">
          {{ t('我們收購的項目') }}
        </h3>
        <p ref="description" class="animate_start_opacity text-2xl mb-20 leading-[2]">
          {{ t('回收固體、刨花、M2、M35、M42、T5、T15、D2，各式型號歡迎詢問。') }}
        </p>
        <ul class="highSpeedSteelList grid tableSmWidth:grid-cols-3 grid-cols-1 gap-10">
          <li ref="highSpeedSteel1" class="animate_start_opacity">
            <div class="overflow-hidden">
              <img src="/img/HighSpeedSteel/HighSpeedSteel-list-1.jpg" alt="" />
            </div>
            <p class="text-xl desktopSmWidth:text-2xl mt-2">
              {{ t('HSS各式工具') }}
            </p>
          </li>
          <li ref="highSpeedSteel2" class="animate_start_opacity">
            <div class="overflow-hidden">
              <img src="/img/HighSpeedSteel/HighSpeedSteel-list-2.jpg" alt="" />
            </div>
            <p class="text-xl desktopSmWidth:text-2xl mt-2">
              {{ t('HSS刨花') }}
            </p>
          </li>
          <li ref="highSpeedSteel3" class="animate_start_opacity">
            <div class="overflow-hidden">
              <img src="/img/HighSpeedSteel/HighSpeedSteel-list-3.jpg" alt="" />
            </div>
            <p class="text-xl desktopSmWidth:text-2xl mt-2">
              {{ t('M2牙板') }}
            </p>
          </li>
          <li ref="highSpeedSteel4" class="animate_start_opacity">
            <div class="overflow-hidden">
              <img src="/img/HighSpeedSteel/HighSpeedSteel-list-4.jpg" alt="" />
            </div>
            <p class="text-xl desktopSmWidth:text-2xl mt-2">
              {{ t('沖棒') }}
            </p>
          </li>
          <li ref="highSpeedSteel5" class="animate_start_opacity">
            <div class="overflow-hidden">
              <img src="/img/HighSpeedSteel/HighSpeedSteel-list-5.jpg" alt="" />
            </div>
            <p class="text-xl desktopSmWidth:text-2xl mt-2">
              {{ t('頭尾料') }}
            </p>
          </li>
          <li ref="highSpeedSteel6" class="animate_start_opacity">
            <div class="overflow-hidden">
              <img src="/img/HighSpeedSteel/HighSpeedSteel-list-6.jpg" alt="" />
            </div>
            <p class="text-xl desktopSmWidth:text-2xl mt-2">
              {{ t('工具鋼') }}
            </p>
          </li>
        </ul>
      </div>
      <ContractForm id="ContractForm" class="pb-[200px]" banner-img="/img/HighSpeedSteel/HighSpeedSteel-bottom.jpg"
        description="contract_desc_hss" />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.recycleBlock {
  padding-top: 100px;
  padding-bottom: 100px;
  @media (min-width: 900px) {
    padding-top: 180px;
    padding-bottom: 180px;
  }
  @include baseWidth(calc((100% - 1200px)/2), calc((100% - 1200px)/2));
}

.highSpeedSteelList {
  li {
    &>div {
      overflow: hidden;
    }

    img {
      transition: all .4s linear;

      @media (min-width: 900px) {
        filter: brightness(100%) contrast(120%) saturate(0%) blur(0px) hue-rotate(9deg);
      }
    }

    &:hover img {
      @media (min-width: 900px) {
        transform: scale(1.2);
        clip-path: inset(0);
        /* 桌機hover時恢復彩色 */
        filter: brightness(100%) contrast(100%) saturate(100%) blur(0px) hue-rotate(0deg);
      }
    }
  }
}
</style>
