<script lang="ts" setup>
import TablerWorld from '~icons/tabler/world'
import MaterialSymbolsFormatListBulletedRounded from '~icons/material-symbols/format-list-bulleted-rounded'
import IcBaselineArrowDropDown from '~icons/ic/baseline-arrow-drop-down'
import IcBaselineArrowDropUp from '~icons/ic/baseline-arrow-drop-up'

interface Props {
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
})

const { locale, t } = useI18n()
const device = useDevice()
const isMenuOpen = ref<boolean>(false)
const isOpenRecycleList = ref<boolean>(false)

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

function openRecycleList () {
  isOpenRecycleList.value = !isOpenRecycleList.value
}
</script>

<template>
  <div :class="`nav flex justify-between items-stretch bg-accent py-4 desktopSmWidth:p-0 relative ${props.class}`">
    <NuxtLink to="/" class="cursor-pointer inline-block self-center py-2 shrink-0">
      <img src="/img/logo.png" alt="logo" />
    </NuxtLink>
    <button class="listBtn desktopSmWidth:hidden block w-[50px]" @click="openMenu()">
      <MaterialSymbolsFormatListBulletedRounded class="text-white w-full h-full" />
    </button>
    <div v-if="isMenuOpen" class="desktopSmWidth:hidden fixed top-0 left-0 w-full h-full bg-black/30 z-[10]" @click="isMenuOpen = false"></div>
    <div
      class="navList bg-white text-md xl:text-xl absolute z-[20] desktopSmWidth:top-full left-full desktopSmWidth:w-auto tableSmWidth:w-[50%] w-[80%] h-[100vh] desktopSmWidth:h-auto desktopSmWidth:w-auto desktopSmWidth:static desktopSmWidth:bg-transparent desktopSmWidth:flex items-stretch flex-wrap desktopSmWidth:flex-nowrap transition-transform duration-800 "
      :class=" isMenuOpen ? 'flex -translate-x-full' : ''"
    >
      <ul class="flex flex-wrap desktopSmWidth:flex-nowrap desktopSmWidth:w-full w-full justify-between desktopSmWidth:flex-end content-baseline items-center my-2 xl:my-8 desktopSmWidth:ml-2">
        <li class="px-2 py-4 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/introduce" class="desktopSmWidth:text-white NavALink">
            {{ t('about us') }}
          </NuxtLink>
        </li>
        <li class="desktopSmWidth:pl-2 desktopSmWidth:pr-0 py-4 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0 group">
          <div class="relative">
            <div
              class="recycleA desktopSmWidth:text-white cursor-pointer transition-colors duration-300  desktopSmWidth:group-hover:text-white flex justify-between items-center px-2"
              @click="openRecycleList()"
            >
              {{ t('recycle') }}
              <IcBaselineArrowDropDown v-if="!isOpenRecycleList" class="text-2xl" />
              <IcBaselineArrowDropUp v-else class="text-2xl" />
            </div>
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <ul
                v-if="isOpenRecycleList"
                class="desktopSmWidth:absolute top-full left-0 bg-white desktopSmWidth:shadow-lg desktopSmWidth:hidden desktopSmWidth:group-hover:block min-w-max bg-slate-100"
              >
                <li class="px-4 py-4 desktopSmWidth:hover:bg-gray-300 cursor-pointer border-b-2">
                  <NuxtLink to="/tungstenHard">
                    碳化鎢硬廢料
                  </NuxtLink>
                </li>
                <li class="px-4 py-4 desktopSmWidth:hover:bg-gray-300 cursor-pointer border-b-2">
                  <NuxtLink to="/tungstenSoft">
                    碳化鎢軟廢料
                  </NuxtLink>
                </li>
                <li class="px-4 py-4 desktopSmWidth:hover:bg-gray-300 cursor-pointer">
                  <NuxtLink to="/highSpeedSteel">
                    高速鋼廢料
                  </NuxtLink>
                </li>
              </ul>
            </transition>
          </div>
        </li>
        <li class="px-2 py-4 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/tungstenType" class="desktopSmWidth:text-white NavALink">
            {{ t('wolfram carbide') }}
          </NuxtLink>
        </li>
        <li class="px-2 py-4 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/" class="desktopSmWidth:text-white NavALink">
            {{ t('mechanical equipment') }}
          </NuxtLink>
        </li>
        <li class="px-2 py-4 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/rareMetal" class="desktopSmWidth:text-white NavALink">
            {{ t('introduction to rare metals') }}
          </NuxtLink>
        </li>
        <li class="px-2 py-4 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/" class="desktopSmWidth:text-white NavALink">
            {{ t('measurement equipment') }}
          </NuxtLink>
        </li>
        <li class="px-2 py-4 desktopSmWidth:py-0 w-full desktopSmWidth:w-auto border-b-2 desktopSmWidth:border-0">
          <NuxtLink to="/contactUs" class="desktopSmWidth:text-white NavALink">
            {{ t('contact us') }}
          </NuxtLink>
        </li>
        <li class="flex desktopSmWidth:hidden mx-4 items-center">
          <span class="mr-4">{{ t('langue') }}:</span>
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
      <div class="changeLangueBtn hidden desktopSmWidth:flex shrink-0 items-center bg-brand ml-[20px] xl:ml-[50px] xl:pl-4">
        <TablerWorld class="desktopSmWidth:text-white" />
        <div
          class="px-2 xl:px-4 desktopSmWidth:text-white bg-brand"
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
  @include baseWidth(0, 2%, 0%, 1%);
  .NavALink {
    @apply cursor-pointer;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      height: 1px;
      width: 0;
      transition: all .3s;
      background: #fff;
    }
    &:hover::after {
      width: 100%;
      left: 0;
    }
  }
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
