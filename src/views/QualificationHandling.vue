<template>
  <div class="min-h-screen">
    <!-- 1. 顶部横幅区 -->
    <header class="w-full relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- 左侧内容 -->
          <div>
            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
              {{ t('qualification.banner.title') }}<span class="text-orange-500">{{ t('qualification.banner.titleHighlight') }}</span>
            </h1>
            <div class="flex flex-wrap items-center gap-3 lg:gap-6 text-gray-700 mb-6 lg:mb-8 text-sm lg:text-base">
              <span v-for="(feature, index) in currentFeatures" :key="index">
                {{ feature }}
                <span v-if="index < currentFeatures.length - 1" class="text-gray-400 ml-3 lg:ml-6">|</span>
              </span>
            </div>

            <div class="mb-6 lg:mb-8">
              <p class="text-lg lg:text-xl text-gray-800 mb-3 lg:mb-4">
                <span class="text-cyan-500 font-bold">{{ t('qualification.banner.highlight') }}</span>
              </p>
              <div class="flex flex-wrap items-center gap-4 lg:gap-8">
                <div v-for="advantage in currentAdvantages" :key="advantage" class="flex items-center gap-2">
                  <i class="fas fa-check-circle text-cyan-500"></i>
                  <span class="text-gray-700 text-sm lg:text-base">{{ advantage }}</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <button class="px-8 lg:px-12 py-3 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base lg:text-lg font-bold rounded hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
                {{ t('qualification.banner.consultBtn') }}
              </button>
              <a :href="`tel:${t('qualification.banner.phone')}`" class="px-8 lg:px-12 py-3 lg:py-4 bg-cyan-400 text-white text-base lg:text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg">
                <i class="fas fa-phone-alt mr-3"></i>
                {{ t('qualification.banner.phone') }}
              </a>
            </div>
          </div>

          <!-- 右侧插图 -->
          <div class="flex justify-center">
            <img :src="images.teamService" alt="Team Service" class="rounded-lg shadow-xl max-w-full h-auto">
          </div>
        </div>
      </div>
    </header>

    <!-- 2. 公司资质相关服务（第一部分 - 4个服务） -->
    <section class="py-12 lg:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 mr-3 lg:mr-4"></span>
            {{ t('qualification.services.title') }}
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 ml-3 lg:ml-4"></span>
          </h2>
          <p class="text-gray-600 text-sm lg:text-base">{{ t('qualification.services.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          <article v-for="service in currentServicesPartOne" :key="service.title" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-4 lg:p-6">
              <h3 class="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3 leading-tight">{{ service.title }}</h3>
              <p class="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 min-h-[60px]">{{ service.desc }}</p>
            </div>
            <div class="grid grid-cols-2 border-t">
              <button class="py-2 lg:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm lg:text-base font-bold hover:from-orange-600 hover:to-red-600 transition">
                {{ t('qualification.services.consultBtn') }}
              </button>
              <a :href="`tel:${t('qualification.services.phone')}`" class="py-2 lg:py-3 border-l border-white bg-white text-orange-500 text-xs lg:text-sm font-bold hover:bg-gray-50 transition flex items-center justify-center">
                {{ t('qualification.services.phone') }}
              </a>
            </div>
          </article>
        </div>

        <!-- 第二部分 - 4个服务 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          <article v-for="service in currentServicesPartTwo" :key="service.title" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-4 lg:p-6">
              <h3 class="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3 leading-tight">{{ service.title }}</h3>
              <p class="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 min-h-[60px]">{{ service.desc }}</p>
            </div>
            <div class="grid grid-cols-2 border-t">
              <button class="py-2 lg:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm lg:text-base font-bold hover:from-orange-600 hover:to-red-600 transition">
                {{ t('qualification.services.consultBtn') }}
              </button>
              <a :href="`tel:${t('qualification.services.phone')}`" class="py-2 lg:py-3 border-l border-white bg-white text-orange-500 text-xs lg:text-sm font-bold hover:bg-gray-50 transition flex items-center justify-center">
                {{ t('qualification.services.phone') }}
              </a>
            </div>
          </article>
        </div>

        <!-- 第三部分 - 4个服务 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <article v-for="service in currentServicesPartThree" :key="service.title" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-4 lg:p-6">
              <h3 class="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3 leading-tight">{{ service.title }}</h3>
              <p class="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 min-h-[60px]">{{ service.desc }}</p>
            </div>
            <div class="grid grid-cols-2 border-t">
              <button class="py-2 lg:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm lg:text-base font-bold hover:from-orange-600 hover:to-red-600 transition">
                {{ t('qualification.services.consultBtn') }}
              </button>
              <a :href="`tel:${t('qualification.services.phone')}`" class="py-2 lg:py-3 border-l border-white bg-white text-orange-500 text-xs lg:text-sm font-bold hover:bg-gray-50 transition flex items-center justify-center">
                {{ t('qualification.services.phone') }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 3. 行业资质全覆盖 - 提升企业竞争力 -->
    <section class="py-12 lg:py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 mr-3 lg:mr-4"></span>
            {{ t('qualification.coverage.title') }}
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 ml-3 lg:ml-4"></span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <article v-for="(category, index) in currentCategories" :key="category.title" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="relative h-48 lg:h-64">
              <img :src="getCategoryImage(index)" :alt="category.title" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <div class="flex items-center justify-center mb-3 lg:mb-4">
                  <i :class="category.icon" class="text-cyan-400 text-4xl lg:text-5xl"></i>
                </div>
                <h3 class="text-xl lg:text-2xl font-bold text-white text-center">{{ category.title }}</h3>
              </div>
            </div>
            <div class="p-4 lg:p-6 bg-gray-50">
              <ul class="space-y-2 lg:space-y-3">
                <li v-for="item in category.items" :key="item" class="flex items-start gap-2">
                  <i class="fas fa-check-circle text-cyan-500 mt-1 flex-shrink-0"></i>
                  <span class="text-gray-700 text-xs lg:text-sm">{{ item }}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 mt-12 lg:mt-16">
          <button class="px-8 lg:px-16 py-3 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base lg:text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('qualification.coverage.consultBtn') }}
          </button>
          <a :href="`tel:${t('qualification.coverage.phone')}`" class="px-8 lg:px-16 py-3 lg:py-4 bg-cyan-400 text-white text-base lg:text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('qualification.coverage.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 4. 我们的服务流程 -->
    <section class="py-12 lg:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 mr-3 lg:mr-4"></span>
            {{ t('qualification.process.title') }}
            <span class="w-16 lg:w-24 h-0.5 bg-gray-800 ml-3 lg:ml-4"></span>
          </h2>
        </div>

        <!-- 顶部3个步骤 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mb-6 lg:mb-8">
          <div v-for="step in currentTopSteps" :key="step" class="text-center">
            <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 lg:py-4 px-6 lg:px-8 rounded font-bold text-base lg:text-lg">
              {{ step }}
            </div>
          </div>
        </div>

        <!-- 流程图 -->
        <div class="relative mb-6 lg:mb-8">
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
            {{ t('qualification.process.consultBtn') }}
          </button>
          <a :href="`tel:${t('qualification.process.phone')}`" class="px-8 lg:px-16 py-3 lg:py-4 bg-cyan-400 text-white text-base lg:text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('qualification.process.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 5. 长沙悦安 匠心服务保障 -->
    <section class="py-12 lg:py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3" v-html="t('qualification.guarantee.title')">
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <article v-for="(guarantee, index) in currentGuarantees" :key="guarantee.title" class="text-center">
            <div class="mb-4 lg:mb-6">
              <img :src="getGuaranteeImage(index)" :alt="guarantee.title" class="w-full h-40 lg:h-48 object-cover rounded-lg shadow-md">
            </div>
            <h3 class="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3">{{ guarantee.title }}</h3>
            <p class="text-gray-600 text-xs lg:text-sm leading-relaxed">{{ guarantee.desc }}</p>
          </article>
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
  teamService: new URL('../img/team_service.png', import.meta.url).href,
  liveVideo: new URL('../img/live_video.png', import.meta.url).href,
  ecommerce: new URL('../img/ecommerce.png', import.meta.url).href,
  gamingEsports: new URL('../img/gaming_esports.png', import.meta.url).href,
  digitalIpCryptocurrency: new URL('../img/digital_ip_cryptocurrency.png', import.meta.url).href,
  evaluationAnalysis: new URL('../img/evaluation_analysis.png', import.meta.url).href,
  searchReview: new URL('../img/search_review.png', import.meta.url).href,
  magnifyingGlassInspection: new URL('../img/magnifying_glass_inspection.png', import.meta.url).href,
  meetingPresentation: new URL('../img/meeting_presentation.png', import.meta.url).href,
  approvalSuccess: new URL('../img/approval_success.png', import.meta.url).href,
  seniorAdvisors: new URL('../img/senior_advisors_1_on_1_service.png', import.meta.url).href,
  informationConfidentiality: new URL('../img/information_confidentiality_free_from_harassment.png', import.meta.url).href,
  feeTransparency: new URL('../img/fee_and_service_transparency.png', import.meta.url).href,
  oneStopService: new URL('../img/one_stop_enterprise_service.png', import.meta.url).href
}

// 根据索引获取流程图片
const getProcessImage = (index, position) => {
  if (position === 'top') {
    if (index === 0) return images.evaluationAnalysis
    if (index === 2) return images.magnifyingGlassInspection
    if (index === 4) return images.approvalSuccess
  } else if (position === 'bottom') {
    if (index === 1) return images.searchReview
    if (index === 3) return images.meetingPresentation
  }
  return ''
}

// 获取行业资质图片
const getCategoryImage = (index) => {
  const imageMap = [
    images.liveVideo,
    images.ecommerce,
    images.gamingEsports,
    images.digitalIpCryptocurrency
  ]
  return imageMap[index] || ''
}

// 获取服务保障图片
const getGuaranteeImage = (index) => {
  const imageMap = [
    images.seniorAdvisors,
    images.informationConfidentiality,
    images.feeTransparency,
    images.oneStopService
  ]
  return imageMap[index] || ''
}

// 动态计算属性，直接从 messages 对象中获取数据
const currentFeatures = computed(() => {
  const data = messages.value[locale.value]?.qualification?.banner?.features
  return Array.isArray(data) ? data : []
})

const currentAdvantages = computed(() => {
  const data = messages.value[locale.value]?.qualification?.banner?.advantages
  return Array.isArray(data) ? data : []
})

const currentServicesPartOne = computed(() => {
  const items = messages.value[locale.value]?.qualification?.services?.items || []
  return Array.isArray(items) ? items.slice(0, 4) : []
})

const currentServicesPartTwo = computed(() => {
  const items = messages.value[locale.value]?.qualification?.services?.items || []
  return Array.isArray(items) ? items.slice(4, 8) : []
})

const currentServicesPartThree = computed(() => {
  const items = messages.value[locale.value]?.qualification?.services?.items || []
  return Array.isArray(items) ? items.slice(8, 12) : []
})

const currentCategories = computed(() => {
  const data = messages.value[locale.value]?.qualification?.coverage?.categories
  return Array.isArray(data) ? data : []
})

const currentTopSteps = computed(() => {
  const data = messages.value[locale.value]?.qualification?.process?.topSteps
  return Array.isArray(data) ? data : []
})

const currentProcessSteps = computed(() => {
  const data = messages.value[locale.value]?.qualification?.process?.steps
  return Array.isArray(data) ? data : []
})

const currentGuarantees = computed(() => {
  const data = messages.value[locale.value]?.qualification?.guarantee?.items
  return Array.isArray(data) ? data : []
})
</script>
