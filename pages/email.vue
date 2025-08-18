<template>
  <NuxtLayout>
    <form ref="form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" name="user_name">
      <label>Email</label>
      <input type="email" name="user_email">
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send">
    </form>
  </NuxtLayout>
</template>

<script>
import emailjs from '@emailjs/browser'
export default {
  methods: {
    sendEmail () {
      emailjs.sendForm('service_9hriy3l', 'template_8x1k1z1', this.$refs.form, {
        publicKey: '_sL4fACYgE7BhhDyA'
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
  }
}
</script>
