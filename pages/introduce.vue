<script lang="ts" setup>
import 'animate.css'
import { useAnimateOnScroll } from '~/composables/useAnimateOnScroll'
const { t } = useI18n()
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const introduceLogo = useAnimateOnScroll('resetAnimate').target
const introduceTitle = useAnimateOnScroll('resetAnimate').target
const introduceTitle2 = useAnimateOnScroll('resetAnimate').target
const introduceDesc = useAnimateOnScroll('resetAnimate').target
const introduceList = useAnimateOnScroll('resetAnimate').target
const introduceContent = useAnimateOnScroll('resetAnimate').target

useHead({
  title: '公司介紹',
})
</script>
<template>
  <NuxtLayout>
    <div class="introduce">
      <div class="header head pb-[41%] relative">
        <img class="absolute top-0 left-0 h-full w-full block" src="/public/img/introduce/introduceHead.jpg" alt="" />
        <div class="absolute top-0 left-0 h-full w-full block flex flex-wrap content-center justify-center">
          <img ref="introduceLogo" src="/img/logo-s.png"
            class="animate_start_opacity grow-0 mx-auto max-w-[50%] desktopSmWidth:max-w-[500px] mb-4" alt="logo" />
          <h2 ref="introduceTitle"
            class="animate_start_opacity text-[32px] tableSmWidth:text-[53px] text-white w-full text-center">
            {{ t('company introduction') }}
          </h2>
        </div>
      </div>
      <div class="baseWidth py-8 tableSmWidth:py-[60px] desktopSmWidth:py-[150px]">
        <div class="text-white text-2xl tableSmWidth:text-4xl px-[5%] leading-[1.6] tableSmWidth:leading-[2]">
          <h2 ref="introduceTitle2" class="animate_start_opacity text-24px tableSmWidth:text-[48px]">
            <span class="text-brand">{{ t('貴金屬') }}</span>{{ t('資源循環') }}
            <br />
            {{ t('保護土地，力求') }}<span class="text-brand">{{ t('環保永續') }}</span>
          </h2>
          <p ref="introduceDesc"
            class="animate_start_opacity tableSmWidth:mt-8 mt-4 text-lg tableSmWidth:text-xl leading-[1.8]">
            {{ t('重視製造過程水與空氣的環保處理，並建構完善設備及機制確保工廠用水及空氣排放安全潔淨，保護土地，力求環保永續。') }}
          </p>
        </div>
        <ul ref="introduceList"
          class="animate_start_opacity text-white text-center flex justify-between flex-wrap tableSmWidth:flex-nowrap my-16 tableSmWidth:my-28">
          <li class="w-full mb-16 tableSmWidth:mb-0 tableSmWidth:w-[28%]">
            <img src="/img/introduce/introduce-list-1.png" alt="" class="mx-auto mb-12" />
            <div>
              <span class="text-brand text-2xl my-4 block">{{ t('循環經濟') }}</span>
              <p class="text-lg leading-[2]">
                {{ t('「循環經濟」概念生產鎢金屬原料之金屬冶煉公司。') }}
              </p>
            </div>
          </li>
          <li class="w-full mb-16 tableSmWidth:mb-0 tableSmWidth:w-[28%]">
            <img src="/img/introduce/introduce-list-2.png" alt="" class="mx-auto mb-12" />
            <div>
              <span class="text-brand text-2xl my-4 block">{{ t('全球鎢酸鈉出口量第3名') }}</span>
              <p class="text-lg leading-[2]">
                {{ t('自2019年持續提供高品質鎢酸鈉,並以短短2年期間成為全球鎢酸鈉出口量第3名。') }}
              </p>
            </div>
          </li>
          <li class="w-full mb-16 tableSmWidth:mb-0 tableSmWidth:w-[28%]">
            <img src="/img/introduce/introduce-list-3.png" alt="" class="mx-auto mb-12" />
            <div>
              <span class="text-brand text-2xl my-4 block">{{ t('回收率') }}</span>
              <p class="text-lg leading-[2]">
                {{ t('鎢回收率100%/鈷回收率100%') }}
              </p>
            </div>
          </li>
        </ul>
        <div
          class="text-white text-center text-xl leading-[3] my-8 tableSmWidth:mt-40 tableSmWidth:mb-12 py-10 px-[5%]">
          <p ref="introduceContent" class="animate_start_opacity whitespace-pre-line">
            {{ t('introduce-description') }}
          </p>
        </div>
      </div>
      <div class="video videoBg relative py-10 pt-[80px] tableSmWidth:pt-[180px] tableSmWidth:pb-80"
        :style="`background-image: url(${baseURL}/img/introduce/introduce-1.jpg)`">
        <div class="videoSection w-full h-0 relative pb-[56.25%] mb-12">
          <iframe class="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/mz-ft7HYj9w?si=h_3EHYbS8CyvZih8" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.introduce {
  /* 將背景設定在父元件，完美貫穿 Header 與主內容區塊 */
  background: linear-gradient(45deg, #030f17, #032736);
}

.header {
  position: relative;

  /* 讓 Header 的背景圖片在底部自然淡出，完美透出下方的防斷層背景 */
  &>img.absolute.block {
    -webkit-mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);
  }
}

.baseWidth {
  @include baseWidth(calc((100% - 1300px)/2), calc((100% - 1300px)/2));
}

.video {
  @include baseWidth(calc((100% - 1300px)/2), calc((100% - 1300px)/2));

}

.videoBg {
  background-repeat: no-repeat;
  background-size: 120%;
  background-position: bottom 10% right 10%;

  /* 加入頂部消融漸層遮罩，透出底下 .introduce 的漸層背景 */
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 80px);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 80px);

  @media (min-width: 600px) {
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 180px);
    mask-image: linear-gradient(to bottom, transparent 0%, #000 180px);
  }

  &::before {
    content: '';
    display: block;
    @apply absolute z-0 w-full h-full top-0 left-0 inset-0 bg-gradient-to-t from-accent/0 via-accent/90 to-accent/100;
  }
}

@media(max-width: 600px) {
  .videoBg {
    &::before {
      @apply absolute z-0 w-full h-full top-0 left-0 inset-0 bg-gradient-to-t from-accent/0 via-accent/30 to-accent/100;
    }
  }
}
</style>
