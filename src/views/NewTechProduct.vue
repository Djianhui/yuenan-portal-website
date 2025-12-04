<template>
  <div class="min-h-screen">
    <!-- 1. 顶部横幅区 -->
    <header class="w-full relative py-24" style="background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f3460 100%); background-image: url('https://source.unsplash.com/1920x600/?technology,network,digital'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6">
            {{ t('newTechProduct.banner.title') }}<span class="text-cyan-400">{{ t('newTechProduct.banner.titleHighlight') }}</span>
          </h1>
          <p class="text-white text-base lg:text-lg">{{ t('newTechProduct.banner.subtitle') }}</p>
        </div>

        <!-- 5个标签 -->
        <div class="flex flex-wrap justify-center items-center gap-4 lg:gap-6 mb-12">
          <div v-for="(tag, index) in currentTags" :key="index" class="px-6 lg:px-8 py-3 lg:py-4 border-2 border-cyan-400 rounded-full text-white text-sm lg:text-lg font-bold hover:bg-cyan-400/20 transition-all duration-300">
            {{ tag }}
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
          <button class="px-12 lg:px-16 py-3 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base lg:text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('newTechProduct.banner.consultBtn') }}
          </button>
          <a :href="`tel:${t('newTechProduct.banner.phone')}`" class="px-12 lg:px-16 py-3 lg:py-4 bg-cyan-400 text-white text-base lg:text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('newTechProduct.banner.phone') }}
          </a>
        </div>
      </div>
    </header>

    <!-- 2. 新技术新产品认定相关服务 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 mr-4"></span>
            {{ t('newTechProduct.services.title') }}
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
          <p class="text-gray-600 text-sm lg:text-base">{{ t('newTechProduct.services.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <article v-for="(service, index) in currentServices" :key="index" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-5 lg:p-6">
              <h3 class="text-lg lg:text-xl font-bold text-gray-800 mb-3 leading-tight">{{ service.title }}</h3>
              <p class="text-gray-600 text-xs lg:text-sm leading-relaxed mb-6 min-h-[80px]">{{ service.desc }}</p>
            </div>
            <div class="grid grid-cols-2 border-t">
              <button class="py-2.5 lg:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm lg:text-base font-bold hover:from-orange-600 hover:to-red-600 transition">
                {{ t('newTechProduct.services.consultBtn') }}
              </button>
              <a :href="`tel:${t('newTechProduct.services.phone')}`" class="py-2.5 lg:py-3 border-l border-white bg-white text-orange-500 text-xs lg:text-sm font-bold hover:bg-gray-50 transition flex items-center justify-center">
                {{ t('newTechProduct.services.phone') }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 3. 新技术新产品的申报条件 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 mr-4"></span>
            {{ t('newTechProduct.conditions.title') }}
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
        </div>

        <div class="relative">
          <!-- 蓝色渐变背景卡片 -->
          <div class="bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
            <div class="flex-1 space-y-4 lg:space-y-6 w-full">
              <div v-for="(condition, index) in currentConditions" :key="index" class="flex items-start gap-3 lg:gap-4">
                <div class="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-cyan-500 font-bold text-base lg:text-lg">
                  {{ index + 1 }}
                </div>
                <p class="text-white text-sm lg:text-lg pt-1 lg:pt-2 leading-relaxed">{{ condition }}</p>
              </div>
            </div>
            <div class="flex-shrink-0">
              <img src="../img/apply_condition.png" alt="申报条件" class="rounded-lg shadow-xl max-w-full h-auto">
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 mt-12 lg:mt-16">
          <button class="px-12 lg:px-16 py-3 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base lg:text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('newTechProduct.conditions.consultBtn') }}
          </button>
          <a :href="`tel:${t('newTechProduct.conditions.phone')}`" class="px-12 lg:px-16 py-3 lg:py-4 bg-cyan-400 text-white text-base lg:text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('newTechProduct.conditions.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 4. 协助企业申领奖励补贴 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" style="color: #8B4513;">
            {{ t('newTechProduct.subsidies.title') }}
          </h2>
          <p class="text-gray-600 text-sm lg:text-base">{{ t('newTechProduct.subsidies.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <article v-for="(subsidy, index) in currentSubsidies" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300" style="background: repeating-linear-gradient(45deg, #ffffff, #ffffff 10px, #f9f9f9 10px, #f9f9f9 20px);">
            <div class="p-5 lg:p-6 text-center">
              <!-- 大图标和标题 -->
              <div class="mb-4">
                <div class="inline-block">
                  <div class="flex items-center gap-3 justify-center">
                    <span class="text-5xl lg:text-6xl font-bold" :style="{ color: getSubsidyColor(index).color }">{{ subsidy.icon }}</span>
                    <div>
                      <i :class="getSubsidyColor(index).badgeIcon" :style="{ color: getSubsidyColor(index).badgeColor }" class="text-2xl lg:text-3xl"></i>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 class="text-xl lg:text-2xl font-bold text-gray-800 mb-4 leading-tight">{{ subsidy.title }}</h3>
              
              <div class="border-t-2 border-gray-300 my-4"></div>
              
              <div class="text-left space-y-2 mb-6">
                <p class="text-cyan-500 font-bold text-xs lg:text-sm mb-2">{{ t('newTechProduct.subsidies.conditionsLabel') }}</p>
                <ul class="text-gray-600 text-xs lg:text-sm space-y-1">
                  <li v-for="(item, idx) in subsidy.conditions" :key="idx" class="flex items-start leading-relaxed">
                    <span class="mr-2 flex-shrink-0">□</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="border-t-2 border-gray-300 my-4"></div>
              
              <p class="text-xs lg:text-sm text-gray-600 mb-2">{{ t('newTechProduct.subsidies.amountLabel') }}</p>
              <p class="text-red-500 font-bold text-xl lg:text-2xl">{{ subsidy.amount }}</p>
            </div>
          </article>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
          <button class="px-12 lg:px-16 py-3 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base lg:text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('newTechProduct.subsidies.consultBtn') }}
          </button>
          <a :href="`tel:${t('newTechProduct.subsidies.phone')}`" class="px-12 lg:px-16 py-3 lg:py-4 bg-cyan-400 text-white text-base lg:text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('newTechProduct.subsidies.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 5. 新技术新产品办理流程 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 mr-4"></span>
            {{ t('newTechProduct.process.title') }}
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
        </div>

        <!-- 流程图 -->
        <div class="relative">
          <!-- 时间线 -->
          <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 hidden lg:block" style="transform: translateY(-50%);"></div>
          <div class="absolute top-1/2 left-0 h-0.5 bg-orange-500 hidden lg:block" style="width: 0%; transform: translateY(-50%);"></div>
          
          <!-- 橙色箭头 -->
          <div class="absolute left-0 top-1/2 hidden lg:block" style="transform: translateY(-50%);">
            <div class="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-orange-500"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            <div v-for="(step, index) in currentProcessSteps" :key="index" class="text-center">
              <!-- 上方内容 (偶数索引) -->
              <div v-if="index % 2 === 0" class="mb-4 lg:mb-8">
                <div class="mb-4">
                  <img :src="getProcessImage(index, 'top')" :alt="step.topTitle" class="w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-lg shadow-md object-cover">
                </div>
                <h3 class="text-lg lg:text-xl font-bold text-gray-800 mb-2">{{ step.topTitle }}</h3>
                <div v-if="step.topDesc && step.topDesc.length" class="text-xs lg:text-sm text-gray-600 space-y-1">
                  <p v-for="(item, idx) in step.topDesc" :key="idx">{{ item }}</p>
                </div>
              </div>
              <div v-else class="mb-16 lg:mb-32"></div>

              <!-- 中间步骤号 -->
              <div class="relative">
                <div class="inline-block">
                  <div class="text-2xl lg:text-4xl font-bold text-gray-400 mb-2">{{ step.number }}</div>
                </div>
              </div>

              <!-- 下方内容 (奇数索引) -->
              <div v-if="index % 2 === 1" class="mt-4 lg:mt-8">
                <div class="mb-4">
                  <img :src="getProcessImage(index, 'bottom')" :alt="step.bottomTitle" class="w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-lg shadow-md object-cover">
                </div>
                <h3 class="text-lg lg:text-xl font-bold text-gray-800 mb-2">{{ step.bottomTitle }}</h3>
                <div v-if="step.bottomDesc && step.bottomDesc.length" class="text-xs lg:text-sm text-gray-600 space-y-1">
                  <p v-for="(item, idx) in step.bottomDesc" :key="idx">{{ item }}</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 mt-12 lg:mt-16">
          <button class="px-12 lg:px-16 py-3 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base lg:text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('newTechProduct.process.consultBtn') }}
          </button>
          <a :href="`tel:${t('newTechProduct.process.phone')}`" class="px-12 lg:px-16 py-3 lg:py-4 bg-cyan-400 text-white text-base lg:text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('newTechProduct.process.phone') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale, messages } = useI18n()

console.log('Current locale:', locale.value)
console.log('All messages:', messages.value)
console.log('newTechProduct data:', messages.value[locale.value]?.newTechProduct)

// 导入图片资源
const images = {
  collectEvaluation: new URL('../img/collect_evaluation.png', import.meta.url).href,
  materialSorting: new URL('../img/material_sorting.png', import.meta.url).href,
  newTechnologyProductFiling: new URL('../img/new_technology_product_filing.png', import.meta.url).href,
  previewService: new URL('../img/preview_service.png', import.meta.url).href,
  remediationAndApproval: new URL('../img/remediation_and_approval.png', import.meta.url).href,
  obtainingCertificates: new URL('../img/obtaining_certificates.png', import.meta.url).href
}

// 动态计算属性，直接从 messages 对象中获取数据
const currentTags = computed(() => {
  const data = messages.value[locale.value]?.newTechProduct?.tags
  console.log('currentTags from messages:', data)
  return Array.isArray(data) ? data : []
})

const currentServices = computed(() => {
  const data = messages.value[locale.value]?.newTechProduct?.services?.items
  console.log('currentServices from messages:', data)
  return Array.isArray(data) ? data : []
})

const currentConditions = computed(() => {
  const data = messages.value[locale.value]?.newTechProduct?.conditions?.items
  console.log('currentConditions from messages:', data)
  return Array.isArray(data) ? data : []
})

const currentSubsidies = computed(() => {
  const data = messages.value[locale.value]?.newTechProduct?.subsidies?.items
  console.log('currentSubsidies from messages:', data)
  return Array.isArray(data) ? data : []
})

const currentProcessSteps = computed(() => {
  const data = messages.value[locale.value]?.newTechProduct?.process?.steps
  console.log('currentProcessSteps from messages:', data)
  return Array.isArray(data) ? data : []
})

// 补贴项目的颜色配置（不受语言影响）
const subsidyColors = [
  { color: '#06b6d4', badgeIcon: 'fas fa-trophy', badgeColor: '#fbbf24' },
  { color: '#10b981', badgeIcon: 'fas fa-clipboard-list', badgeColor: '#3b82f6' },
  { color: '#06b6d4', badgeIcon: 'fas fa-hand-holding-usd', badgeColor: '#f97316' },
  { color: '#f59e0b', badgeIcon: 'fas fa-calendar-check', badgeColor: '#8b5cf6' }
]

// 获取补贴颜色配置（带安全检查）
const getSubsidyColor = (index) => {
  return subsidyColors[index] || subsidyColors[0]
}

// 根据索引获取流程图片
const getProcessImage = (index, position) => {
  if (position === 'top') {
    if (index === 0) return images.collectEvaluation
    if (index === 2) return images.newTechnologyProductFiling
    if (index === 4) return images.remediationAndApproval
  } else if (position === 'bottom') {
    if (index === 1) return images.previewService
    if (index === 3) return images.materialSorting
    if (index === 5) return images.obtainingCertificates
  }
  return ''
}
</script>
