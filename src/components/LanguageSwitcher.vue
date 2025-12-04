<template>
  <div class="fixed top-24 right-4 z-50">
    <button 
      @click="toggleLanguage"
      class="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-cyan-400"
    >
      <i class="fas fa-globe text-cyan-400 text-lg"></i>
      <span class="font-bold text-gray-700">{{ currentLangText }}</span>
      <i class="fas fa-exchange-alt text-cyan-400 text-sm"></i>
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLangText = computed(() => {
  return locale.value === 'zh-CN' ? '中文' : 'English'
})

const toggleLanguage = () => {
  const newLocale = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  locale.value = newLocale
  
  // 保存到localStorage
  localStorage.setItem('locale', newLocale)
  
  // 更新HTML的lang属性
  document.documentElement.lang = newLocale === 'zh-CN' ? 'zh-CN' : 'en'
}

// 组件挂载时设置HTML lang属性
onMounted(() => {
  document.documentElement.lang = locale.value === 'zh-CN' ? 'zh-CN' : 'en'
})
</script>
