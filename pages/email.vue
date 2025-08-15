<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send">
  </form>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  methods: {
    sendEmail () {
      emailjs.sendForm('service_tp7qeh3', 'template_kug2a2a', this.$refs.form, {
        publicKey: 'fL-vN95f6SYL7knPF'
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
