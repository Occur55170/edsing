<script lang="ts" setup>
import { z } from 'zod'
import { sendForm } from '@emailjs/browser'
import MaterialSymbolsLocationOn from '~icons/material-symbols/location-on'
import IcRoundCall from '~icons/ic/round-call'
import BxBxsPrinter from '~icons/bx/bxs-printer'
import BxsEnvelope from '~icons/bxs/envelope'
const { t } = useI18n()

const ContractDesc = useAnimateOnScroll('resetAnimate').target
const ContractData = useAnimateOnScroll('resetAnimate').target
const ContractFormElement = useAnimateOnScroll('resetAnimate').target
const ContractAddress = useAnimateOnScroll('resetAnimate').target

const form = ref<HTMLFormElement | null>(null)
const errors = ref({})

const formSchema = z.object({
  name: z.string().min(1, { message: '請輸入姓名' }),
  companyName: z.string(),
  email: z.string().email('請輸入正確的Email格式').min(1, { message: '請輸入Email' }),
  phone: z.string().min(1, { message: '請輸電話' }),
  country: z.string(),
  zone: z.string().min(1, { message: '請輸地區' }),
  material: z.string(),
  materialCount: z.string(),
  mailContent: z.string(),
})

function sendEmail () {
  if (!form.value) { return }

  console.log('form', form.value)

  // try {
  //   formSchema.parse(form)
  //   console.log('Form submitted successfully:', formData)
  //   errors.value = {} // Clear errors on success
  // } catch (e) {
  //   if (e instanceof z.ZodError) {
  //     errors.value = e.flatten().fieldErrors
  //   }
  // }

  sendForm('service_9hriy3l', 'template_r7ylu7r', form.value, {
    publicKey: '_sL4fACYgE7BhhDyA',
  }).then(
    () => {
      console.log('SUCCESS!')
    },
    (error) => {
      console.log('FAILED...', error.text)
    }
  )
}

useHead({
  title: '聯絡我們',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="head pb-[41%] relative">
        <img class="absolute top-0 left-0 h-full w-full block" src="/public/img/introduce/introduceHead.jpg" alt="" />
        <div class="absolute top-0 left-0 h-full w-full block flex flex-wrap content-center justify-center">
          <img src="/img/logo-s.png" class="grow-0 mx-auto max-w-[50%] desktopSmWidth:max-w-[800px] mb-4" alt="logo" />
        </div>
      </div>
      <div class="contract bg-accent py-[20px] tableSmWidth:py-[60px] desktopSmWidth:py-[100px] mb-0 tableSmWidth:mb-[100px]">
        <div ref="ContractDesc" class="animate_start_opacity text-xl py-8 px-12 mb-12 border-b border-b-white text-white">
          <p class="leading-[2] mb-8">
            {{ t('尊敬的客戶您好：') }}
          </p>
          <p class="leading-[2] mb-8">
            {{ t('若您對任何產品或服務有需求,或需要進一步的報價資訊,歡迎透過E-mail 或下方表單與我們聯繫,我們將竭誠為您服務。') }}
          </p>
          <p class="leading-[2] mb-8">
            {{ t('針對大量採購需求,我們也能提供最具競爭力的優惠報價(可依實際內容與數量調整)。') }}
          </p>
          <p class="leading-[2] mb-8">
            {{ t('我們始終以專業與誠信為原則,致力於提供最適合您的解決方案,並與您建立長期穩定的合作關係。') }}
          </p>
        </div>
        <div ref="ContractData" class="animate_start_opacity text-white">
          <p class="text-[36px] tableSmWidth:text-[48px] leading-[2] text-center">
            益鼎興金屬有限公司
          </p>
          <p class="text-xl leading-[2] flex items-center justify-center">
            <MaterialSymbolsLocationOn class="text-red-500 hidden tableSmWidth:inline" />
            地址:高雄市路竹區民有路153之1號
          </p>
          <p class="text-xl leading-[2] flex items-center justify-center">
            Address: No.153-1, Minyou Rd., Lujhu Dist., Kaohsiung City, Taiwan
          </p>
          <p class="text-xl leading-[2] flex items-center justify-center">
            <IcRoundCall class="text-stone-500 hidden tableSmWidth:inline" />
            TEL: +886-07-611-5753
          </p>
          <p class="text-xl leading-[2] flex items-center justify-center ">
            <BxBxsPrinter class="text-stone-300 hidden tableSmWidth:inline" />
            FAX: +886-07-611-3753
          </p>
          <p class="text-xl leading-[2] flex items-center justify-center">
            <BxsEnvelope class="text-white hidden tableSmWidth:inline" />
            E-mail: edsingpolitech@hotmail.com
          </p>
        </div>
        <div ref="ContractFormElement" class="animate_start_opacity">
          <ContractForm id="ContractForm" form-style="!w-full" banner-img="" :is-have-description="false" />
        </div>
        <!-- <form ref="form" class="form bg-slate-700 pt-16 pb-12 px-2 tableSmWidth:px-8 my-20 max-w-[900px]" @submit.prevent="sendEmail">
          <div class="mb-8 text-sm tableSmWidth:text-xl">
            <label class="mr-2 text-sm tableSmWidth:text-lg">姓名</label>
            <input type="text" name="user_name" class="text-black" />
          </div>
          <div class="mb-8 text-sm tableSmWidth:text-xl">
            <label class="mr-2 text-sm tableSmWidth:text-lg">公司名稱</label>
            <input type="text" name="user_company_name" class="text-black" />
          </div>
          <div class="mb-8 text-sm tableSmWidth:text-xl">
            <label class="mr-2 text-sm tableSmWidth:text-lg">聯絡電話</label>
            <input type="text" name="user_phone" class="text-black" />
          </div>
          <div class="mb-8 text-sm tableSmWidth:text-xl">
            <label class="mr-2 text-sm tableSmWidth:text-lg text-center">Email</label>
            <input type="email" name="user_email" class="text-black" />
          </div>
          <div class="mb-8 text-sm tableSmWidth:text-xl">
            <label class="mr-2 text-sm tableSmWidth:text-lg">聯絡地址</label>
            <input type="text" name="user_address" class="text-black" />
          </div>
          <div class="mb-8 text-sm tableSmWidth:text-xl">
            <label class="mr-2 text-sm tableSmWidth:text-lg self-start">內容說明</label>
            <textarea
              id="message"
              name="user_message"
              cols="20"
              rows="5"
              class="w-full text-black"
            ></textarea>
          </div>

          <div class="flex justify-center w-full">
            <button class="bg-red-600 py-2 px-8 inline-block text-white !w-auto" type="submit">
              送出
            </button>
          </div>
        </form> -->
        <div ref="ContractAddress" class="animate_start_opacity mt-40 text-white">
          <p class="text-[36px] tableSmWidth:text-[56px] text-center mb-8">
            {{ t('想更近一步了解嗎') }}?
            <br />
            {{ t('歡迎蒞臨參觀') }}
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4774309567383!2d120.272397376788!3d22.82181942378718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0fd32bfa9ded%3A0xaf675a7c60bf6910!2z55uK6byO6IiI6YeR5bGs5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1756639320986!5m2!1szh-TW!2stw"
            width="100%"
            height="500"
            style="border:0;"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.contract {
  @include baseWidth(calc((100% - 900px)/2), calc((100% - 900px)/2));
}
.form {
  &>div{
    width: 100%;
    display: flex;
    align-items: center;
    &>*:nth-child(1) {
      width: 10%;
      text-align: center;
    }
    &>*:nth-child(2) {
      padding: .4em .8em;
      width: 90%;
    }
  }
}

@media(max-width: 900px) {
  .form {
    &>div{
      &>*:nth-child(1) {
        width: 20%;
      }
      &>*:nth-child(2) {
        padding: .4em .8em;
        width: 80%;
      }
    }
  }
}
</style>
