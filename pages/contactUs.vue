<script lang="ts" setup>
import { z } from 'zod'
import { sendForm } from '@emailjs/browser'

useHead({
  title: '聯絡我們',
})

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

  // sendForm('service_9hriy3l', 'template_8x1k1z1', form.value, {
  //   publicKey: '_sL4fACYgE7BhhDyA',
  // }).then(
  //   () => {
  //     console.log('SUCCESS!')
  //   },
  //   (error) => {
  //     console.log('FAILED...', error.text)
  //   }
  // )
}

</script>

<template>
  <div>
    <NuxtLayout>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us with any questions or inquiries!</p>
      <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </NuxtLayout>
  </div>
</template>
