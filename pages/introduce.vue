<script lang="ts" setup>
const { t } = useI18n()

useHead({
  title: '公司介紹',
})
</script>
<template>
  <NuxtLayout>
    <div class="introduce">
      <div class="head pb-[41%] relative">
        <img class="absolute top-0 left-0 h-full w-full block" src="/public/img/introduce/introduceHead.jpg" alt="" />
        <div class="absolute top-0 left-0 h-full w-full block flex flex-wrap content-center justify-center">
          <img src="/img/logo-s.png" class="grow-0 mx-auto max-w-[50%] desktopSmWidth:max-w-[500px] mb-4" alt="logo" />
          <h2 class="text-[32px] tableSmWidth:text-[53px] xl:text- text-white w-full text-center">
            {{ t('company introduction') }}
          </h2>
        </div>
      </div>
      <div
        class="baseWidth py-12 tableSmWidth:pt-20"
      >
        <div class="text-white text-2xl tableSmWidth:text-4xl px-[5%] leading-[1.6] tableSmWidth:leading-[2]">
          <h2 class="text-24px tableSmWidth:text-[48px]">
            <span class="text-brand">貴金屬</span>資源循環
          </h2>
          <h2 class="text-24px tableSmWidth:text-[48px] mb-8">
            保護土地，力求<span class="text-brand">環保永續</span>
          </h2>
          <p class="tableSmWidth:mt-8 mt-4 text-lg tableSmWidth:text-xl leading-[1.6]">
            重視製造過程水與空氣的環保處理，並建構完善設備及機制確保工廠用水及空氣排放安全潔淨，保護土地，力求環保永續。
          </p>
        </div>
        <ul class="text-white text-center flex justify-between flex-wrap tableSmWidth:flex-nowrap my-16 tableSmWidth:my-28">
          <li class="w-full mb-16 tableSmWidth:mb-0 tableSmWidth:w-[28%]">
            <img src="/img/introduce/introduce-list-1.png" alt="" class="mx-auto mb-12" />
            <div>
              <span class="text-brand text-2xl my-4 block">循環經濟</span>
              <p class="text-lg leading-[2]">
                「循環經濟」概念生產鎢金屬原料之金屬冶煉公司。
              </p>
            </div>
          </li>
          <li class="w-full mb-16 tableSmWidth:mb-0 tableSmWidth:w-[28%]">
            <img src="/img/introduce/introduce-list-2.png" alt="" class="mx-auto mb-12" />
            <div>
              <span class="text-brand text-2xl my-4 block">全球鎢酸鈉出口量第3名</span>
              <p class="text-lg leading-[2]">
                自2019年持續提供高品質鎢酸鈉,並以短短2年期間成為全球鎢酸鈉出口量第3名。
              </p>
            </div>
          </li>
          <li class="w-full mb-16 tableSmWidth:mb-0 tableSmWidth:w-[28%]">
            <img src="/img/introduce/introduce-list-3.png" alt="" class="mx-auto mb-12" />
            <div>
              <span class="text-brand text-2xl my-4 block">回收率</span>
              <p class="text-lg leading-[2]">
                鎢回收率100%/鈷回收率100%
              </p>
            </div>
          </li>
        </ul>
        <div class="text-white text-center text-xl leading-[2] my-8 tableSmWidth:mt-40 tableSmWidth:mb-12 py-10 px-[5%]">
          <!-- TODO: check -->
          <p class="whitespace-pre-line">
            {{ t('introduce-description') }}
          </p>
        </div>
      </div>
      <div
        class="video videoBg relative py-10 tableSmWidth:pt-20 tableSmWidth:pb-80"
        style="background-image: url('/img/introduce/introduce-1.jpg');"
      >
        <div
          class="videoSection w-full h-0 relative pb-[56.25%] mb-12"
        >
          <iframe
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/mz-ft7HYj9w?si=h_3EHYbS8CyvZih8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.baseWidth {
  background: linear-gradient(45deg, #030f17, #032736);
  @include baseWidth(calc((100% - 1300px)/2), calc((100% - 1300px)/2));
}

.video {
  @include baseWidth(calc((100% - 1300px)/2), calc((100% - 1300px)/2));

}
.videoBg {
  background-repeat: no-repeat;
  background-size: 120%;
  background-position: bottom 10% right 10%;

  &::before {
    content: '';
    display: block;
    @apply absolute z-0 w-full h-full top-0 left-0 inset-0 bg-gradient-to-t from-accent/0  via-accent/90 to-accent/100;
  }
}

@media(max-width: 600px) {
  .videoBg {
    &::before {
      @apply absolute z-0 w-full h-full top-0 left-0 inset-0 bg-gradient-to-t from-accent/0  via-accent/30 to-accent/100;
    }
  }
}
</style>
