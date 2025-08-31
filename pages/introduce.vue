<script lang="ts" setup>
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
          <img src="/img/logo-s.png" class="grow-0 mx-auto max-w-[50%] desktopSmWidth:max-w-[800px] mb-4" alt="logo" />
          <h2 class="text-[32px] tableSmWidth:text-[56px] xl:text- text-white w-full text-center">
            公司介紹
          </h2>
        </div>
      </div>
      <div
        class="baseWidth py-12 tableSmWidth:pt-20"
      >
        <div class="text-white text-2xl tableSmWidth:text-4xl">
          <h2 class="leading-[2]">
            <span class="text-brand">貴金屬</span>資源循環
          </h2>
          <h2 class="leading-[2]">
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
                鎢回收率100%/結回收率100%
              </p>
            </div>
          </li>
        </ul>
        <div class="text-white text-center text-xl leading-[2] my-8 tableSmWidth:mt-40 tableSmWidth:mb-12 py-10">
          <p class="mb-8">
            我們於2010年在台灣高雄成立,
            <br />
            是一家以環保為核心的綠色企業,
            <br />
            專注於鎢鋼、高速鋼及鎢泥的回收再利用。
          </p>
          <p class="mb-8">
            擁有20年以上廢料回收經驗,我們深知資源的價值與回收再利用的重要性。憑藉專業的技術圖隊,我們能有效且高效率地
            回收、分類與處理各類鋼鋼廢料,確保再生產品的品質與純度。
          </p>
          <p class="mb-8">
            我們始終堅持品質第一的原則,嚴格控管回收產品的品質,確保符合客户的需求與標準。同時,我們提供合理格的專業
            回收服務,讓客戶在獲得高品質產品的同時,也能創造更高的經濟效益。
          </p>
          <p class="mb-8">
            我們的再生產品種類多元,包括錦粉、錦綱、高速鋼等,以滿足不同客戶的需求;也能依照實際情況,提供客製化的回收解
            決方案,滿足特殊需求。
          </p>
          <p class="mb-8">
            我們將環保理念貫徹於鶴調度料回收的每一環節,確保產品生產與使用的環境友善,實現絲色能源與環保經濟的永濤發展。
          </p>
          <p class="mb-8">
            憑藉豊富的產業經驗與良好信譽,我們已與多家國內外企業建立長剛穩定的合作關係,成為您值得信頼的合作夥伴。
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
          <video
            class="absolute top-0 left-0 w-full h-full"
            src="/aboutCompany.mp4"
            muted
            loop
            playsinline
            controls
          ></video>
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
