<script lang="ts" setup>
// import IconAirplaneTake from '~icons/fluent/airplane-take-off-24-regular'
import MaterialSymbolsArrowForwardIos from '~icons/material-symbols/arrow-forward-ios'
const { locale, t } = useI18n()
</script>

<template>
  <div class="footer">
    <div class="flex justify-between items-center py-20 px-10">
      <img src="/img/logo-white.svg" class="grow-0" alt="logo" />
      <div class="text-white leading-[3] mx-16 grow text-xl">
        <p>聯絡電話:(07)6115753</p>
        <p>傳真:(07)6113753</p>
        <p>地址:高雄市路竹區民有路153-1號</p>
        <p>Copyright © EDSING Metal Products Co. Ltd All rights reserved.</p>
      </div>
      <NuxtLink to="" class="text-white bg-accent px-4 py-2 grow-0 flex items-center">
        {{ t('contact us') }}
        <MaterialSymbolsArrowForwardIos />
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.footer {
  @apply bg-brand relative;
  &::before {
    content: '';
    @apply absolute top-0 left-0 block w-0 h-0 block;
    border-style: solid;
    border-width: 50px;
    border-color: #020F17 transparent transparent #020F17;
  }
  & > div{
    max-width: 1600px;
    margin: 0 auto;
  }
}
</style>
