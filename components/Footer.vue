<script lang="ts" setup>
const { locale, t } = useI18n()

</script>

<template>
  <div class="footer">
    <img src="/public/logo-white.svg" alt="logo" />
    <p>聯絡電話:(07)6115753</p>
    <p>傳真:(07)6113753</p>
    <p>地址:高雄市路竹區民有路153-1號</p>
    <p>Copyright © EDSING Metal Products Co. Ltd All rights reserved.</p>
    <NuxtLink to="" class="text-white bg-accent px-4 py-2">
      {{ t('contact us') }}
    </NuxtLink>
  </div>
</template>

<style>
.footer {
  background-color:#03a1e9;
}
</style>
