import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import enUS from './en-US'

// 从localStorage获取用户之前选择的语言，默认英文
const getDefaultLocale = () => {
  const savedLocale = localStorage.getItem('locale')
  return savedLocale || 'en-US' // 改为默认英文
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: getDefaultLocale(), // 默认语言
  fallbackLocale: 'en-US', // 回退语言改为英文
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n
