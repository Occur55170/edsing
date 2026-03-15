<script lang="ts" setup>
const config = useRuntimeConfig()
const baseURL = config.app.baseURL
const { t } = useI18n()

interface Props {
  class?: string;
  itemName: string;
  itemImg: string;
  quoteUrl: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  itemName: '',
  itemImg: '',
  quoteUrl: '',
})
</script>

<template>
  <div class="bg-brand text-white flex items-stretch flex-wrap tableSmWidth:flex-nowrap">
    <div class="grow flex flex-wrap items-center desktopSmWidth:px-6 px-[5%] lg:px-8 pt-6 pb-2 tableSmWidth:py-2">
      <div class="w-full">
        <h2 class="text-[48px] desktopSmWidth:text-[64px] mb-8 tableSmWidth:mb-16">
          {{ t(props.itemName) }}
        </h2>
        <slot name="desc"></slot>
      </div>
      <NuxtLink :to="props.quoteUrl"
        class="bg-brand text-2xl text-white font-bold border border-white inline-block py-2 px-4 rounded hover:bg-white hover:text-brand">
        {{ t('請求報價') }}
      </NuxtLink>
    </div>
    <img :src="`${baseURL}${props.itemImg.replace(/^\//, '')}`" alt="" class="w-[100%] tableSmWidth:w-[45%] desktopSmWidth:w-[50%] tableSmWidth:h-[800px]
        object-cover object-[90%_10%] tableSmWidth:object-[80%_30%]
         tableSmWidth:[mask-image:linear-gradient(to_right,transparent,black)]
         [mask-image:linear-gradient(to_bottom,transparent,black)]
         [mask-repeat:no-repeat]
         [mask-size:100%_100%]" />
  </div>
</template>

<style></style>
