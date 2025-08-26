<script lang="ts" setup>

const route = useRoute()

useHead({
  title: '收購項目-碳化鎢軟廢料',
})
</script>
<template>
  <NuxtLayout name="list">
    <div>
      <AcquisitionItem
        :item-name="'碳化鎢軟廢料'"
        :item-img="'/img/TungstenSoft/soft-head.jpg'"
        :quote-url="`${ route.path }#ContractForm`"
      >
        <template #desc>
          <p class="text-2xl leading-[2]">
            我們購買碳化鎢泥,也稱為碳化鎢研磨切屑或碳化鎢軟廢料。
          </p>
        </template>
      </AcquisitionItem>
      <div class="recycleBlock bg-accent text-white">
        <h3 class="text-[64px] font-bold mb-4">
          我們收購的項目
        </h3>
        <p class="text-2xl mb-20 leading-[2]">
          我們將通過在我們的乾燥爐中乾燥來明確確認砂輪和含油和水分的硬質合金污泥的質量,從而提供合適的購買價格。
          碳化鎢泥的百分比不會太高或太低:濕的或乾的,20%W或90%W,我們都買。
          我們購買國內和國際材料,並很樂意協助任何物流。
          如需當前報價請聯繫我們。
        </p>
        <p>
        </p>
      </div>
      <ContractForm id="ContractForm" class="pb-[200px]" banner-img="/img/TungstenSoft/soft-bottom.jpg" />
    </div>
  </NuxtLayout>
</template>
