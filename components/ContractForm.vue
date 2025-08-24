<script lang="ts" setup>
import StreamlineInterfaceUploadButton1ArrowButtonDownloadInternetNetworkServerUpUpload from '~icons/streamline/interface-upload-button-1-arrow-button-download-internet-network-server-up-upload'

interface Props {
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
})

const previewUrl = ref<string | null>(null)

function onFileChange (e: Event) {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    previewUrl.value = URL.createObjectURL(file)
  }
}

function removeImage () {
  previewUrl.value = null
}
</script>
<template>
  <div :class="`${ props.class } formSection flex border-1 bg-slate-500`">
    <div class="grow">
      <h3 class="text-white text-[56px] mb-8">
        請求定價
      </h3>
      <p class="text-white text-xl leading-[2]">
        若您沒有在上面看到您想回收的商品也可以直接聯繫我們喔。<br />
        我們可以輕鬆回收您的鎢廢料。<br />
        提交下面的表格，我們的採購國隊將與您聯繫以討論報償。<br />
        將為您的材料提供最優惠的價格。<br />
      </p>
    </div>
    <form class="w-50 bg-slate-700 p-4">
      <div class="flex justify-between mb-10">
        <label class="w-[49%]" to="name">
          <span class="requireInput mb-2 block text-white">聯絡人姓名</span>
          <input id="name" class="block p-1 w-full" type="text" />
        </label>
        <label class="w-[49%]" to="companyName">
          <span class="requireInput mb-2 block text-white">公司名稱</span>
          <input id="companyName" class="block p-1 w-full" type="text" />
        </label>
      </div>
      <div class="flex justify-between mb-10">
        <label class="w-[49%]" to="email">
          <span class="requireInput mb-2 block text-white">電子郵件</span>
          <input id="email" class="block p-1 w-full" type="text" /></label>
        <label class="w-[49%]" to="phone">
          <span class="requireInput mb-2 block text-white">電話</span>
          <input id="phone" class="block p-1 w-full" type="text" /></label>
      </div>
      <div class="flex justify-between mb-10">
        <label class="w-[49%]" to="country">
          <span class="requireInput mb-2 block text-white">國家</span>
          <input id="country" class="block p-1 w-full" type="text" />
        </label>
        <label class="w-[49%]" to="zone">
          <span class="requireInput mb-2 block text-white">州/省/地區</span>
          <input id="zone" class="block p-1 w-full" type="text" />
        </label>
      </div>
      <div class="flex justify-between mb-10">
        <label class="w-[49%]" to="material">
          <span class="requireInput mb-2 block text-white">材料</span>
          <input id="material" class="block p-1 w-full" type="text" />
        </label>
        <label class="w-[49%]" to="materialCount">
          <span class="requireInput mb-2 block text-white">材料多少</span>
          <input id="materialCount" class="block p-1 w-full" type="text" />
        </label>
      </div>
      <div class="mb-6">
        <label to="materialImg">
          <span class="requireInput mb-2 block text-white">上傳素材圖片</span>
          <!-- <input id="materialImg" class="block p-1 w-full" type="text" /> -->
          <div class="my-4">
            <div v-if="previewUrl" class="relative">
              <img
                :src="previewUrl"
                alt="已上傳圖片"
                class="h-40 w-40 rounded-lg object-cover border"
              />
              <button
                type="button"
                class="absolute top-2 right-2 rounded-full bg-white shadow p-1 hover:bg-gray-100"
                @click="removeImage"
              >
                <span class="text-xs text-gray-600">✕</span>
              </button>
            </div>
            <label
              v-else
              class="flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500"
            >
              <input
                type="file"
                accept="image/*"
                class="hidden"
                @change="onFileChange"
              />
              <StreamlineInterfaceUploadButton1ArrowButtonDownloadInternetNetworkServerUpUpload class="text-gray-500" />
              <span class="text-sm text-gray-500">點擊上傳圖片</span>
            </label>
          </div>
        </label>
      </div>
      <div class="mb-6">
        <span class="requireInput mb-2 block text-white">訊息</span>
        <textarea id="mailContent" name="" cols="20" rows="5" class="w-full"></textarea>
      </div>
      <div class="flex justify-end w-full">
        <button class="bg-red-600 py-2 px-8 inline-block" type="submit">
          送出
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.formSection{
  padding: 50px calc((100% - 1600px)/2) ;
}
</style>
