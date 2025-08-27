<script lang="ts" setup>
import TablerWorld from '~icons/tabler/world'
interface Props {
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
})

const { locale, t } = useI18n()

function onChangeLangue () {
  if (locale.value === 'zh-tw') {
    locale.value = 'en'
  } else {
    locale.value = 'zh-tw'
  }
}
</script>

<template>
  <div :class="`nav flex justify-between items-stretch bg-accent ${props.class}`">
    <img src="/img/logo.png" alt="logo" />
    <div class="flex items-stretch text-md xl:text-xl">
      <ul class="flex justify-between items-center my-2 xl:my-8">
        <li class="mx-1 xl:mx-2">
          <NuxtLink to="/contactUs" class="text-white">
            {{ t('about us') }}
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2">
          <NuxtLink to="/" class="text-white">
            {{ t('recycle') }}
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2">
          <NuxtLink to="/" class="text-white">
            碳化鎢粉
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2">
          <NuxtLink to="/" class="text-white">
            切割鉅片
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2">
          <NuxtLink to="/" class="text-white">
            機械設備
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2">
          <NuxtLink to="/" class="text-white">
            研磨材料
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2">
          <NuxtLink to="/" class="text-white">
            量測設備
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2">
          <NuxtLink to="/contactUs" class="text-white">
            {{ t('contact us') }}
          </NuxtLink>
        </li>
      </ul>
      <div class="changeLangueBtn flex items-center bg-brand ml-[20px] xl:ml-[50px] xl:pl-4">
        <TablerWorld class="text-white" />
        <div
          class="px-2 xl:px-4 bg-blue-100 text-xl text-white bg-brand"
        >
          {{ locale === 'zh-tw' ? 'English' : '繁體中文' }}
        </div>
        <button
          class="block absolute top-0 left-0 w-full h-full"
          @click="onChangeLangue()"
        ></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav{
  overflow: hidden;
  @include baseWidth(0, 2%, 0%, 1%);
}
.changeLangueBtn {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 99%;
    background: theme('colors.brand.DEFAULT');
    display: block;
    width: 50px;
    height: 101%;
    clip-path: polygon(
      95% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
    );
  }
  &:hover {
    &, &>div, &::before {
      @apply bg-brand-dark;
    }
  }
}

@media (max-width: 1200px) {
  .changeLangueBtn {
  &::before {
    width: 30px;

  }
}
}

</style>
