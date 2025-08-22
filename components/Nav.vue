<script setup>
const { locale, t } = useI18n()

</script>

<template>
  <div class="nav flex justify-between items-center p-4">
    <img src="~/public/logo.png" alt="logo" />
    <ul class="flex justify-between items-center">
      <li class="mx-2">
        <NuxtLink to="/" class="text-white">
          {{ t('about us') }}
        </NuxtLink>
      </li>
      <li class="mx-2">
        <NuxtLink to="/" class="text-white">
          {{ t('recycle') }}
        </NuxtLink>
      </li>
      <li class="mx-2">
        <NuxtLink to="/" class="text-white">
          碳化鎢粉
        </NuxtLink>
      </li>
      <li class="mx-2">
        <NuxtLink to="/" class="text-white">
          切割鉅片
        </NuxtLink>
      </li>
      <li class="mx-2">
        <NuxtLink to="/" class="text-white">
          機械設備
        </NuxtLink>
      </li>
      <li class="mx-2">
        <NuxtLink to="/" class="text-white">
          研磨材料
        </NuxtLink>
      </li>
      <li class="mx-2">
        <NuxtLink to="/" class="text-white">
          量測設備
        </NuxtLink>
      </li>
      <li class="mx-2">
        <NuxtLink to="/contactUs" class="text-white">
          {{ t('contact us') }}
        </NuxtLink>
      </li>
      <li class="mx-2">
        <div class="flex flex-col items-center gap-4">
          <button
            v-if="locale === 'zh-tw'"
            type="button"
            class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-white bg-brand hover:bg-brand-dark"
            @click="locale = 'en'"
          >
            English
          </button>
          <button
            v-else
            type="button"
            class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-white bg-brand hover:bg-brand-dark"
            @click="locale = 'zh-tw'"
          >
            繁體中文
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav{
  background: #020F17
}

</style>
