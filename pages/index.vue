<template>
  <div>
    <NuxtLayout>
      <!-- <div>
        <img class="block" src="../public/img/header.jpg" alt="">
        <img class="hidden" src="../public/img/header-mobile.jpg" alt="">
      </div> -->
      <!-- <div class="flex flex-row justify-center bg-white">
        <label class="text-gray-600">{{ t('language') }}</label>
        <span class="ml-4 font-bold text-gray-800">{{ locale }}</span>
      </div> -->

      <!-- align-content: center; -->

      <div class="precious bg-accent py-10">
        <div class="flex">
          <h3 class="text-white text-[84px] w-[25%] flex items-center justify-center content-center flex-wrap">
            回收<span class="text-bold block w-full">鎢</span>
          </h3>
          <ul class="flex w-[75%]">
            <li class="relative w-[30%]">
              <img src="/img/index/index-list-1.jpg" class="w-full" />
              <div class="absolute bottom-0 right-0 bg-accent w-[80%] p-2">
                <p class="text-white text-bold text-2xl">
                  鎢硬廢料/合金
                </p>
                <p class="text-white">
                  鑽頭/刀片/採礦等級/鎢基合金鈷鎳高溫合金
                </p>
                <NuxtLink to="/tungstenHard" class="text-brand">
                  {{ t('more') }}
                </NuxtLink>
              </div>
            </li>
            <li class="relative w-[30%]">
              <img src="/img/index/index-list-2.jpg" class="w-full" />
              <div class="absolute bottom-0 right-0 bg-accent w-[80%] p-2">
                <p class="text-white text-bold text-2xl">
                  鎢軟廢料
                </p>
                <p class="text-white">
                  碳化鎢泥/切屑粉末/過濾材料/下腳料
                </p>
                <NuxtLink to="/tungstenSoft" class="text-brand">
                  {{ t('more') }}
                </NuxtLink>
              </div>
            </li>
            <li class="relative w-[30%]">
              <img src="/img/index/index-list-3.jpg" class="w-full" />
              <div class="absolute bottom-0 right-0 bg-accent w-[80%] p-2">
                <p class="text-white text-bold text-2xl">
                  高速鋼
                </p>
                <p class="text-white">
                  高速鋼刨花/銑刀/鑽頭/牙板/各式合金
                </p>
                <NuxtLink to="/highSpeedSteel" class="text-brand">
                  {{ t('more') }}
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="recycle">
        <h3 class="text-white">
          <span class="text-brand">鎢</span>資源循環
        </h3>
        <p class="text-white">
          關注環境保護，將環保理念貫穿在鎢鋼廢料回收的整個過程中，確保產品生產和使用的環境友好性，實現可持續發展的綠能環保經濟。
        </p>
      </div>

      <div class="equipment relative h-0 pb-[400px]">
        <div class="bg-white/75 inline-block p-4 absolute top-1/2 right-1/4 -translate-x-1/4 -translate-y-1/2">
          <h3><span class="text-brand">專業</span>設備</h3>
          <ul class="grid grid-cols-2 gap-4">
            <li>
              <div>合金工具</div>
            </li>
            <li>
              <div>機械設備</div>
            </li>
            <li>
              <div>量測設備</div>
            </li>
            <li>
              <div>磨料</div>
            </li>
          </ul>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const { locale, locales, setLocale, t } = useI18n()
</script>

<style lang="scss" scoped>
.precious {
  @apply bg-accent;
  &>div {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1%;
    box-sizing: border-box;
    h3 {
      text-align: center;
      vertical-align: middle;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        width: 5vw;
        height: 5vw;
        border-width: 10px 0 0 10px;
        border-color: theme('colors.brand.DEFAULT');
        border-style: solid;
      }
    }
  }
  img {
    width: 100%;
    height: 400px;
  }
}
.recycle {
  background: url('/img/index/index-list-3.jpg') no-repeat center center;
  position: relative;
  height: 400px;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(60%);

  }
}

.equipment {
  background: url('/img/index/equipment.png') no-repeat;
  background-size:cover ;
}
</style>
