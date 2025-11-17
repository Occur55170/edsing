<script lang="ts" setup>
import MaterialSymbolsArrowForwardIos from '~icons/material-symbols/arrow-forward-ios'
const { t } = useI18n()
const { width } = useWindowWidth()

type NType<T> = T | null;
const footerElement = ref < NType<HTMLElement>>(null)

const footerStyle = ref<string>('')

function calculateFooterPb () {
  if (footerElement.value && footerElement.value?.offsetHeight) {
    footerStyle.value = `padding-bottom: ${footerElement.value?.offsetHeight - 100}px;`
  }
}

watch(width, () => {
  calculateFooterPb()
})

onMounted(() => {
  calculateFooterPb()
})
</script>

<template>
  <div class="relative footerWrap" :style="width > 600 ? footerStyle : ''">
    <div ref="footerElement" class="footer relative tableSmWidth:absolute bottom-0 left-0 w-full">
      <div class="flex justify-center xl:justify-between items-center py-20 text-center xl:text-left xl:px-10 flex-wrap xl:flex-nowrap">
        <img src="/img/logo-white.svg" class="grow-0" alt="logo" />
        <div class="text-white leading-[2] xl:leading-[3] my-10 tableSmWidth:my-20 xl:my-0 xl:mx-16 grow text-xl w-full xl:w-auto">
          <p>{{ t('聯絡電話') }}：(07)6115753</p>
          <p>{{ t('傳真') }}：(07)6113753</p>
          <p>{{ t('地址') }}：{{ t('高雄市路竹區民有路153-1號') }}</p>
          <p>Copyright © EDSING Metal Products Co. Ltd All rights reserved.</p>
        </div>
        <NuxtLink to="/contactUs" class="text-white bg-accent font-bold text-xl px-8 py-4 grow-0 flex items-center hover:bg-white hover:text-black">
          <span class="mr-10">{{ t('contact us') }}</span>
          <MaterialSymbolsArrowForwardIos />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  @apply bg-brand;
  clip-path: polygon(
    calc(0% + 100px) 0%,
    100% 0%,
    100% 100%,
    0% 100%,
    0% calc(0% + 100px)
  );
  z-index: 10;

  @include baseWidth($l-mobile:5%, $r-mobile:5%);
}
.footerWrap{
  &::after {
    content: '';
    @apply block absolute top-[-100px] left-0 w-full h-full z-[-1];
    background-color: #020F17;
  }
}

@media (max-width: 600px) {
  .footer{
    clip-path: unset
  }
}
</style>
