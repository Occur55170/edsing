<template>
  <div class="header flex justify-between items-center p-4">
    <img src="~/public/logo.png" alt="logo">
    <ul class="flex justify-between">
      <li>
        <NuxtLink to="/" class="text-white">
          關於我們
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-white">
          回收
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-white">
          碳化鎢粉
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-white">
          切割鉅片
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-white">
          機械設備
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-white">
          研磨材料
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-white">
          量測設備
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/email" class="text-white">
          聯繫我們
        </NuxtLink>
      </li>
    </ul>

    <div class="flex flex-col items-center bg-white">
      <div class="flex gap-4">
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          @click="locale = 'en'"
        >
          English
        </button>

        <button
          type="button"
          class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          @click="locale = 'zh-tw'"
        >
          繁體中文
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

</script>

<style scoped>
.header{
  background: #020F17
}
</style>
