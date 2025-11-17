import { defineI18nConfig } from '#i18n'

export default defineI18nConfig(() => {
  return {
    // 錯誤訊息通知關閉，避免 console 訊息過多
    fallbackWarn: false,
    missingWarn: false,
  }
})
