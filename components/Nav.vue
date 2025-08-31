<script lang="ts" setup>
import TablerWorld from '~icons/tabler/world'
import MaterialSymbolsFormatListBulletedRounded from '~icons/material-symbols/format-list-bulleted-rounded'

interface Props {
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
})

const { locale, t } = useI18n()
const { width } = useWindowWidth()
const isMenuOpen = ref<boolean>(false)

function onChangeLangue () {
  if (locale.value === 'zh-tw') {
    locale.value = 'en'
  } else {
    locale.value = 'zh-tw'
  }
}

function openMenu () {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div :class="`nav flex justify-between items-stretch bg-accent py-4 desktopSmWidth:p-0 relative ${props.class}`">
    <NuxtLink to="/" class="inline-block self-center">
      <img src="/img/logo.png" alt="logo" />
    </NuxtLink>
    <button class="listBtn desktopSmWidth:hidden block w-[50px]" @click="openMenu()">
      <MaterialSymbolsFormatListBulletedRounded class="text-white w-full h-full" />
    </button>
    <div
      class="navList bg-white absolute z-[20] top-full left-full w-full desktopSmWidth:w-auto desktopSmWidth:static desktopSmWidth:bg-transparent desktopSmWidth:flex items-stretch text-md xl:text-xl transition-transform duration-800 flex-wrap desktopSmWidth:flex-nowrap"
      :class=" isMenuOpen ? 'flex -translate-x-full' : ''"
    >
      <ul class="flex flex-wrap desktopSmWidth:flex-nowrap desktopSmWidth:w-full w-full justify-between items-center mx-4 desktopSmWidth:mx-0 my-2 xl:my-8">
        <li class="mx-1 xl:mx-2 my-2 desktopSmWidth:my-0 py-2 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/introduce" class="desktopSmWidth:text-white">
            {{ t('about us') }}
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2 my-2 desktopSmWidth:my-0 py-2 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/" class="desktopSmWidth:text-white">
            {{ t('recycle') }}
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2 my-2 desktopSmWidth:my-0 py-2 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/" class="desktopSmWidth:text-white">
            碳化鎢粉
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2 my-2 desktopSmWidth:my-0 py-2 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/" class="desktopSmWidth:text-white">
            切割鉅片
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2 my-2 desktopSmWidth:my-0 py-2 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/" class="desktopSmWidth:text-white">
            機械設備
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2 my-2 desktopSmWidth:my-0 py-2 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/" class="desktopSmWidth:text-white">
            研磨材料
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2 my-2 desktopSmWidth:my-0 py-2 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/" class="desktopSmWidth:text-white">
            量測設備
          </NuxtLink>
        </li>
        <li class="mx-1 xl:mx-2 my-2 desktopSmWidth:my-0 py-2 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/contactUs" class="desktopSmWidth:text-white">
            {{ t('contact us') }}
          </NuxtLink>
        </li>
        <li v-if="width < 900" class="flex items-center">
          <span class="mr-4">{{ t('語言') }}:</span>
          <div class="flex items-stretch justify-center border border-stone-400 rounded-full overflow-hidden w-[120px] px-4 my-4">
            <div
              class="relative rounded-full bg-stone-500 h-[35px] w-[35px] my-1 transition-transform"
              :class="locale === 'zh-tw' ? 'translate-x-full' : '-translate-x-full' "
              @click="onChangeLangue()"
            >
              <div
                class="absolute top-0 right-[110%] w-[80px] h-full flex items-center justify-center pl-3"
                :class="locale === 'en' ? '' : '' "
              >
                繁體中文
              </div>
              <div
                class="absolute top-0 left-[110%] w-[80px] h-full flex items-center justify-center pr-3"
                :class="locale === 'zh-tw' ? '' : '' "
              >
                English
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div v-if="width > 900" class="changeLangueBtn shrink-0 flex items-center bg-brand ml-[20px] xl:ml-[50px] xl:pl-4">
        <TablerWorld class="desktopSmWidth:text-white" />
        <div
          class="px-2 xl:px-4 text-xl desktopSmWidth:text-white bg-brand"
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

@media (max-width: 900px) {
  .nav{
    overflow: unset;
    @include baseWidth(0, 2%, 2%, 2%);
  }
}

</style>
