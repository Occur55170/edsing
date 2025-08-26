<script lang="ts" setup>
const route = useRoute()
useHead({
  title: '收購項目-高速鋼合金廢料',
})
</script>

<template>
  <NuxtLayout name="list">
    <div>
      <AcquisitionItem
        :item-name="'高速鋼合金廢料'"
        :item-img="'/img/HighSpeedSteel/HighSpeedSteel-list-4.jpg'"
        :quote-url="`${ route.path }#ContractForm`"
      >
        <template #desc>
          <p class="text-2xl leading-[2]">
            高速鋼(HSS)有多種牌號,所有鋼都包括碳作為常見的合金元素,以及鎢、鈷和銅等各種其他成分。
          </p>
        </template>
      </AcquisitionItem>
      <div class="recycleBlock bg-accent text-white">
        <h3 class="text-[64px] font-bold mb-4">
          我們收購的項目
          <br />
          各式型號歡迎詢問。
        </h3>
        <p class="text-2xl mb-20 leading-[2]">
          回收固體、刨花、M2、M35、M42、T5、T15、D2
        </p>

        <ul>
          <li>HSS各式工具</li>
          <li>HSS刨花</li>
          <li>M2牙板</li>
          <li>沖棒</li>
          <li>頭尾料</li>
          <li>工具鋼</li>
        </ul>
      </div>
      <ContractForm id="ContractForm" class="pb-[200px]" banner-img="/img/HighSpeedSteel/HighSpeedSteel-bottom.jpg" />
    </div>
  </NuxtLayout>
</template>
