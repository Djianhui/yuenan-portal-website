<template>
  <div class="min-h-screen">
    <!-- 1. 顶部横幅区 -->
    <header class="w-full relative py-20" style="background: linear-gradient(to bottom, #0a1929 0%, #1a2f4a 100%); background-image: url('https://source.unsplash.com/1920x600/?technology,network,digital'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/80"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h1 class="text-6xl font-bold text-white mb-4">
            {{ t('specialized.banner.title') }}<span class="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg ml-2">{{ t('specialized.banner.titleHighlight') }}</span>
          </h1>
          <p class="text-white text-xl">{{ t('specialized.banner.subtitle') }}</p>
        </div>
        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-red-600 transition-all duration-300">
            {{ t('specialized.banner.consultBtn') }}
          </button>
          <a :href="`tel:${t('specialized.banner.phone')}`" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            {{ t('specialized.banner.phone') }}
          </a>
        </div>
      </div>
    </header>

    <!-- 2. 专精特新相关服务 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-20 h-0.5 bg-gray-400 mr-4"></span>
            {{ t('specialized.services.title') }}
            <span class="w-20 h-0.5 bg-gray-400 ml-4"></span>
          </h2>
          <p class="text-gray-600">{{ t('specialized.services.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- 服务卡片 -->
          <article v-for="(service, index) in currentServices.slice(0, 4)" :key="index" class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              {{ service.desc }}
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded hover:from-orange-600 hover:to-red-600 transition">
                {{ t('specialized.services.consultBtn') }}
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                {{ t('specialized.services.phone') }}
              </button>
            </div>
          </article>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 服务卡片 -->
          <article v-for="(service, index) in currentServices.slice(4, 8)" :key="index + 4" class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              {{ service.desc }}
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded hover:from-orange-600 hover:to-red-600 transition">
                {{ t('specialized.services.consultBtn') }}
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                {{ t('specialized.services.phone') }}
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 3. 专精特新-申请条件 -->
    <section class="py-16 relative" style="background: linear-gradient(to bottom, #1a2332 0%, #2d3e50 100%); background-image: url('https://source.unsplash.com/1920x800/?business,technology'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-gray-900/85"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-3 flex items-center justify-center">
            <span class="w-20 h-0.5 bg-gray-500 mr-4"></span>
            {{ t('specialized.conditions.title') }}
            <span class="w-20 h-0.5 bg-gray-500 ml-4"></span>
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <!-- 申请类别 -->
          <div v-for="(category, index) in currentConditionCategories" :key="index">
            <div class="bg-cyan-400 text-white text-center py-4 text-2xl font-bold mb-6 relative">
              {{ category.name }}
              <i class="fas fa-chevron-right absolute right-4 top-1/2 transform -translate-y-1/2"></i>
            </div>
            <div class="space-y-3">
              <div v-for="(req, reqIndex) in category.requirements.slice(0, 3)" :key="reqIndex" class="bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs leading-tight">
                {{ req }}
              </div>
              <div v-if="category.requirements.length === 4" class="bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs leading-tight">
                {{ category.requirements[3] }}
              </div>
              <div v-if="category.requirements.length > 4">
                <div class="flex gap-2" v-if="category.requirements.length > 5">
                  <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-2 py-2 text-center text-[10px] leading-tight">{{ category.requirements[3] }}</div>
                  <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-2 py-2 text-center text-[10px] leading-tight">{{ category.requirements[4] }}</div>
                </div>
                <div class="flex gap-2" v-if="category.requirements.length > 6">
                  <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-2 py-2 text-center text-[10px] leading-tight">{{ category.requirements[5] }}</div>
                  <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-2 py-2 text-center text-[10px] leading-tight">{{ category.requirements[6] }}</div>
                </div>
                <div v-if="category.requirements.length > 7" class="bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs leading-tight">
                  {{ category.requirements[7] }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 四个特征 -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div v-for="(char, charIndex) in currentCharacteristics" :key="charIndex" class="flex flex-col gap-4">
            <div :class="['text-white px-4 py-6 text-2xl font-bold text-center', charIndex % 2 === 0 ? 'bg-cyan-400' : 'bg-gradient-to-b from-orange-500 to-red-500']">
              {{ char.name }}
            </div>
            <div class="space-y-2">
              <div v-for="(item, itemIndex) in char.items.slice(0, 1)" :key="itemIndex" class="bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs leading-tight">
                {{ item }}
              </div>
              <div v-if="char.items.length > 2" class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-2 py-2 text-center text-[10px] leading-tight">{{ char.items[1] }}</div>
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-2 py-2 text-center text-[10px] leading-tight">{{ char.items[2] }}</div>
              </div>
              <div v-for="(item, itemIndex) in char.items.slice(3, 4)" :key="'item-' + itemIndex" class="bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs leading-tight">
                {{ item }}
              </div>
              <div v-if="char.items.length > 4" class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-2 py-2 text-center text-[10px] leading-tight">{{ char.items[4] }}</div>
                <div v-if="char.items.length > 5" class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-2 py-2 text-center text-[10px] leading-tight">{{ char.items[5] }}</div>
              </div>
              <div v-if="char.items.length > 6" class="bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs leading-tight">
                {{ char.items[6] }}
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-red-600 transition-all duration-300">
            {{ t('specialized.conditions.consultBtn') }}
          </button>
          <a :href="`tel:${t('specialized.banner.phone')}`" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            {{ t('specialized.banner.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 4. 专精特新值得尽早认定 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-20 h-0.5 bg-gray-400 mr-4"></span>
            {{ t('specialized.benefits.title') }}
            <span class="w-20 h-0.5 bg-gray-400 ml-4"></span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- 优惠政策项目 -->
          <article v-for="(benefit, index) in currentBenefits" :key="index" class="flex items-start gap-4">
            <div class="bg-gray-100 p-4 rounded-lg flex-shrink-0">
              <i :class="['text-cyan-500 text-5xl', 
                index === 0 ? 'fas fa-coins' : 
                index === 1 ? 'fas fa-file-contract' : 
                index === 2 ? 'fas fa-trophy' :
                index === 3 ? 'fas fa-handshake' :
                index === 4 ? 'fas fa-university' :
                'fas fa-gift']"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ benefit.title }}</h3>
              <ul class="text-gray-600 text-sm space-y-1">
                <li v-for="(detail, detailIndex) in benefit.details" :key="detailIndex">• {{ detail }}</li>
              </ul>
            </div>
          </article>
        </div>

        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-red-600 transition-all duration-300">
            {{ t('specialized.conditions.consultBtn') }}
          </button>
          <a :href="`tel:${t('specialized.banner.phone')}`" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            {{ t('specialized.banner.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 5. 我们将为您解决8大难题 -->
    <section class="py-16 relative" style="background: linear-gradient(to bottom, #1a2332 0%, #2d3e50 100%); background-image: url('https://source.unsplash.com/1920x800/?office,business'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-gray-900/85"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-3 flex items-center justify-center">
            <span class="w-20 h-0.5 bg-gray-500 mr-4"></span>
            {{ t('specialized.problems.title') }}
            <span class="w-20 h-0.5 bg-gray-500 ml-4"></span>
          </h2>
        </div>

        <div class="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          <!-- 左侧圆环图 -->
          <div class="relative" style="width: 500px; height: 500px;">
            <!-- 外圆环 -->
            <div class="absolute inset-0 rounded-full border-4 border-cyan-500" style="width: 500px; height: 500px;"></div>
            <!-- 中圆环 -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-cyan-500" style="width: 350px; height: 350px;"></div>
            <!-- 内圆环 -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-cyan-500" style="width: 200px; height: 200px;"></div>
            
            <!-- 中心文字 -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div class="text-white text-3xl font-bold">{{ t('specialized.problems.centerText') }}</div>
            </div>

            <!-- 四个标签 -->
            <div class="absolute top-12 left-1/2 transform -translate-x-1/2 text-cyan-400 text-lg font-bold">{{ t('specialized.problems.label1') }}</div>
            <div class="absolute bottom-20 left-12 text-cyan-400 text-lg font-bold">{{ t('specialized.problems.label2') }}</div>
            <div class="absolute top-1/2 left-8 transform -translate-y-1/2 text-cyan-400 text-lg font-bold">{{ t('specialized.problems.label3') }}</div>
            <div class="absolute top-1/2 right-8 transform -translate-y-1/2 text-cyan-400 text-lg font-bold">{{ t('specialized.problems.label4') }}</div>

            <!-- 8个圆点 -->
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
            <div class="absolute top-16 right-16 w-4 h-4 bg-white rounded-full"></div>
            <div class="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
            <div class="absolute bottom-16 right-16 w-4 h-4 bg-white rounded-full"></div>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
            <div class="absolute bottom-16 left-16 w-4 h-4 bg-white rounded-full"></div>
            <div class="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
            <div class="absolute top-16 left-16 w-4 h-4 bg-white rounded-full"></div>
          </div>

          <!-- 右侧列表 -->
          <div class="space-y-4">
            <div class="flex items-center gap-4" v-for="(item, index) in currentProblems" :key="index">
              <span class="text-cyan-400 text-4xl font-bold" style="min-width: 50px;">{{ index + 1 }}</span>
              <span class="text-white text-xl">{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-red-600 transition-all duration-300">
            {{ t('specialized.conditions.consultBtn') }}
          </button>
          <a :href="`tel:${t('specialized.banner.phone')}`" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            {{ t('specialized.banner.phone') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 服务卡片数据
const services = ref([
  {
    title: '创新型中小认定',
    desc: '创新型中小【国晴】认定服务，全程代办，不通过退全款。'
  },
  {
    title: '专精特新-中小认定',
    desc: '专精特新-中小【国晴】认定服务，快速回集加分项，全程代办，不通过退全款。'
  },
  {
    title: '专精特新-小巨人',
    desc: '专精特新-"小巨人"【国晴】认定，快速回集加分项，全程代办。'
  },
  {
    title: '专精特新-疑难',
    desc: '专业解决大型企业申报困难，助力企业进军北交所。'
  },
  {
    title: '专精特新补贴',
    desc: '全程协助企业补贴申请，有效提升企业补贴申请通过率，享受多重补贴。'
  },
  {
    title: '专精特新复审',
    desc: '专精特新有效期3年满后，帮助企业通过复审各项要求，顺利延续专精特新资质。'
  },
  {
    title: '高新企业认定',
    desc: '认证不通过退全款，用专业的服务，多重的保障，让客户顺利助力客户完成企业。'
  },
  {
    title: '其他相关服务',
    desc: '全套三ISO质量管理体系认定服务包专利、著作权代办等项目与易服务合集1报告服务。'
  }
])

// 根据语言返回服务数据
const currentServices = computed(() => {
  if (locale.value === 'en-US') {
    return [
      {
        title: 'Innovative SME Certification',
        desc: 'Innovative SME [National] certification service, full process handling, refund if not passed.'
      },
      {
        title: 'Specialized & Innovative - SME Certification',
        desc: 'Specialized & Innovative - SME [National] certification service, quickly gather bonus points, full process handling, refund if not passed.'
      },
      {
        title: 'Specialized & Innovative - Little Giant',
        desc: 'Specialized & Innovative - "Little Giant" [National] certification, quickly gather bonus points, full process handling.'
      },
      {
        title: 'Specialized & Innovative - Difficult Cases',
        desc: 'Professionally solve application difficulties for large enterprises, helping companies enter Beijing Stock Exchange.'
      },
      {
        title: 'Specialized & Innovative Subsidies',
        desc: 'Full assistance in enterprise subsidy applications, effectively improving subsidy approval rate, enjoying multiple subsidies.'
      },
      {
        title: 'Specialized & Innovative Re-evaluation',
        desc: 'After 3-year validity period, help enterprises meet re-evaluation requirements and successfully renew the qualification.'
      },
      {
        title: 'High-Tech Enterprise Certification',
        desc: 'Refund if not certified, with professional services and multiple guarantees to help clients complete enterprise certification.'
      },
      {
        title: 'Other Related Services',
        desc: 'Complete set of three ISO quality management system certification services including patents, copyrights and other projects with integrated report services.'
      }
    ]
  }
  return services.value
})

// 申请条件类别数据
const conditionCategories = ref([
  {
    name: '创新型中小企业',
    requirements: [
      '主导产品所属领域情况',
      '主营业务占比与增长率',
      '主导产品所属领域情况',
      '资产负债率'
    ]
  },
  {
    name: '"专精特新" 中小企业',
    requirements: [
      '主导产品所属领域情况',
      '主营业务占比与增长率',
      '主导产品所属领域情况',
      '资产负债率',
      '数字化水平',
      '质量管理体系认证',
      '净利润率',
      '主营部门该合并地域产业状况和中小企业发展实际自主设定'
    ]
  },
  {
    name: '专精特新 "小巨人" 企业',
    requirements: [
      '主导产品所属领域情况',
      '主营业务占比与增长率',
      '主导产品所属领域情况',
      '资产负债率',
      '数字化水平',
      '质量管理体系认证',
      '主营产品在全国市场与有率并拥有自有竞争优势的自主品牌'
    ]
  }
])

const currentConditionCategories = computed(() => {
  if (locale.value === 'en-US') {
    return [
      {
        name: 'Innovative SME',
        requirements: [
          'Main product field situation',
          'Main business proportion and growth rate',
          'Main product field situation',
          'Asset-liability ratio'
        ]
      },
      {
        name: '"Specialized & Innovative" SME',
        requirements: [
          'Main product field situation',
          'Main business proportion and growth rate',
          'Main product field situation',
          'Asset-liability ratio',
          'Digitalization level',
          'Quality management system certification',
          'Net profit margin',
          'Main department regional industry status and SME development self-defined standards'
        ]
      },
      {
        name: 'Specialized & Innovative "Little Giant" Enterprise',
        requirements: [
          'Main product field situation',
          'Main business proportion and growth rate',
          'Main product field situation',
          'Asset-liability ratio',
          'Digitalization level',
          'Quality management system certification',
          'Main product national market share and competitive advantage with independent brand'
        ]
      }
    ]
  }
  return conditionCategories.value
})

// 四大特征数据
const characteristics = ref([
  {
    name: '专业化',
    items: [
      '获科技奖励情况',
      '知识产权数',
      '研发机构建设',
      '新增股权融资情况',
      '研发费用占比',
      '高新技术企业获评情况'
    ]
  },
  {
    name: '精细化',
    items: [
      '获科技奖励情况',
      '知识产权数',
      '研发机构建设',
      '新增股权融资情况',
      '研发费用占比',
      '研发人员占比',
      '"创客中国" 获奖情况'
    ]
  },
  {
    name: '特色化',
    items: [
      '获科技奖励情况',
      '知识产权数',
      '研发机构建设',
      '新增股权融资情况',
      '研发费用占比',
      '研发人员占比',
      '"创客中国" 获奖情况'
    ]
  },
  {
    name: '新颖化',
    items: [
      '获科技奖励情况',
      '知识产权数',
      '研发机构建设',
      '新增股权融资情况',
      '研发费用占比',
      '研发人员占比',
      '"创客中国" 获奖情况'
    ]
  }
])

const currentCharacteristics = computed(() => {
  if (locale.value === 'en-US') {
    return [
      {
        name: 'Specialization',
        items: [
          'Scientific and technological awards',
          'Number of intellectual properties',
          'R&D institution construction',
          'New equity financing',
          'R&D expense ratio',
          'High-tech enterprise evaluation'
        ]
      },
      {
        name: 'Refinement',
        items: [
          'Scientific and technological awards',
          'Number of intellectual properties',
          'R&D institution construction',
          'New equity financing',
          'R&D expense ratio',
          'R&D personnel ratio',
          '"Maker China" awards'
        ]
      },
      {
        name: 'Specialization',
        items: [
          'Scientific and technological awards',
          'Number of intellectual properties',
          'R&D institution construction',
          'New equity financing',
          'R&D expense ratio',
          'R&D personnel ratio',
          '"Maker China" awards'
        ]
      },
      {
        name: 'Innovation',
        items: [
          'Scientific and technological awards',
          'Number of intellectual properties',
          'R&D institution construction',
          'New equity financing',
          'R&D expense ratio',
          'R&D personnel ratio',
          '"Maker China" awards'
        ]
      }
    ]
  }
  return characteristics.value
})

// 优惠政策数据
const benefits = ref([
  {
    title: '资金支持',
    details: [
      '专项资金支持100亿元以上奖补资金，支持',
      '千余家国家级专精特新"小巨人"企业及',
      '低息贷款。'
    ]
  },
  {
    title: '政策导向',
    details: [
      '数字化政透开放税务人气"专精特新"企业',
      '培育体系，组织开展能能优进新区活动;',
      '开展中小企业跨领域合活动。'
    ]
  },
  {
    title: '品牌市场',
    details: [
      '确立组分市场地位，各大媒体会设立 "专精',
      '特新" 专场，安排产品发布，企业资源，技',
      '术对接等系列活动。'
    ]
  },
  {
    title: '人才支持',
    details: [
      '开展 "专精特新" 中小企业师资回招',
      '聘、直播带岗等活动;',
      '开展领军人才 "专精特新" 等培训。'
    ]
  },
  {
    title: '北交所上市',
    details: [
      '北交所上市主力企业，上市辅导。'
    ]
  },
  {
    title: '补贴奖励',
    details: [
      '地区政府给予 "专精特新" 企业每年度',
      '10万元财政补贴;',
      '给予新申请企业，一次性10W-50W奖励。'
    ]
  }
])

const currentBenefits = computed(() => {
  if (locale.value === 'en-US') {
    return [
      {
        title: 'Financial Support',
        details: [
          'Special fund support of over 10 billion yuan in awards and subsidies, supporting',
          'Thousands of national-level specialized and innovative "Little Giant" enterprises and',
          'Low-interest loans.'
        ]
      },
      {
        title: 'Policy Guidance',
        details: [
          'Digital policy transparency, open taxation for "Specialized & Innovative" enterprises',
          'Cultivation system, organize high-quality advancement activities;',
          'Conduct cross-field cooperation activities for SMEs.'
        ]
      },
      {
        title: 'Brand Market',
        details: [
          'Establish market segment position, major media will set up "Specialized',
          '& Innovative" special events, arrange product releases, enterprise resources, tech',
          'nology matching and other series of activities.'
        ]
      },
      {
        title: 'Talent Support',
        details: [
          'Conduct "Specialized & Innovative" SME teacher recruitment',
          'hiring, live streaming job fairs and other activities;',
          'Conduct leading talent "Specialized & Innovative" training.'
        ]
      },
      {
        title: 'Beijing Stock Exchange Listing',
        details: [
          'Main enterprises for Beijing Stock Exchange listing, listing guidance.'
        ]
      },
      {
        title: 'Subsidies and Rewards',
        details: [
          'Regional government provides "Specialized & Innovative" enterprises with annual',
          '100,000 yuan financial subsidies;',
          'One-time 100k-500k rewards for newly applying enterprises.'
        ]
      }
    ]
  }
  return benefits.value
})

// 8大难题列表
const problems = ref([
  '企业核心知识产权体系搭建',
  '核心专利和著作权满足数量要求',
  'ISO认证、3A认证加急解决',
  '企业加分项指标尽快完善',
  '认证失败后快速申请通过',
  '企业布局"小巨人"认证具体方案',
  '高效培育成为专精特新企业',
  '解决大型企业的申报困境'
])

const currentProblems = computed(() => {
  if (locale.value === 'en-US') {
    return [
      'Build core intellectual property system',
      'Meet quantity requirements for core patents and copyrights',
      'Fast-track ISO certification and 3A certification',
      'Quickly improve enterprise scoring indicators',
      'Rapid approval after certification failure',
      'Specific plan for "Little Giant" certification',
      'Efficiently cultivate specialized and innovative enterprises',
      'Solve application difficulties for large enterprises'
    ]
  }
  return problems.value
})
</script>
