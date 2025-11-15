<script lang="ts" setup>
import MaterialSymbolsMail from '~icons/material-symbols/mail'
import MdiClockTimeThree from '~icons/mdi/clock-time-three'
import MaterialSymbolsCall from '~icons/material-symbols/call'
import MaterialSymbolsCheck from '~icons/material-symbols/check'
import MaterialSymbolsArrowForwardIos from '~icons/material-symbols/arrow-forward-ios'
import MaterialSymbolsLineEndArrowNotchRounded from '~icons/material-symbols/line-end-arrow-notch-rounded'

import 'animate.css'
import { useAnimateOnScroll } from '~/composables/useAnimateOnScroll'

const device = useDevice()

const { t } = useI18n()

const headerAfter = device.isDesktop ? useAnimateOnScroll('animate__bounceIn').target : ref(null)
const preciousText = useAnimateOnScroll('resetAnimate').target
const preciousList = useAnimateOnScroll('resetAnimate').target
const recycleSection = useAnimateOnScroll('resetAnimate').target
const recycleImg = useAnimateOnScroll('resetAnimate').target
const equipmentSection = useAnimateOnScroll('resetAnimate').target

useHead({
  title: '益鼎興金屬有限公司-首頁',
})
</script>
<template>
  <div>
    <NuxtLayout>
      <div class="header w-full overflow-hidden">
        <img class="hidden tableSmWidth:block w-full" src="/img/header.jpg" alt="" />
        <div ref="headerAfter" class="header-after"></div>
        <img class="block tableSmWidth:hidden w-full" src="/img/header-mobile.jpg" alt="" />
      </div>

      <div class="precious bg-accent py-10 desktopSmWidth:py-20">
        <div class="flex desktopSmWidth:flex-nowrap flex-wrap grow-0">
          <h3 ref="preciousText" class="animate_start_opacity text-white text-[36px] tableSmWidth:text-[53px] desktopSmWidth:w-[20%] w-full desktopSmWidth:mb-0 py-8 flex items-center justify-center content-center flex-wrap">
            <div class="text-left">
              回收鎢
            </div>
          </h3>
          <ul ref="preciousList" class="animate_start_opacity flex justify-between desktopSmWidth:w-[80%] xl:w-[75%] tableSmWidth:flex-nowrap flex-wrap grow">
            <li class="relative w-full my-4 tableSmWidth:w-[33%] h-[450px] desktopSmWidth:w-[33%] text-right">
              <img src="/img/index/index-list-1.jpg" class="w-full object-cover tableSmWidth:object-contain grayscale-[20]" />
              <div class="absolute bottom-0 right-0 bg-accent/80 tableSmWidth:bg-accent w-[90%] tableSmWidth:w-[85%] h-auto tableSmWidth:h-[200px] p-5">
                <p class="text-white text-bold text-2xl xl:text-3xl mb-4 text-left font-bold">
                  鎢硬廢料/合金
                </p>
                <p class="text-white mb-6 text-left leading-[2] flex flex-wrap">
                  <span>鑽頭</span>/<span>刀片</span>/<span>採礦等級</span>/<span>鎢基合金</span>/<span>鈷鎳高溫合金</span>
                </p>
                <NuxtLink to="/tungstenHard" class="preciousLink text-brand text-right absolute bottom-[5%] desktopSmWidth:bottom-0 right-[1%] desktopSmWidth:right-0">
                  {{ t('more') }}
                  <MaterialSymbolsLineEndArrowNotchRounded class="inline mr-4" />
                </NuxtLink>
              </div>
            </li>
            <li class="relative w-full my-4 tableSmWidth:w-[33%] h-[450px] desktopSmWidth:w-[33%] text-right">
              <img src="/img/index/index-list-2.jpg" class="w-full object-cover tableSmWidth:object-contain grayscale-[20]" />
              <div class="absolute bottom-0 right-0 bg-accent/80 tableSmWidth:bg-accent w-[90%] tableSmWidth:w-[85%] h-auto tableSmWidth:h-[200px] p-5">
                <p class="text-white text-bold text-2xl xl:text-3xl mb-4 text-left font-bold">
                  鎢軟廢料
                </p>
                <p class="text-white mb-6 text-left leading-[2] flex flex-wrap">
                  <span>碳化鎢泥</span>/<span>切屑粉末</span>/<span>過濾材料</span>/<span>下腳料</span>
                </p>
                <NuxtLink to="/tungstenSoft" class="preciousLink text-brand text-right absolute bottom-[5%] desktopSmWidth:bottom-0 right-[1%] desktopSmWidth:right-0">
                  {{ t('more') }}
                  <MaterialSymbolsLineEndArrowNotchRounded class="inline mr-4" />
                </NuxtLink>
              </div>
            </li>
            <li class="relative w-full my-4 tableSmWidth:w-[33%] h-[450px] desktopSmWidth:w-[33%] text-right">
              <img src="/img/index/index-list-3.jpg" class="w-full object-cover tableSmWidth:object-contain grayscale-[20]" />
              <div class="absolute bottom-0 right-0 bg-accent/80 tableSmWidth:bg-accent w-[90%] tableSmWidth:w-[85%] h-auto tableSmWidth:h-[200px] p-5">
                <p class="text-white text-bold text-2xl xl:text-3xl mb-4 text-left font-bold">
                  高速鋼
                </p>
                <p class="text-white mb-6 text-left leading-[2] flex flex-wrap">
                  <span>高速鋼刨花</span>/<span>銑刀</span>/<span>鑽頭</span>/<span>牙板</span>/<span>各式合金</span>
                </p>
                <NuxtLink to="/highSpeedSteel" class="preciousLink text-brand text-right absolute bottom-[5%] desktopSmWidth:bottom-0 right-[1%] desktopSmWidth:right-0">
                  {{ t('more') }}
                  <MaterialSymbolsLineEndArrowNotchRounded class="inline mr-4" />
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="recycle py-5 tableSmWidth:py-10 desktopSmWidth:py-20">
        <div class="flex items-center justify-between tableSmWidth:my-8 desktopSmWidth:flex-nowrap flex-wrap">
          <div ref="recycleSection" class="animate_start_opacity flex flex-wrap items-center 2xl:w-[25%] desktopSmWidth:w-[32%]">
            <h3 class="text-white text-[36px] tableSmWidth:text-[53px] w-full mb-6">
              <span class="text-brand">鎢</span>資源循環
            </h3>
            <p class="text-[18px] text-white leading-[2] desktopSmWidth:mb-52 mb-10">
              關注環境保護，將環保理念貫穿在鎢鋼廢料回收的整個過程中，確保產品生產和使用的環境友好性，實現可持續發展的綠能環保經濟。
            </p>
            <img v-if="!device.isDesktop" src="/img/index/index-process.svg" alt="" class="block 2xl:w-[70%] desktopSmWidth:w-[65%]" />
            <NuxtLink to="/" class="mx-auto mt-16 tableSmWidth:mt-8 mb-4 desktopSmWidth:m-0 text-white hover:text-brand bg-brand hover:bg-white py-[10px] px-[20px] inline-block flex items-center justify-between">
              <span class="mr-10">More</span>
              <i>
                <MaterialSymbolsArrowForwardIos class="text-xs block" />
              </i>
            </NuxtLink>
          </div>
          <img v-if="device.isDesktop" ref="recycleImg" src="/img/index/index-process.svg" alt="" class="animate_start_opacity block 2xl:w-[70%] desktopSmWidth:w-[65%]" />
        </div>
      </div>

      <div class="equipment relative py-20 w-full desktopSmWidth:h-0 desktopSmWidth:pb-[35%]">
        <div ref="equipmentSection" class="animate_start_opacity bg-white/90 px-4 py-6 tableSmWidth:px-8 xl:py-12 xl:px-16 desktopSmWidth:absolute top-1/2 desktopSmWidth:-translate-y-1/2 mx-auto desktopSmWidth:m-0 w-[90%] tableSmWidth:w-[60%] desktopSmWidth:w-auto">
          <h3 class="text-center font-bold text-[36px] tableSmWidth:text-[53px] mb-10">
            <span class="text-brand">專業</span>設備
          </h3>
          <ul class="grid grid-cols-2 gap-6 desktopSmWidth:w-[400px] text-xl tableSmWidth:2xl  desktopSmWidth:text-xl">
            <li>
              <div>
                <MaterialSymbolsCheck class="inline text-brand" />
                合金工具
              </div>
            </li>
            <li>
              <div>
                <MaterialSymbolsCheck class="inline text-brand" />
                機械設備
              </div>
            </li>
            <li>
              <div>
                <MaterialSymbolsCheck class="inline text-brand" />
                量測設備
              </div>
            </li>
            <li>
              <div>
                <MaterialSymbolsCheck class="inline text-brand" />
                磨料
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="information bg-accent py-[80px] tableSmWidth:py-[100px] mb-0 tableSmWidth:mb-[100px]">
        <p class="text-white text-center text-xl leading-[2] tableSmWidth:leading-[auto] font-bold  mx-auto  w-[90%] desktopSmWidth:w-full">
          刀具鈍化拋光機、絲攻鑽頭刀柄專業表面處理、拋光設備、鈍化設備、鈍化拋光研磨料
        </p>
        <ul class="flex justify-center tableSmWidth:flex-nowrap flex-wrap text-white max-w-[1600px] mx-auto mt-10 text-xl">
          <li class="flex items-center my-4 tableSmWidth:my-0 mx-4 xl:mx-10">
            <MaterialSymbolsCall class="bg-brand p-2 box-content rounded-full mr-3" />
            07-6115753
          </li>
          <li class="flex items-center my-4 tableSmWidth:my-0 mx-4 xl:mx-10">
            <MaterialSymbolsMail class="bg-brand p-2 box-content rounded-full mr-3" />
            Edsingpolitech@hotmail.com
          </li>
          <li class="flex items-center my-4 tableSmWidth:my-0 mx-4 xl:mx-10">
            <MdiClockTimeThree class="bg-brand p-2 box-content rounded-full mr-3" />
            週一至週五8:30-17:30
          </li>
        </ul>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>

.header {
  position: relative;
  .header-after {
    content: '';
    position: absolute;
    bottom: 0%;
    left: 70%;
    width: 100%;
    height: 100%;
    display: block;
    background:url('/img/circle-S.svg') no-repeat;
    background-size: 30%;
  }
}

.precious {
  @apply bg-accent;
  &>div {
    margin: 0 auto;
    box-sizing: border-box;

    @include baseWidth($l-mobile:5%, $r-mobile:5%);
    h3 {
      vertical-align: middle;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        width: 5vw;
        height: 5vw;
        border-width: 10px 0 0 10px;
        border-color: theme('colors.brand.DEFAULT');
        border-style: solid;
      }
    }
  }

  ul>li {
    overflow: hidden;
    img{
      will-change: transform;
      transition: all .4s ease-in-out;
      transition-duration: 1500ms;
      filter: brightness(100%) contrast(120%) saturate(0%) blur(0px) hue-rotate(9deg);
    }
    img:hover  {
      filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
      transform: scale(1.2);
    }
  }

  .preciousLink {
      svg {
        animation-name:slideLeftRight;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function:ease-in-out;
      }
      &:hover {
        @apply text-white;
      }
  }
}
@keyframes slideLeftRight{
    0%{
      transform: translateX(0px);
    }
    50%{
      transform: translateX(10px);
    }
    100%{
      transform: translateX(0px);
    }
}

.recycle {
  background-image:url('/img/index/recycleBg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  > * {
    position: relative;
    z-index: 2;
  }
  @include baseWidth($l-mobile:5%, $r-mobile:5%);
}

.equipment {
  background: url('/img/index/equipment.png') no-repeat;
  background-size: cover;
  background-attachment: fixed;

  &>div{
    right: clamp(50px, 10%, 500px);
  }
}

.information {
  &>p {
    @apply relative flex items-center justify-center;
    &::before, &::after {
      content: '';
      @apply top-1/2 bg-white w-[50px] block mx-2;
      height: 1px;
    }
  }
}

@media(max-width: 600px) {
  .information {
    &>p {
      &::before, &::after {
        content: '';
        display: none;
      }
    }
  }
}
</style>
