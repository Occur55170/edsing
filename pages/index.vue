<script lang="ts" setup>
import MaterialSymbolsMail from '~icons/material-symbols/mail'
import MdiClockTimeThree from '~icons/mdi/clock-time-three'
import MaterialSymbolsCall from '~icons/material-symbols/call'
import MaterialSymbolsCheck from '~icons/material-symbols/check'
import MaterialSymbolsArrowForwardIos from '~icons/material-symbols/arrow-forward-ios'
import MaterialSymbolsLineEndArrowNotchRounded from '~icons/material-symbols/line-end-arrow-notch-rounded'

const { t } = useI18n()
const { width } = useWindowWidth()

useHead({
  title: '益鼎興金屬有限公司-首頁',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="header w-full overflow-hidden">
        <img class="hidden tableSmWidth:block w-full" src="/img/header.jpg" alt="" />
        <img class="block tableSmWidth:hidden w-full" src="/img/header-mobile.jpg" alt="" />
      </div>

      <div class="precious bg-accent py-10 desktopSmWidth:py-20">
        <div class="flex desktopSmWidth:flex-nowrap flex-wrap">
          <h3 class="text-white text-[60px] xl:text-[84px] desktopSmWidth:w-[20%] w-full xl:w-[25%] desktopSmWidth:mb-0 py-8 flex items-center justify-center content-center flex-wrap">
            <div class="text-left">
              回收
              <span class="text-bold desktopSmWidth:block w-full">鎢</span>
            </div>
          </h3>
          <ul class="flex justify-between desktopSmWidth:w-[80%] xl:w-[75%] tableSmWidth:flex-nowrap flex-wrap">
            <li class="relative w-full mb-8 tableSmWidth:my-4 tableSmWidth:w-[30%] desktopSmWidth:w-[33%] text-right">
              <img src="/img/index/index-list-1.jpg" class="w-full h-[600px] object-cover tabletSmWidth:object-contain grayscale-[20]" />
              <div class="absolute bottom-0 right-0 bg-accent/80 tableSmWidth:bg-accent w-full tabletSmWidth:w-[80%] h-auto tabletSmWidth:h-[200px] px-2 py-8">
                <p class="text-white text-bold text-2xl xl:text-3xl mb-4 text-left font-bold">
                  鎢硬廢料/合金
                </p>
                <p class="text-white mb-6 text-left leading-[2]">
                  鑽頭/刀片/採礦等級/鎢基合金鈷鎳高溫合金
                </p>
                <NuxtLink to="/tungstenHard" class="text-brand text-right absolute bottom-[5%] desktopSmWidth:bottom-0 right-[1%] desktopSmWidth:right-0">
                  {{ t('more') }}
                  <MaterialSymbolsLineEndArrowNotchRounded class="inline" />
                </NuxtLink>
              </div>
            </li>
            <li class="relative w-full my-4 tableSmWidth:w-[30%] desktopSmWidth:w-[33%] text-right">
              <img src="/img/index/index-list-2.jpg" class="w-full h-[600px] object-cover tabletSmWidth:object-contain grayscale-[20]" />
              <div class="absolute bottom-0 right-0 bg-accent/80 tableSmWidth:bg-accent w-full tabletSmWidth:w-[80%] h-auto tabletSmWidth:h-[200px] px-2 py-8">
                <p class="text-white text-bold text-2xl xl:text-3xl mb-4 text-left font-bold">
                  鎢軟廢料
                </p>
                <p class="text-white mb-6 text-left leading-[2]">
                  碳化鎢泥/切屑粉末/過濾材料/下腳料
                </p>
                <NuxtLink to="/tungstenSoft" class="text-brand text-right absolute bottom-[5%] desktopSmWidth:bottom-0 right-[1%] desktopSmWidth:right-0">
                  {{ t('more') }}
                  <MaterialSymbolsLineEndArrowNotchRounded class="inline" />
                </NuxtLink>
              </div>
            </li>
            <li class="relative w-full my-4 tableSmWidth:w-[30%] desktopSmWidth:w-[33%] text-right">
              <img src="/img/index/index-list-3.jpg" class="w-full h-[600px] object-cover tabletSmWidth:object-contain grayscale-[20]" />
              <div class="absolute bottom-0 right-0 bg-accent/80 tableSmWidth:bg-accent w-full tabletSmWidth:w-[80%] h-auto tabletSmWidth:h-[200px] px-2 py-8">
                <p class="text-white text-bold text-2xl xl:text-3xl mb-4 text-left font-bold">
                  高速鋼
                </p>
                <p class="text-white mb-6 text-left leading-[2]">
                  高速鋼刨花/銑刀/鑽頭/牙板/各式合金
                </p>
                <NuxtLink to="/highSpeedSteel" class="text-brand text-right absolute bottom-[5%] desktopSmWidth:bottom-0 right-[1%] desktopSmWidth:right-0">
                  {{ t('more') }}
                  <MaterialSymbolsLineEndArrowNotchRounded class="inline" />
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="recycle py-5 tableSmWidth:py-10 desktopSmWidth:py-20">
        <div class="flex items-center justify-between tableSmWidth:my-8 desktopSmWidth:flex-nowrap flex-wrap">
          <div class="flex flex-wrap items-center 2xl:w-[25%] desktopSmWidth:w-[32%]">
            <h3 class="text-white text-[50px] xl:text-[64px] w-full mb-6">
              <span class="text-brand">鎢</span>資源循環
            </h3>
            <p class="text-xl leading-[2] text-white desktopSmWidth:mb-52 mb-10">
              關注環境保護，將環保理念貫穿在鎢鋼廢料回收的整個過程中，確保產品生產和使用的環境友好性，實現可持續發展的綠能環保經濟。
            </p>
            <img v-if="width < 900" src="/img/index/index-process.svg" alt="" class="block 2xl:w-[70%] desktopSmWidth:w-[65%]" />
            <NuxtLink to="/" class="mx-auto mt-16 tableSmWidth:mt-8 mb-4 desktopSmWidth:m-0 text-white bg-brand py-2 px-6 text-xl rounded inline-block flex items-center justify-between">
              <span class="mr-10">More</span>
              <i>
                <MaterialSymbolsArrowForwardIos class="text-xs block" />
              </i>
            </NuxtLink>
          </div>
          <img v-if="width > 768" src="/img/index/index-process.svg" alt="" class="block 2xl:w-[70%] desktopSmWidth:w-[65%]" />
        </div>
      </div>

      <div class="equipment relative py-20 w-full desktopSmWidth:h-0 desktopSmWidth:pb-[35%]">
        <div class="bg-white/90 px-4 py-6 tableSmWidth:px-8 xl:py-12 xl:px-16 desktopSmWidth:absolute top-1/2 desktopSmWidth:-translate-y-1/2 mx-auto desktopSmWidth:m-0 w-[90%] tableSmWidth:w-[80%] desktopSmWidth:w-auto">
          <h3 class="text-center font-bold text-[48px] tableSmWidth:text-[60px] mb-10">
            <span class="text-brand">專業</span>設備
          </h3>
          <ul class="grid grid-cols-2 gap-6 desktopSmWidth:w-[400px] text-xl">
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
  &::before {
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

    @include baseWidth;
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
  @include baseWidth;
}

.equipment {
  background: url('/img/index/equipment.png') no-repeat;
  background-size:cover ;

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
