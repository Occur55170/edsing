<script lang="ts" setup>
import { z, ZodError } from 'zod'
import { sendForm } from '@emailjs/browser'
import StreamlineInterfaceUploadButton1ArrowButtonDownloadInternetNetworkServerUpUpload from '~icons/streamline/interface-upload-button-1-arrow-button-download-internet-network-server-up-upload'

interface Props {
  class?: string;
  bannerImg?: string | null;
  textClass?: string;
  formStyle?: string;
  isHaveDescription?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  bannerImg: null,
  textClass: '',
  formStyle: '',
  isHaveDescription: true,
})

const previewUrl = ref<string | null>(null)
const form = ref<HTMLFormElement | null>(null)
const errors = ref<Record<string, string>>({})

const formSchema = z.object({
  name: z.string().min(1, { message: '請輸入姓名' }),
  companyName: z.string(),
  email: z.string().email('請輸入正確的Email格式').min(1, { message: '請輸入Email' }),
  phone: z.string().min(1, { message: '請輸電話' }).regex(/^\d+$/, '電話號碼只能包含數字'),
  country: z.string(),
  zone: z.string(),
  material: z.string(),
  materialCount: z.string(),
  mailContent: z.string(),
})

const formData = reactive({
  name: '',
  companyName: '',
  email: '',
  phone: '',
  country: '',
  zone: '',
  material: '',
  materialCount: '',
  mailContent: '',
})

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

function onSubmit (e: Event) {
  e.preventDefault()

  try {
    formSchema.parse(formData)
    console.log('Form submitted successfully:', formData)
    errors.value = {}
  } catch (error) {
    if (error instanceof ZodError) {
      const allMessages = error.issues.map(issue => issue.message).join('\n')
      alert(allMessages)
    } else {
      console.error(error)
    }
    return
  }

  if (!form.value) { return }

  sendForm('service_9hriy3l', 'template_8x1k1z1', form.value, {
    publicKey: '_sL4fACYgE7BhhDyA',
  }).then(
    () => {
      console.log('SUCCESS!')
      alert('表單送出')
    },
    (error) => {
      console.log('FAILED...', error.text)
    }
  )
}

</script>
<template>
  <div
    :class="`${ props.class } formSection flex flex-wrap desktopSmWidth:flex-nowrap border-1 relative`"
    :style="!!props.bannerImg ? { backgroundImage: `url(${props.bannerImg})` } : { }"
  >
    <div v-if="!!props.bannerImg" class="formSectionBg"></div>
    <div v-if="props.isHaveDescription" :class="`text-white grow z-10 ${ props.textClass }`">
      <h3 class="text-[56px] mb-8">
        請求定價
      </h3>
      <p class="text-xl leading-[2]">
        若您沒有在上面看到您想回收的商品也可以直接聯繫我們喔。<br />
        我們可以輕鬆回收您的鎢廢料。<br />
        提交下面的表格，我們的採購國隊將與您聯繫以討論報償。<br />
        將為您的材料提供最優惠的價格。<br />
      </p>
    </div>
    <form ref="form" class="mt-12 desktopSmWidth:mt-0 w-[100%] desktopSmWidth:w-[40%] bg-slate-700 p-4 z-10" :class="props.formStyle" @submit="onSubmit">
      <div class="flex justify-between mb-10">
        <label class="w-[49%]" to="name">
          <span class="requireInput mb-2 block text-white">聯絡人姓名</span>
          <input
            id="name"
            v-model="formData.name"
            class="block p-2 w-full text-black"
            type="text"
            name="name"
            required
          />
        </label>
        <label class="w-[49%]" to="companyName">
          <span class="requireInput mb-2 block text-white">公司名稱</span>
          <input
            id="companyName"
            v-model="formData.companyName"
            class="block p-2 w-full text-black"
            type="text"
            name="companyName"
            required
          />
        </label>
      </div>
      <div class="flex justify-between mb-10">
        <label class="w-[49%]" to="email">
          <span class="requireInput mb-2 block text-white">電子郵件</span>
          <input
            id="email"
            v-model="formData.email"
            class="block p-2 w-full text-black"
            type="text"
            name="email"
            required
          />
        </label>
        <label class="w-[49%]" to="phone">
          <span class="requireInput mb-2 block text-white">電話</span>
          <input
            id="phone"
            v-model="formData.phone"
            class="block p-2 w-full"
            name="phone"
            type="tel"
            autocomplete="tel"
            placeholder="+886 912 345 678"
            required
          />
        </label>
      </div>
      <div class="flex justify-between mb-10">
        <label class="w-[49%]" to="country">
          <span class="mb-2 block text-white">國家</span>
          <select
            id="country"
            v-model="formData.country"
            class="block p-2 w-full text-black"
            name="country"
            required
            autocomplete="country"
          >
            <option value="" selected disabled>--- 請選擇---</option>
            <option value="TW">台灣</option>
            <option value="HK">香港</option>
            <option value="JP">日本</option>
            <option value="US">美國</option>
            <option value="OTHER">其他</option>
          </select>
        </label>
        <label class="w-[49%]" to="zone">
          <span class="mb-2 block text-white">州/省/地區</span>
          <input
            id="zone"
            v-model="formData.zone"
            name="zone"
            class="block p-2 w-full text-black"
            type="text"
          />
        </label>
      </div>
      <div class="flex justify-between mb-10">
        <label class="w-[49%]" to="material">
          <span class="mb-2 block text-white">品項</span>
          <input id="material" v-model="formData.material" class="block p-2 w-full" type="text" name="material" />
        </label>
        <label class="w-[49%]" to="materialCount">
          <span class="mb-2 block text-white">數量</span>
          <input id="materialCount" v-model="formData.materialCount" class="block p-2 w-full" type="text" name="materialCount" />
        </label>
      </div>
      <!-- <div class="mb-6">
        <label to="materialImg">
          <span class="requireInput mb-2 block text-white">上傳素材圖片</span>
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
            <label v-else class="flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500">
              <input
                type="file"
                accept="image/*"
                name="my_file"
                class="hidden"
                @change="onFileChange"
              />
              <StreamlineInterfaceUploadButton1ArrowButtonDownloadInternetNetworkServerUpUpload class="text-gray-500" />
              <span class="text-sm text-gray-500">點擊上傳圖片</span>
            </label>
          </div>
        </label>
      </div> -->
      <div class="mb-6">
        <span class="mb-2 block text-white">訊息</span>
        <textarea
          id="mailContent"
          v-model="formData.mailContent"
          name="mailContent"
          cols="20"
          rows="5"
          class="w-full text-black"
        ></textarea>
      </div>
      <div class="flex justify-end w-full">
        <button class="bg-red-600 py-2 px-8 inline-block text-white hover:bg-red-900" type="submit">
          送出
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.formSection{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top 10% right 0%;
  padding-top: 100px;
  @include baseWidth;
}
.formSectionBg {
  display: block;
  @apply absolute z-0 w-full h-full top-0 left-0 inset-0 bg-gradient-to-tr from-accent/0 via-accent/95 to-accent/100;
}
</style>
