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
  <div class="acquisition bg-brand text-white flex items-stretch flex-wrap tableSmWidth:flex-nowrap relative">
    <div
      class="grow flex flex-wrap items-center desktopSmWidth:px-6 px-[5%] lg:px-8 pt-6 pb-2 tableSmWidth:pb-2 tableSmWidth:pt-0 relative z-[2]">
      <div class="w-full">
        <h2 class="text-[48px] desktopSmWidth:text-[64px] mb-8">
          {{ t(props.itemName) }}
        </h2>
        <slot name="desc"></slot>
        <NuxtLink :to="props.quoteUrl"
          class="bg-brand mt-16 text-2xl text-white font-bold border border-white inline-block py-2 px-4 rounded hover:bg-white hover:text-brand">
          {{ t('請求報價') }}
        </NuxtLink>
      </div>
    </div>
    <img :src="`${baseURL}${props.itemImg.replace(/^\//, '')}`" alt="" class="w-[100%] tableSmWidth:w-[45%] desktopSmWidth:w-[50%] tableSmWidth:h-[800px]
        object-cover object-[90%_10%] tableSmWidth:object-[80%_30%]
         tableSmWidth:[mask-image:linear-gradient(to_right,transparent,black)]
         [mask-image:linear-gradient(to_bottom,transparent,black)]
         [mask-repeat:no-repeat]
         [mask-size:100%_100%] relative z-[1]" />
  </div>
</template>

<style lang="scss" scoped>
.acquisition {

  /* 在底部產生一道漸層屏障，用來無縫銜接下方的 recycleBlock (#020F17) */
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    /* 微調以避免 1px 渲染細線 */
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to bottom, transparent, #020F17);
    pointer-events: none;
    z-index: 10;
  }

  @media (min-width: 900px) {
    &::after {
      height: 250px;
      /* 桌機有比較大的畫面，漸層拉長讓銜接更柔和 */
    }
  }
}
</style>
