<template>
  <div>
    <NuxtLayout>
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

<script lang="ts" setup>
import emailjs from '@emailjs/browser'

const form = ref<HTMLFormElement | null>(null)

function sendEmail () {
  if (!form.value) { return }

  emailjs.sendForm('service_9hriy3l', 'template_8x1k1z1', form.value, {
    publicKey: '_sL4fACYgE7BhhDyA',
  })
    .then(
      () => {
        console.log('SUCCESS!')
      },
      (error) => {
        console.log('FAILED...', error.text)
      }
    )
}
</script>
