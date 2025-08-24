<script>

</script>
<template>
  <NuxtLayout name="list">
    <div class="recycleHead bg-brand text-white flex items-stretch">
      <div class="grow flex flex-wrap items-center">
        <div class="w-full">
          <h2 class="text-[64px] mb-16">
            碳化鎢硬廢料
          </h2>
          <p class="text-2xl leading-[2]">
            各種不同行業包括車間和製造商，
            <br />
            我們回收多種形式歡迎下方諮詢
          </p>
        </div>
        <NuxtLink to="/" class="bg-brand text-2xl text-white font-bold border border-white inline-block py-2 px-8" style="border-width: 4px 6px">
          請求報價
        </NuxtLink>
      </div>
      <img
        src="/img/TungstenHard/recycle-head-1-s.jpg"
        alt=""
        class="w-[50%] h-[800px] object-cover object-[80%_30%]
         [mask-image:linear-gradient(to_right,transparent,black)]
         [mask-repeat:no-repeat]
         [mask-size:100%_100%]"
      />
    </div>
    <div class="recycleBlock bg-accent text-white">
      <h3 class="text-[64px] font-bold">
        我們收購的項目
      </h3>
      <p class="text-[32px] mb-8">
        回收您使用過的鑽頭和刀片的
        <br />
        價值硬質合金。
      </p>
      <ul class="grid grid-cols-3 gap-6">
        <li>
          <img src="/img/TungstenHard/recycle-list-1.jpg" alt="" class="h-[300px] object-cover object-[80%_30%]" />
          <p class="text-xl">
            HSS各式工具
          </p>
        </li>
        <li>
          <img src="/img/TungstenHard/recycle-list-1.jpg" alt="" class="h-[300px] object-cover object-[80%_30%]" />
          <p class="text-xl">
            HSS刨花
          </p>
        </li>
        <li>
          <img src="/img/TungstenHard/recycle-list-1.jpg" alt="" class="h-[300px] object-cover object-[80%_30%]" />
          <p class="text-xl">
            M2牙板
          </p>
        </li>
        <li>
          <img src="/img/TungstenHard/recycle-list-1.jpg" alt="" class="h-[300px] object-cover object-[80%_30%]" />
          <p class="text-xl">
            沖棒
          </p>
        </li>
        <li>
          <img src="/img/TungstenHard/recycle-list-1.jpg" alt="" class="h-[300px] object-cover object-[80%_30%]" />
          <p class="text-xl">
            頭尾料
          </p>
        </li>
        <li>
          <img src="/img/TungstenHard/recycle-list-1.jpg" alt="" class="h-[300px] object-cover object-[80%_30%]" />
          <p class="text-xl">
            工具鋼
          </p>
        </li>
      </ul>
    </div>
    <!-- recycleBlock -->
    <ContractForm />
  </NuxtLayout>
</template>

<style scoped>

.recycleHead {
  padding: 50px 50px 50px calc((100% - 1600px)/2) ;
  clip-path:polygon(10% 30%, 10% 60%,90% 60%,90% 30%);
}

.recycleBlock {
  padding: 50px calc((100% - 1600px)/2) ;
}

</style>
