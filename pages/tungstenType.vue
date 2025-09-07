<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: '鎢粉種類介紹',
})
</script>

<template>
  <NuxtLayout>
    <div class="head pb-[41%] relative">
      <div class="absolute top-0 left-0 h-full w-full block flex flex-wrap content-center justify-center">
        <img src="/img/logo-s.png" class="grow-0 mx-auto max-w-[50%] desktopSmWidth:max-w-[800px] mb-4" alt="logo" />
      </div>
    </div>
    <div class="content pb-[200px] py-4 bg-accent text-white">
      <ul>
        <li class="flex items-center my-12">
          <img src="/img/TungstenType/TungstenType-list-1.jpg" alt="" class="w-[20%]" />
          <div class="mx-4">
            <h4>碳化鎢粉</h4>
            <h4>Tungsten Carbide Powder</h4>
            <p>
              Available in 0.2µm - 60µm tungsten carbide powder.
            </p>
            <p>
              The particle size, carbon content, additives, and physical properties can be customized according to customer requirements, ensuring the product meets diverse industrial applications.
            </p>
            <p>
              我們可提供 0.2µm~60µm 各種粒度的碳化鎢粉。
            </p>
            <p>
              碳化鎢粉的粒徑、碳含量、添加劑及物理性能皆可依照客戶需求進行調整,確保產品符合不同產業的應用標準。
            </p>
          </div>
        </li>
        <li class="flex items-center my-12">
          <img src="/img/TungstenType/TungstenType-list-1.jpg" alt="" class="w-[20%] order-2" />
          <div class="mx-4 order-1">
            <h4>鎢粉</h4>
            <h4>Tungsten Metal Powder</h4>
            <p>
              我們可提供 0.2um-60um 各種規格的錫粉。
            </p>
            <p>
              鎢粉的粒度、碳含量、添加劑及物理特性,都能依照客戶需求進行調整。
            </p>
            <p>
              我們可提供 0.2um-60um 各種規格的錫粉。
              鎢粉的粒度、碳含量、添加劑及物理特性,都能依照客戶需求進行調整。
            </p>
            <p>
              Available in 0.2um - 60um tungsten powder.
            </p>
            <p>
              The particle size, carbon content, additives, and physical properties can be customized to meet customer requirements.
            </p>
          </div>
        </li>
        <li class="flex items-center my-12">
          <img src="/img/TungstenType/TungstenType-list-3.jpg" alt="" class="w-[20%]" />
          <div class="mx-4">
            <h4>三氧化鎢粉</h4>
            <h4>Tungsten Trioxide</h4>
            <p>WO<sub>3</sub> 含量/WO<sub>3</sub> Content： 99.99%</p>
            <p>鬆裝比重/Apparent Density： 2.4-3.0 g/cm<sup>3</sup></p>
            <p>顆粒粒度/Particle Size (FSSS)：12-23 µm</p>
            <p>三氧化鎢粉具有高純度與穩定的物理特性,可依照客戶需求調整顆粒大小與密度,廣泛應用於鋼製品及相關材料生產。</p>
            <p>Tungsten trioxide powder features high purity and stable physical properties. Particle size and density can be customized according to customer needs, making it suitable for a wide range of tungsten products and material applications.</p>
          </div>
        </li>
        <li class="flex items-center my-12">
          <img src="/img/TungstenType/TungstenType-list-4.jpg" alt="" class="w-[20%] order-2" />
          <div class="mx-4 order-1">
            <h4>藍色氧化鎢</h4>
            <h4>Blue Tungsten Oxide</h4>
            <p>鎢含量/Tungsten Content (W): 79.2%</p>
            <p>其中WO<sub>2</sub> :35.0%-85.0%</p>
            <p>鬆裝比重/Apparent Density: 2.2-2.8 g/cm<sup>3</sup></p>
            <p>顆粒粒度/Particle Size (FSSS): 12-23 µm</p>
            <p>霍爾流動性/Hall Flowability: 25-40 s/50 g</p>
            <p>藍色氧化錫具有良好的穩定性與適應性,可依照客戶需求調整顆粒分布及其他特性,廣泛應用於鑰粉末冶金及相關製程。</p>
            <p>Blue tungsten oxide features excellent stability and adaptability. Particle distribution and other properties can be customized based on customer needs, making it widely applicable in tungsten powder metallurgy and related production processes.</p>
          </div>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.head {
  background-image:
    linear-gradient(to top, rgba(6, 39, 55, .9) 15%, rgba(6, 39, 55, .1) 40%), /* 紅色漸層 */
    url('/img/introduce/introduceHead.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  background: #062737;

  &>ul h4 {
    font-size: 53px;
  }

  @include baseWidth(calc((100% - 1300px)/2), calc((100% - 1300px)/2));
}

</style>
