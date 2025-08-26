<script lang="ts" setup>
const route = useRoute()
useHead({
  title: '收購項目-碳化鎢硬廢料',
})
</script>
<template>
  <NuxtLayout name="list">
    <AcquisitionItem
      :item-name="'碳化鎢硬廢料'"
      :item-img="'/img/TungstenHard/recycle-head-1.jpg'"
      :quote-url="`${ route.path }#ContractForm`"
    >
      <template #desc>
        <p class="text-2xl leading-[2]">
          各種不同行業包括車間和製造商，
          <br />
          我們回收多種形式歡迎下方諮詢
        </p>
      </template>
    </AcquisitionItem>
    <div class="recycleBlock mx-auto bg-accent text-white">
      <h3 class="text-[64px] font-bold mb-4">
        我們收購的項目
      </h3>
      <p class="text-2xl mb-20">
        回收您使用過的鑽頭和刀片的價值硬質合金。
      </p>
      <ul class="grid grid-cols-3 gap-x-6 gap-y-20">
        <li class="w-full">
          <img src="/img/TungstenHard/recycle-list-1.jpg" alt="" class="mb-3 w-full" />
          <p class="text-2xl">
            鎢鑽頭
          </p>
        </li>
        <li class="w-full">
          <img src="/img/TungstenHard/recycle-list-2.jpg" alt="" class="mb-3 w-full" />
          <p class="text-2xl">
            碳化鎢耐磨件
          </p>
        </li>
        <li class="w-full">
          <img src="/img/TungstenHard/recycle-list-3.jpg" alt="" class="mb-3 w-full" />
          <p class="text-2xl">
            鎢刀片
          </p>
        </li>
        <li class="w-full">
          <img src="/img/TungstenHard/recycle-list-4.jpg" alt="" class="mb-3 w-full" />
          <p class="text-2xl">
            各式碳化鎢邊角料
          </p>
        </li>
        <li class="w-full">
          <img src="/img/TungstenHard/recycle-list-5.jpg" alt="" class="mb-3 w-full" />
          <p class="text-2xl">
            切割料
          </p>
        </li>
        <li class="w-full">
          <img src="/img/TungstenHard/recycle-list-6.jpg" alt="" class="mb-3 w-full" />
          <p class="text-2xl">
            礦山工具
          </p>
        </li>
      </ul>
    </div>
    <ContractForm id="ContractForm" class="pb-[200px]" banner-img="/img/TungstenHard/recycle-bottom-bg.jpg" />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
</style>
