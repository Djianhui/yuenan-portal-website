<template>
  <div class="min-h-screen">
    <!-- 1. 顶部横幅区 -->
    <header class="w-full relative py-20" style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); background-image: url('https://source.unsplash.com/1920x600/?city,skyline,night'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-4">
          <p class="text-cyan-400 text-sm">
            <i class="fas fa-star mr-2"></i>
            {{ t('highTech.banner.tagline') }}
          </p>
        </div>
        <div class="text-center mb-12">
          <h1 class="text-6xl font-bold text-white mb-6">
            {{ t('highTech.banner.title') }}<span class="text-orange-500">{{ t('highTech.banner.titleHighlight') }}</span>
          </h1>
          <p class="text-white text-lg mb-2">{{ t('highTech.banner.subtitle1') }}</p>
          <p class="text-cyan-300 text-sm">{{ t('highTech.banner.subtitle2') }}</p>
        </div>
        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-red-600 transition-all duration-300">
            {{ t('highTech.banner.consultBtn') }}
          </button>
          <a :href="`tel:${t('highTech.banner.phone')}`" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            {{ t('highTech.banner.phone') }}
          </a>
        </div>
      </div>
    </header>

    <!-- 2. 高新认证相关服务 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            {{ t('highTech.services.title') }}
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
          <p class="text-gray-600">{{ t('highTech.services.subtitle') }}</p>
        </div>

        <!-- 服务卡片网格 (2行4列) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <article v-for="service in currentServices" :key="service.title" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 min-h-[80px]">{{ service.desc }}</p>
            </div>
            <div class="grid grid-cols-2 border-t">
              <button class="py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:from-orange-600 hover:to-red-600 transition">
                {{ t('highTech.services.consultBtn') }}
              </button>
              <a :href="`tel:${t('highTech.banner.phone')}`" class="py-3 border-l border-white bg-white text-orange-500 font-bold hover:bg-gray-50 transition flex items-center justify-center">
                {{ t('highTech.banner.phone') }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 3. 高新申请条件 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            {{ t('highTech.conditions.title') }}
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- 左侧条件列表 -->
          <div class="space-y-6">
            <div v-for="(condition, index) in currentConditions" :key="index" class="flex items-start gap-4">
              <div class="bg-cyan-400 text-white w-12 h-12 rounded flex items-center justify-center flex-shrink-0 transform rotate-45">
                <span class="transform -rotate-45 font-bold">◆</span>
              </div>
              <div class="pt-2">
                <p class="text-gray-800 text-lg leading-relaxed">{{ condition }}</p>
              </div>
            </div>
          </div>

          <!-- 右侧插图 -->
          <div class="flex justify-center">
            <div class="relative">
              <img src="../img/apply_condition.png" alt="申请条件" class="rounded-lg">
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-6 mt-16">
          <button class="px-16 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('highTech.conditions.consultBtn') }}
          </button>
          <a :href="`tel:${t('highTech.banner.phone')}`" class="px-16 py-4 bg-cyan-400 text-white text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('highTech.banner.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 4. 协助企业申领奖励补贴 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4" style="color: #8B4513;">
            {{ t('highTech.subsidies.title') }}
          </h2>
          <p class="text-gray-600">{{ t('highTech.subsidies.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <article v-for="subsidy in currentSubsidies" :key="subsidy.title" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300" style="background: repeating-linear-gradient(45deg, #ffffff, #ffffff 10px, #f9f9f9 10px, #f9f9f9 20px);">
            <div class="p-6 text-center">
              <!-- 大图标和标题 -->
              <div class="mb-4">
                <div class="inline-block">
                  <div class="flex items-center gap-3">
                    <span class="text-6xl font-bold" :style="{ color: subsidy.color }">{{ subsidy.icon }}</span>
                    <div v-if="subsidy.badge" class="flex items-center gap-2">
                      <i class="fas fa-trophy text-yellow-500 text-3xl"></i>
                      <i v-if="subsidy.badge === 'doc'" class="fas fa-clipboard-list text-blue-500 text-3xl"></i>
                      <i v-if="subsidy.badge === 'hand'" class="fas fa-hand-holding-usd text-orange-500 text-3xl"></i>
                      <i v-if="subsidy.badge === 'calendar'" class="fas fa-calendar-check text-purple-500 text-3xl"></i>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ subsidy.title }}</h3>
              
              <div class="border-t-2 border-gray-300 my-4"></div>
              
              <div class="text-left space-y-2 mb-6">
                <p class="text-cyan-500 font-bold text-sm mb-2">{{ t('highTech.subsidies.conditionsLabel') }}</p>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li v-for="item in subsidy.conditions" :key="item" class="flex items-start">
                    <span class="mr-2">□</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="border-t-2 border-gray-300 my-4"></div>
              
              <p class="text-sm text-gray-600 mb-2">{{ t('highTech.subsidies.amountLabel') }}</p>
              <p class="text-red-500 font-bold text-2xl">{{ subsidy.amount }}</p>
            </div>
          </article>
        </div>

        <div class="flex justify-center gap-6">
          <button class="px-16 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('highTech.subsidies.consultBtn') }}
          </button>
          <a :href="`tel:${t('highTech.banner.phone')}`" class="px-16 py-4 bg-cyan-400 text-white text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('highTech.banner.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 5. 为您解决8大难题 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            {{ t('highTech.problems.title') }}<span class="text-red-500">{{ t('highTech.problems.titleHighlight') }}</span>{{ t('highTech.problems.titleSuffix') }}
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
          <p class="text-gray-600">{{ t('highTech.problems.subtitle') }}</p>
        </div>

        <div class="relative max-w-6xl mx-auto">
          <!-- 中心圆形图标 -->
          <div class="flex justify-center items-center mb-16">
            <div class="relative w-64 h-64 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <img src="../img/core.png" alt="核心" class="w-48 h-48 rounded-full object-cover">
            </div>
          </div>

          <!-- 8大难题三列布局：左4个 + 中间图标 + 右4个 -->
          <div class="grid grid-cols-3 gap-8 max-w-7xl mx-auto items-center" style="margin-top: -180px;">
            <!-- 左侧4个 -->
            <div class="space-y-8 text-right">
              <div v-for="(problem, index) in currentProblems.slice(0, 4)" :key="index" class="flex items-center justify-end gap-4">
                <p class="text-gray-800 text-lg font-medium">{{ problem }}</p>
                <span class="text-3xl font-bold text-gray-800 flex-shrink-0">{{ String(index + 1).padStart(2, '0') }}</span>
              </div>
            </div>
            
            <!-- 中间圆形图标 -->
            <div class="flex justify-center">
              <div class="w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl">
                <div class="w-56 h-56 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <i class="fas fa-balance-scale text-white text-6xl"></i>
                </div>
              </div>
            </div>
            
            <!-- 右侧4个 -->
            <div class="space-y-8">
              <div v-for="(problem, index) in currentProblems.slice(4, 8)" :key="index + 4" class="flex items-center gap-4">
                <span class="text-3xl font-bold text-gray-800 flex-shrink-0">{{ String(index + 5).padStart(2, '0') }}</span>
                <p class="text-gray-800 text-lg font-medium">{{ problem }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-6 mt-16">
          <button class="px-16 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('highTech.problems.consultBtn') }}
          </button>
          <a :href="`tel:${t('highTech.banner.phone')}`" class="px-16 py-4 bg-cyan-400 text-white text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            {{ t('highTech.banner.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 6. 高新企业值得尽早申请 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            {{ t('highTech.benefits.title') }}
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="benefit in currentBenefits" :key="benefit.title" class="bg-white rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-3xl" :style="{ backgroundColor: benefit.color }">
              {{ benefit.icon }}
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ benefit.desc }}</p>
          </article>
        </div>

        <div class="flex justify-center gap-6 mt-16">
          <button class="px-16 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            {{ t('highTech.benefits.consultBtn') }}
          </button>
          <a :href="`tel:${t('highTech.banner.phone')}`" class="px-16 py-4 bg-cyan-400 text-white text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            <u>{{ t('highTech.banner.phone') }}</u>
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

// 高新认证相关服务数据
const relatedServices = ref([
  {
    title: '高新企业担保认定',
    desc: '认证不通过退全款，长沙悦安用专业的服务，多年的保障，让客户利和为国高新企业。'
  },
  {
    title: '高新专利软著搭建',
    desc: '协助企业布局、搭建专利、软著等知识产权体系，完全加分项目，帮助企业快速认定符合要求。'
  },
  {
    title: '专精特新-中小认定',
    desc: '需企业年收入1000万元以上，长沙悦安精精特新-中小认定服务，快速增加分项，全程代办，不通过退全款。'
  },
  {
    title: '"小巨人"认定',
    desc: '专精特新"小巨人"企业认定需同时满足专业化标准、精细化标准、特色化标准、创新能力标准、产业链配套标准、主导产品所属领域标准。'
  },
  {
    title: '高新复审',
    desc: '企业高新认定有效期为三年，长沙悦安精通企业服务政策、顺利通过高新复审。'
  },
  {
    title: '高新企业补贴',
    desc: '全程协助企业申报补贴，专科委新、专精特新、小微企业、筑基扩大规模相关补贴。'
  },
  {
    title: '重点小巨人/单项冠军',
    desc: '需已将专业化体系的核心产品，长沙悦安不能成功转化，分析市场地位，展现企业科技创新主体地位，协助获取认定。'
  },
  {
    title: '科技成果评价',
    desc: '评价报告可以帮助企业了解科技成果的先进化潜力，推进技术成果转化发展，申请国家科技奖励申报。'
  }
])

// 根据当前语言获取服务数据
const currentServices = computed(() => {
  if (locale.value === 'en-US') {
    return [
      {
        title: 'Guaranteed High-Tech Enterprise Certification',
        desc: 'Full refund if not certified. Changsha Yuean provides professional services with years of experience to help clients become national high-tech enterprises.'
      },
      {
        title: 'Patent & Software Copyright System',
        desc: 'Assist enterprises in planning and building patent and software copyright intellectual property systems to meet certification requirements quickly.'
      },
      {
        title: 'Specialized & Innovative SME Certification',
        desc: 'For enterprises with annual revenue over 10 million yuan. Changsha Yuean provides specialized certification services, full support, refund if not passed.'
      },
      {
        title: '"Little Giant" Certification',
        desc: 'Specialized and innovative "Little Giant" enterprise certification requires meeting standards for specialization, refinement, innovation capability, industrial chain support, and product field.'
      },
      {
        title: 'High-Tech Re-evaluation',
        desc: 'Enterprise high-tech certification is valid for three years. Changsha Yuean is proficient in enterprise service policies to ensure smooth re-evaluation.'
      },
      {
        title: 'High-Tech Enterprise Subsidies',
        desc: 'Full assistance in applying for subsidies including specialized and innovative, SME, and expansion-related subsidies.'
      },
      {
        title: 'Key Little Giant/Single Champion',
        desc: 'For core products in specialized systems. Changsha Yuean assists in market analysis, demonstrating enterprise innovation leadership to obtain certification.'
      },
      {
        title: 'Scientific Achievement Evaluation',
        desc: 'Evaluation reports help enterprises understand the advancement potential of scientific achievements, promote technology transformation, and apply for national science and technology awards.'
      }
    ]
  }
  return relatedServices.value
})

// 高新申请条件数据
const applicationConditions = ref([
  '企业申请认定时领注册成立一年以上',
  '近3年知识产权及数量要求',
  '企业从事研发和相关技术创新活动的科技人员占企业当年职工总数的比例',
  '无重大违法乱纪行为',
  '近一年高新技术产品（服务）收入占企业同期总收入的比例',
  '企业近三个会计年度的研究开发费用总额占同期销售收入总额的比例符合要求'
])

const currentConditions = computed(() => {
  if (locale.value === 'en-US') {
    return [
      'Enterprise must be registered for at least one year',
      'Intellectual property requirements for the past 3 years',
      'Proportion of R&D personnel to total employees',
      'No major legal violations',
      'Proportion of high-tech product (service) revenue to total revenue',
      'R&D expenses meet the required proportion of total sales revenue over three fiscal years'
    ]
  }
  return applicationConditions.value
})

// 补贴项目数据
const subsidyPrograms = ref([
  {
    icon: '奖',
    color: '#06b6d4',
    title: '国高新补贴',
    badge: 'trophy',
    conditions: [
      '已认定高新企业',
      '各市政区区金额不同',
      '各区县领补贴'
    ],
    amount: '10w-50w'
  },
  {
    icon: '励',
    color: '#10b981',
    title: '小微企业补贴（金种子）',
    badge: 'doc',
    conditions: [
      '研发费用满足100w以上',
      '6大高新技术行业',
      '已认定类科技型新企业/科技型中小',
      '成立年限    收入二千万下',
      '企业100人以下'
    ],
    amount: '2w-20w'
  },
  {
    icon: '补',
    color: '#06b6d4',
    title: '筑基扩容/小升规',
    badge: 'hand',
    conditions: [
      '符合城市标注定位',
      '6大高新技术行业',
      '高科技收入、研发、产业链细分领域补贴',
      '已认定高新企业'
    ],
    amount: '5w-10w'
  },
  {
    icon: '贴',
    color: '#f59e0b',
    title: '专精特新补贴',
    badge: 'calendar',
    conditions: [
      '已认定专精特新中小',
      '已至小巨人企业',
      '各区县领补贴不同    双认定叠加补贴'
    ],
    amount: '10w-80w'
  }
])

const currentSubsidies = computed(() => {
  if (locale.value === 'en-US') {
    return [
      {
        icon: 'A',
        color: '#06b6d4',
        title: 'National High-Tech Subsidy',
        badge: 'trophy',
        conditions: [
          'Certified high-tech enterprise',
          'Amounts vary by district',
          'Apply at district/county level'
        ],
        amount: '100k-500k'
      },
      {
        icon: 'R',
        color: '#10b981',
        title: 'SME Subsidy (Golden Seed)',
        badge: 'doc',
        conditions: [
          'R&D expenses over 1 million',
          '6 major high-tech industries',
          'Certified sci-tech enterprise/SME',
          'Revenue under 20 million',
          'Under 100 employees'
        ],
        amount: '20k-200k'
      },
      {
        icon: 'S',
        color: '#06b6d4',
        title: 'Foundation Expansion/Growth Program',
        badge: 'hand',
        conditions: [
          'Meets city positioning standards',
          '6 major high-tech industries',
          'High-tech revenue, R&D, industrial chain subsidies',
          'Certified high-tech enterprise'
        ],
        amount: '50k-100k'
      },
      {
        icon: 'B',
        color: '#f59e0b',
        title: 'Specialized & Innovative Subsidy',
        badge: 'calendar',
        conditions: [
          'Certified specialized SME',
          'Little Giant enterprise',
          'Varies by district, dual certification bonus'
        ],
        amount: '100k-800k'
      }
    ]
  }
  return subsidyPrograms.value
})

// 8大难题数据
const eightProblems = ref([
  '企业核心知识产权架构布局',
  '科技成果转化合规能力搭建',
  '把关企业研发组织管理水平',
  '财务成长性指标呈逐年增增',
  '研发费用按项目建立辅助账',
  '享受研发费用加计扣除优惠',
  '专家带队高效应对抽查核查',
  '高效认定国家高新技术企业'
])

const currentProblems = computed(() => {
  if (locale.value === 'en-US') {
    return [
      'Core intellectual property architecture planning',
      'Scientific achievement transformation compliance',
      'R&D organization management standards',
      'Financial growth indicators improvement',
      'R&D expense auxiliary accounting by project',
      'R&D expense additional deduction benefits',
      'Expert team for audit and review support',
      'Efficient national high-tech enterprise certification'
    ]
  }
  return eightProblems.value
})

// 高新企业值得尽早申请数据
const earlyBenefits = ref([
  {
    icon: '税',
    color: '#ff6b35',
    title: '企业所得税减免10%（按照15%缴纳）',
    desc: ''
  },
  {
    icon: '扣',
    color: '#06b6d4',
    title: '研发费用按照175-200%计入成本，加计扣除',
    desc: ''
  },
  {
    icon: '才',
    color: '#ff6b35',
    title: '帮助企业引进高端人才',
    desc: ''
  },
  {
    icon: '资',
    color: '#06b6d4',
    title: '更容易获得各大银行和VC投融资',
    desc: ''
  },
  {
    icon: '奖',
    color: '#ff6b35',
    title: '享受区域性现金奖励政策',
    desc: ''
  },
  {
    icon: '降',
    color: '#06b6d4',
    title: '固定资产加速折旧，降低税负',
    desc: ''
  },
  {
    icon: '国',
    color: '#ff6b35',
    title: '唯一"国"字头企业资质',
    desc: ''
  },
  {
    icon: '加',
    color: '#06b6d4',
    title: '大型项目招投标加分项',
    desc: ''
  },
  {
    icon: '引',
    color: '#ff6b35',
    title: '提升品牌硬实力，吸引投资',
    desc: ''
  }
])

const currentBenefits = computed(() => {
  if (locale.value === 'en-US') {
    return [
      { icon: 'T', color: '#ff6b35', title: '10% corporate income tax reduction (15% rate)', desc: '' },
      { icon: 'D', color: '#06b6d4', title: '175-200% R&D expense cost inclusion and additional deduction', desc: '' },
      { icon: 'H', color: '#ff6b35', title: 'Help attract high-end talent', desc: '' },
      { icon: 'F', color: '#06b6d4', title: 'Easier access to bank and VC financing', desc: '' },
      { icon: 'R', color: '#ff6b35', title: 'Regional cash reward policies', desc: '' },
      { icon: 'A', color: '#06b6d4', title: 'Accelerated depreciation of fixed assets, reduced tax burden', desc: '' },
      { icon: 'N', color: '#ff6b35', title: 'Only national-level enterprise qualification', desc: '' },
      { icon: 'B', color: '#06b6d4', title: 'Bonus points in major project bidding', desc: '' },
      { icon: 'E', color: '#ff6b35', title: 'Enhanced brand strength to attract investment', desc: '' }
    ]
  }
  return earlyBenefits.value
})
</script>
