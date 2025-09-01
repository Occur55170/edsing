<script setup lang="ts">
useHead({
  title: '稀有金屬介紹',
})
</script>
<template>
  <div>
    <NuxtLayout>
      <div class="header w-full overflow-hidden">
        <img class="tableSmWidth:block w-full" src="/img/rareMetal/RareMetal-top.jpg" alt="" />
      </div>
      <div class="flex">
        <img class="tableSmWidth:block w-full" src="/img/rareMetal/global.png" alt="" />
        <div>
          <p>我們長期大量收購各類金屬廢料,包括:</p>
          <p>硬質合金刀具廢料</p>
          <p>金屬陶瓷廢料</p>
          <p>高速鋼廢料</p>
          <p>粉末及固體廢料</p>
          <p>油、水、鐵混合廢料</p>
          <p>同時,我們也提供各式特殊及稀有金屬的回收服務。</p>
          <p>歡迎直接聯繫我們,洽詢詳情!</p>
        </div>
      </div>
      <div
        class="rareMetalBottom mb-0 tableSmWidth:mb-[100px]"
      >
        <div class="bg-white/50 p-4">
          <img src="/img/rareMetal/6-1.jpg" alt="" />
          <img src="/img/rareMetal/6-2.jpg" alt="" />
          <img src="/img/rareMetal/6-3.jpg" alt="" />
          <img src="/img/rareMetal/6-4.jpg" alt="" />
          <img src="/img/rareMetal/6-5.jpg" alt="" />
          <img src="/img/rareMetal/6-6.jpg" alt="" />
          <img src="/img/rareMetal/6-7.jpg" alt="" />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.rareMetalBottom {
  background: url('/img/rareMetal/RareMetal-bottom.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  position: relative;
  &>div{
    // background: #ffffff;
  }

  // &::before {
  //   content: '';
  //   display: block;
  //   @apply absolute z-0 w-full h-full top-0 left-0 inset-0 bg-gradient-to-tr from-white/0 via-white/95 to-white/100;
  // }

}
</style>
