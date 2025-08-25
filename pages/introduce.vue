<script lang="ts" setup>
useHead({
  title: '公司介紹',
})
</script>
<template>
  <NuxtLayout>
    <div class="introduce">
      <div class="head pb-[41%]">
        <img class="absolute top-0 left-0 h-full w-full block" src="/public/img/introduce/introduceHead.jpg" alt="" />
        <div class="absolute top-0 left-0 h-full w-full block flex flex-wrap content-center justify-center">
          <img src="/img/logo-white.svg" class="grow-0 w-[500px]" alt="logo" />
          <h2 class="text-[84px] text-white w-full text-center">
            公司介紹
          </h2>
        </div>
      </div>
      <div class="baseWidth py-20">
        <div class="text-white">
          <h2 class="text-4xl leading-[2]">
            <span class="text-brand">貴金屬</span>資源循環
          </h2>
          <h2 class="text-4xl leading-[2]">
            保護土地，力求<span class="text-brand">環保永續</span>
          </h2>
          <p class="mt-8 text-xl">
            重視製造過程水與空氣的環保處理，並建構完善設備及機制確保工廠用水及空氣排放安全潔淨，保護土地，力求環保永續。
          </p>
        </div>
        <p class="text-white text-center text-xl leading-[2] text-xl mb-12 py-10">
          我們於2010年在台灣高雄成立,
          <br />
          是一家以環保為核心的綠色企業,
          <br />
          專注於鎢鋼、高速鋼及鎢泥的回收再利用。
          <br />
          擁有20年以上廢料回收經驗,我們深知資源的價值與回收再利用的重要性。憑藉專業的技術圖隊,我們能有效且高效率地
          回收、分類與處理各類鋼鋼廢料,確保再生產品的品質與純度。
          <br />
          我們始終堅持品質第一的原則,嚴格控管回收產品的品質,確保符合客户的需求與標準。同時,我們提供合理格的專業
          回收服務,讓客戶在獲得高品質產品的同時,也能創造更高的經濟效益。
          <br />
          我們的再生產品種類多元,包括錦粉、錦綱、高速鋼等,以滿足不同客戶的需求;也能依照實際情況,提供客製化的回收解
          決方案,滿足特殊需求。
          <br />
          我們將環保理念貫徹於鶴調度料回收的每一環節,確保產品生產與使用的環境友善,實現絲色能源與環保經濟的永濤發展。
          <br />
          憑藉豊富的產業經驗與良好信譽,我們已與多家國內外企業建立長剛穩定的合作關係,成為您值得信頼的合作夥伴。
        </p>
        <div class="w-full h-0 relative pb-[56.25%]">
          <iframe
            class="absolute top-0 left-0 w-full h-full mb-4"
            src="https://www.youtube.com/embed/5pUfHnWRsRA?si=Hw4zGdnhh5RXvC2q"
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
  @include baseWidth;
  background: linear-gradient(45deg, #030f17, #032736);
}
</style>
