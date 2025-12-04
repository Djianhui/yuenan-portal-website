<template>
  <div class="min-h-screen">
    <!-- 1. 顶部横幅区 -->
    <header class="w-full relative py-16 lg:py-24" style="background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f3460 100%); background-image: url('https://source.unsplash.com/1920x600/?code,programming,binary'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-8 lg:mb-12">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            {{ t('doubleSoft.banner.title') }}<span class="text-cyan-400">{{ t('doubleSoft.banner.titleHighlight') }}</span>
          </h1>
          <p class="text-white text-base lg:text-lg">{{ t('doubleSoft.banner.subtitle') }}</p>
        </div>

        <!-- 5个标签 -->
        <div class="flex flex-wrap justify-center items-center gap-3 lg:gap-6 mb-8 lg:mb-12">
          <div v-for="tag in currentTags" :key="tag" class="px-4 lg:px-8 py-2 lg:py-4 border-2 border-cyan-400 rounded-full text-white text-sm lg:text-lg font-bold hover:bg-cyan-400/20 transition-all duration-300">
            {{ tag }}
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
          <button class="px-8 lg:px-16 py-3 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base lg:text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('doubleSoft.banner.consultBtn') }}
          </button>
          <a :href="`tel:${t('doubleSoft.banner.phone')}`" class="px-8 lg:px-16 py-3 lg:py-4 bg-cyan-400 text-white text-base lg:text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('doubleSoft.banner.phone') }}
          </a>
        </div>
      </div>
    </header>

    <!-- 2. 双软评估服务相关（第一部分 - 4个服务） -->
    <section class="py-12 lg:py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 mr-3 lg:mr-4"></span>
            {{ t('doubleSoft.services.title') }}
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 ml-3 lg:ml-4"></span>
          </h2>
          <p class="text-gray-600 text-sm lg:text-base">{{ t('doubleSoft.services.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          <article v-for="service in currentServicesPartOne" :key="service.title" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-4 lg:p-6">
              <h3 class="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3 leading-tight">{{ service.title }}</h3>
              <p class="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 min-h-[80px]">{{ service.desc }}</p>
            </div>
            <div class="grid grid-cols-2 border-t">
              <button class="py-2 lg:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm lg:text-base font-bold hover:from-orange-600 hover:to-red-600 transition">
                {{ t('doubleSoft.services.consultBtn') }}
              </button>
              <a :href="`tel:${t('doubleSoft.services.phone')}`" class="py-2 lg:py-3 border-l border-white bg-white text-orange-500 text-xs lg:text-sm font-bold hover:bg-gray-50 transition flex items-center justify-center">
                {{ t('doubleSoft.services.phone') }}
              </a>
            </div>
          </article>
        </div>

        <!-- 第二部分 - 4个服务 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          <article v-for="service in currentServicesPartTwo" :key="service.title" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-4 lg:p-6">
              <h3 class="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3 leading-tight">{{ service.title }}</h3>
              <p class="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 min-h-[80px]">{{ service.desc }}</p>
            </div>
            <div class="grid grid-cols-2 border-t">
              <button class="py-2 lg:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm lg:text-base font-bold hover:from-orange-600 hover:to-red-600 transition">
                {{ t('doubleSoft.services.consultBtn') }}
              </button>
              <a :href="`tel:${t('doubleSoft.services.phone')}`" class="py-2 lg:py-3 border-l border-white bg-white text-orange-500 text-xs lg:text-sm font-bold hover:bg-gray-50 transition flex items-center justify-center">
                {{ t('doubleSoft.services.phone') }}
              </a>
            </div>
          </article>
        </div>

        <!-- 第三部分 - 4个服务 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <article v-for="service in currentServicesPartThree" :key="service.title" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-4 lg:p-6">
              <h3 class="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3 leading-tight">{{ service.title }}</h3>
              <p class="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 min-h-[80px]">{{ service.desc }}</p>
            </div>
            <div class="grid grid-cols-2 border-t">
              <button class="py-2 lg:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm lg:text-base font-bold hover:from-orange-600 hover:to-red-600 transition">
                {{ t('doubleSoft.services.consultBtn') }}
              </button>
              <a :href="`tel:${t('doubleSoft.services.phone')}`" class="py-2 lg:py-3 border-l border-white bg-white text-orange-500 text-xs lg:text-sm font-bold hover:bg-gray-50 transition flex items-center justify-center">
                {{ t('doubleSoft.services.phone') }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 3. 双软评估的申报条件 -->
    <section class="py-12 lg:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 mr-3 lg:mr-4"></span>
            {{ t('doubleSoft.conditions.title') }}
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 ml-3 lg:ml-4"></span>
          </h2>
        </div>

        <div class="relative">
          <!-- 蓝色渐变背景卡片 -->
          <div class="bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl p-6 lg:p-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            <div class="flex-1 space-y-4 lg:space-y-6 w-full">
              <div v-for="(condition, index) in currentConditions" :key="index" class="flex items-start gap-3 lg:gap-4">
                <div class="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-check text-cyan-500 text-base lg:text-xl"></i>
                </div>
                <p class="text-white text-sm lg:text-lg pt-1 lg:pt-2 leading-relaxed" v-html="condition"></p>
              </div>
            </div>
            <div class="flex-shrink-0">
              <img :src="images.declarationConditions" alt="Declaration Conditions" class="rounded-lg shadow-xl max-w-full h-auto">
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 mt-12 lg:mt-16">
          <button class="px-8 lg:px-16 py-3 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base lg:text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('doubleSoft.conditions.consultBtn') }}
          </button>
          <a :href="`tel:${t('doubleSoft.conditions.phone')}`" class="px-8 lg:px-16 py-3 lg:py-4 bg-cyan-400 text-white text-base lg:text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('doubleSoft.conditions.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 4. 双软评估的优惠政策 -->
    <section class="py-12 lg:py-16 relative" style="background: linear-gradient(135deg, #000000 0%, #1a1a2e 100%); background-image: url('https://source.unsplash.com/1920x600/?code,matrix,binary'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-black/80"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-3 flex items-center justify-center">
            <span class="w-16 lg:w-24 h-0.5 bg-white mr-3 lg:mr-4"></span>
            {{ t('doubleSoft.policies.title') }}
            <span class="w-16 lg:w-24 h-0.5 bg-white ml-3 lg:ml-4"></span>
          </h2>
        </div>

        <!-- 政策表格 -->
        <div class="max-w-6xl mx-auto mb-12 lg:mb-16 overflow-x-auto">
          <div class="border-4 border-cyan-400 rounded-2xl overflow-hidden min-w-[600px]">
            <!-- 表头 -->
            <div class="grid grid-cols-3 bg-cyan-500">
              <div class="p-4 lg:p-6 text-center border-r-2 border-cyan-400">
                <h3 class="text-xl lg:text-2xl font-bold text-white" v-html="currentPolicyTableHeaders[0]"></h3>
              </div>
              <div class="p-4 lg:p-6 text-center border-r-2 border-cyan-400">
                <h3 class="text-xl lg:text-2xl font-bold text-white">{{ currentPolicyTableHeaders[1] }}</h3>
              </div>
              <div class="p-4 lg:p-6 text-center">
                <h3 class="text-xl lg:text-2xl font-bold text-white">{{ currentPolicyTableHeaders[2] }}</h3>
              </div>
            </div>

            <!-- 政策细则行 -->
            <div class="grid grid-cols-3 bg-cyan-600/30">
              <div class="p-4 lg:p-6 text-center border-r-2 border-t-2 border-cyan-400">
                <h3 class="text-xl lg:text-2xl font-bold text-white" v-html="t('doubleSoft.policies.table.detailsTitle')"></h3>
              </div>
              <div class="p-4 lg:p-6 border-r-2 border-t-2 border-cyan-400">
                <p class="text-white text-sm lg:text-base leading-relaxed" v-html="t('doubleSoft.policies.table.enterpriseDetails')"></p>
              </div>
              <div class="p-4 lg:p-6 border-t-2 border-cyan-400">
                <p class="text-white text-sm lg:text-base leading-relaxed" v-html="t('doubleSoft.policies.table.productDetails')"></p>
              </div>
            </div>

            <!-- 申报行 -->
            <div class="grid grid-cols-3 bg-cyan-600/30">
              <div class="p-4 lg:p-6 text-center border-r-2 border-t-2 border-cyan-400">
                <h3 class="text-xl lg:text-2xl font-bold text-white">{{ t('doubleSoft.policies.table.declarationTitle') }}</h3>
              </div>
              <div class="p-4 lg:p-6 border-r-2 border-t-2 border-cyan-400">
                <ul class="text-white text-xs lg:text-sm space-y-2">
                  <li v-for="(item, index) in currentEnterpriseDeclaration" :key="index">{{ item }}</li>
                </ul>
              </div>
              <div class="p-4 lg:p-6 border-t-2 border-cyan-400">
                <p class="text-white text-xs lg:text-sm">
                  {{ t('doubleSoft.policies.table.productDeclaration') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
          <button class="px-8 lg:px-16 py-3 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base lg:text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('doubleSoft.policies.consultBtn') }}
          </button>
          <a :href="`tel:${t('doubleSoft.policies.phone')}`" class="px-8 lg:px-16 py-3 lg:py-4 bg-cyan-400 text-white text-base lg:text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('doubleSoft.policies.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 5. 双软评估办理流程 -->
    <section class="py-12 lg:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 mr-3 lg:mr-4"></span>
            {{ t('doubleSoft.process.title') }}
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 ml-3 lg:ml-4"></span>
          </h2>
        </div>

        <!-- 流程图 -->
        <div class="relative">
          <!-- 时间线 -->
          <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300" style="transform: translateY(-50%);"></div>
          
          <!-- 橙色箭头 -->
          <div class="absolute left-0 top-1/2" style="transform: translateY(-50%);">
            <div class="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-orange-500"></div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 relative z-10">
            <div v-for="(step, index) in currentProcessSteps" :key="index" class="text-center">
              <!-- 上方内容 (偶数索引) -->
              <div v-if="index % 2 === 0" class="mb-4 lg:mb-8">
                <div class="mb-2 lg:mb-4" v-if="getProcessImage(index, 'top')">
                  <img :src="getProcessImage(index, 'top')" :alt="step.topTitle" class="w-20 h-20 lg:w-32 lg:h-32 mx-auto rounded-lg shadow-md object-cover">
                </div>
                <h3 class="text-base lg:text-xl font-bold text-gray-800 mb-1 lg:mb-2">{{ step.topTitle }}</h3>
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
                <div class="mb-2 lg:mb-4" v-if="getProcessImage(index, 'bottom')">
                  <img :src="getProcessImage(index, 'bottom')" :alt="step.bottomTitle" class="w-20 h-20 lg:w-32 lg:h-32 mx-auto rounded-lg shadow-md object-cover">
                </div>
                <h3 class="text-base lg:text-xl font-bold text-gray-800 mb-1 lg:mb-2">{{ step.bottomTitle }}</h3>
                <div v-if="step.bottomDesc && step.bottomDesc.length" class="text-xs lg:text-sm text-gray-600 space-y-1">
                  <p v-for="(item, idx) in step.bottomDesc" :key="idx">{{ item }}</p>
                </div>
              </div>
              <div v-else class="mt-16 lg:mt-32"></div>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 mt-12 lg:mt-16">
          <button class="px-8 lg:px-16 py-3 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base lg:text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('doubleSoft.process.consultBtn') }}
          </button>
          <a :href="`tel:${t('doubleSoft.process.phone')}`" class="px-8 lg:px-16 py-3 lg:py-4 bg-cyan-400 text-white text-base lg:text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('doubleSoft.process.phone') }}
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

// 导入图片资源
const images = {
  evaluationAnalysis: new URL('../img/evaluation_analysis.png', import.meta.url).href,
  searchReview: new URL('../img/search_review.png', import.meta.url).href,
  filingDocument: new URL('../img/filing_document.png', import.meta.url).href,
  typingComputer: new URL('../img/typing_computer.png', import.meta.url).href,
  approvalSuccess2: new URL('../img/approval_success_2.png', import.meta.url).href,
  declarationConditions: new URL('../img/declaration_conditions.png', import.meta.url).href
}

// 根据索引获取流程图片
const getProcessImage = (index, position) => {
  if (position === 'top') {
    if (index === 0) return images.evaluationAnalysis
    if (index === 2) return images.filingDocument
    if (index === 4) return images.approvalSuccess2
  } else if (position === 'bottom') {
    if (index === 1) return images.searchReview
    if (index === 3) return images.typingComputer
  }
  return ''
}

// 动态计算属性，直接从 messages 对象中获取数据
const currentTags = computed(() => {
  const data = messages.value[locale.value]?.doubleSoft?.tags
  return Array.isArray(data) ? data : []
})

const currentServicesPartOne = computed(() => {
  const items = messages.value[locale.value]?.doubleSoft?.services?.items || []
  return Array.isArray(items) ? items.slice(0, 4) : []
})

const currentServicesPartTwo = computed(() => {
  const items = messages.value[locale.value]?.doubleSoft?.services?.items || []
  return Array.isArray(items) ? items.slice(4, 8) : []
})

const currentServicesPartThree = computed(() => {
  const items = messages.value[locale.value]?.doubleSoft?.services?.items || []
  return Array.isArray(items) ? items.slice(8, 12) : []
})

const currentConditions = computed(() => {
  const data = messages.value[locale.value]?.doubleSoft?.conditions?.items
  return Array.isArray(data) ? data : []
})

const currentProcessSteps = computed(() => {
  const data = messages.value[locale.value]?.doubleSoft?.process?.steps
  return Array.isArray(data) ? data : []
})

// 政策表格数据
const currentPolicyTableHeaders = computed(() => {
  const data = messages.value[locale.value]?.doubleSoft?.policies?.table?.headers
  return Array.isArray(data) ? data : []
})

const currentEnterpriseDeclaration = computed(() => {
  const data = messages.value[locale.value]?.doubleSoft?.policies?.table?.enterpriseDeclaration
  return Array.isArray(data) ? data : []
})
</script>
