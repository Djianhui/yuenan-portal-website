<template>
  <div class="min-h-screen">
    <!-- 1. 顶部横幅区 -->
    <header class="w-full relative py-24" style="background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f3460 100%); background-image: url('https://source.unsplash.com/1920x600/?technology,network,digital'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <!-- <div class="text-center mb-6">
          <p class="text-cyan-400 text-sm mb-2">
            <i class="fas fa-leaf mr-2"></i>
            长沙悦安获资源创投、顺为资本、腾讯双百战略投资
          </p>
        </div> -->
        <div class="text-center mb-12">
          <h1 class="text-6xl font-bold text-white mb-6">
            新技术新产品<span class="text-cyan-400">认定中心</span>
          </h1>
          <p class="text-white text-lg">全程办理一覆盖新办、加急整改、第三方报告服务</p>
        </div>

        <!-- 5个标签 -->
        <div class="flex justify-center items-center gap-6 mb-12">
          <div v-for="tag in topTags" :key="tag" class="px-8 py-4 border-2 border-cyan-400 rounded-full text-white text-lg font-bold hover:bg-cyan-400/20 transition-all duration-300">
            {{ tag }}
          </div>
        </div>

        <div class="flex justify-center gap-6">
          <button class="px-16 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            立即咨询 >>
          </button>
          <a href="tel:400-872-8735" class="px-16 py-4 bg-cyan-400 text-white text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            400-872-8735
          </a>
        </div>
      </div>
    </header>

    <!-- 2. 新技术新产品认定相关服务 (第一部分 - 4个服务) -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            新技术新产品认定相关服务
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
          <p class="text-gray-600">资深顾问1对1服务，收费透明，高效办理。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <article v-for="service in servicesPartOne" :key="service.title" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 min-h-[80px]">{{ service.desc }}</p>
            </div>
            <div class="grid grid-cols-2 border-t">
              <button class="py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:from-orange-600 hover:to-red-600 transition">
                立即咨询
              </button>
              <a href="tel:400-872-8735" class="py-3 border-l border-white bg-white text-orange-500 font-bold hover:bg-gray-50 transition flex items-center justify-center">
                400-872-8735
              </a>
            </div>
          </article>
        </div>

        <!-- 第二部分 - 4个服务 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <article v-for="service in servicesPartTwo" :key="service.title" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 min-h-[80px]">{{ service.desc }}</p>
            </div>
            <div class="grid grid-cols-2 border-t">
              <button class="py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:from-orange-600 hover:to-red-600 transition">
                立即咨询
              </button>
              <a href="tel:400-872-8735" class="py-3 border-l border-white bg-white text-orange-500 font-bold hover:bg-gray-50 transition flex items-center justify-center">
                400-872-8735
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
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            新技术新产品的申报条件
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
        </div>

        <div class="relative">
          <!-- 蓝色渐变背景卡片 -->
          <div class="bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl p-12 flex items-center gap-8">
            <div class="flex-1 space-y-6">
              <div v-for="(condition, index) in conditions" :key="index" class="flex items-start gap-4">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-cyan-500 font-bold text-lg">
                  {{ index + 1 }}
                </div>
                <p class="text-white text-lg pt-2">{{ condition }}</p>
              </div>
            </div>
            <div class="flex-shrink-0">
              <img src="../img/apply_condition.png" alt="申报条件" class="rounded-lg shadow-xl">
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-6 mt-16">
          <button class="px-16 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            立即咨询 >>
          </button>
          <a href="tel:400-872-8735" class="px-16 py-4 bg-cyan-400 text-white text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            400-872-8735
          </a>
        </div>
      </div>
    </section>

    <!-- 4. 协助企业申领奖励补贴 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4" style="color: #8B4513;">
            协助企业申领奖励补贴
          </h2>
          <p class="text-gray-600">全程协助,实时政策解读,提升企业申领成功率</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <article v-for="subsidy in subsidyPrograms" :key="subsidy.title" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300" style="background: repeating-linear-gradient(45deg, #ffffff, #ffffff 10px, #f9f9f9 10px, #f9f9f9 20px);">
            <div class="p-6 text-center">
              <!-- 大图标和标题 -->
              <div class="mb-4">
                <div class="inline-block">
                  <div class="flex items-center gap-3 justify-center">
                    <span class="text-6xl font-bold" :style="{ color: subsidy.color }">{{ subsidy.icon }}</span>
                    <div v-if="subsidy.badge">
                      <i :class="subsidy.badgeIcon" :style="{ color: subsidy.badgeColor }" class="text-3xl"></i>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ subsidy.title }}</h3>
              
              <div class="border-t-2 border-gray-300 my-4"></div>
              
              <div class="text-left space-y-2 mb-6">
                <p class="text-cyan-500 font-bold text-sm mb-2">申领条件:</p>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li v-for="item in subsidy.conditions" :key="item" class="flex items-start">
                    <span class="mr-2">□</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="border-t-2 border-gray-300 my-4"></div>
              
              <p class="text-sm text-gray-600 mb-2">奖补额:</p>
              <p class="text-red-500 font-bold text-2xl">{{ subsidy.amount }}</p>
            </div>
          </article>
        </div>

        <div class="flex justify-center gap-6">
          <button class="px-16 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            申请条件咨询 >>
          </button>
          <a href="tel:400-872-8735" class="px-16 py-4 bg-cyan-400 text-white text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            400-872-8735
          </a>
        </div>
      </div>
    </section>

    <!-- 5. 新技术新产品办理流程 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            新技术新产品办理流程
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
        </div>

        <!-- 流程图 -->
        <div class="relative">
          <!-- 时间线 -->
          <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300" style="transform: translateY(-50%);"></div>
          <div class="absolute top-1/2 left-0 h-0.5 bg-orange-500" style="width: 0%; transform: translateY(-50%);"></div>
          
          <!-- 橙色箭头 -->
          <div class="absolute left-0 top-1/2" style="transform: translateY(-50%);">
            <div class="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-orange-500"></div>
          </div>

          <div class="grid grid-cols-5 gap-4 relative z-10">
            <div v-for="(step, index) in processSteps" :key="index" class="text-center">
              <!-- 上方内容 (奇数索引) -->
              <div v-if="index % 2 === 0" class="mb-8">
                <div class="mb-4">
                  <img :src="step.topImage" :alt="step.topTitle" class="w-32 h-32 mx-auto rounded-lg shadow-md object-cover">
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">{{ step.topTitle }}</h3>
                <div class="text-sm text-gray-600 space-y-1">
                  <p v-for="item in step.topDesc" :key="item">{{ item }}</p>
                </div>
              </div>
              <div v-else class="mb-32"></div>

              <!-- 中间步骤号 -->
              <div class="relative">
                <div class="inline-block">
                  <div class="text-4xl font-bold text-gray-400 mb-2">{{ step.number }}</div>
                </div>
              </div>

              <!-- 下方内容 (偶数索引) -->
              <div v-if="index % 2 === 1" class="mt-8">
                <div class="mb-4">
                  <img :src="step.bottomImage" :alt="step.bottomTitle" class="w-32 h-32 mx-auto rounded-lg shadow-md object-cover">
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">{{ step.bottomTitle }}</h3>
                <div class="text-sm text-gray-600 space-y-1">
                  <p v-for="item in step.bottomDesc" :key="item">{{ item }}</p>
                </div>
              </div>
              <div v-else class="mt-32"></div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-6 mt-16">
          <button class="px-16 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
            立即咨询 >>
          </button>
          <a href="tel:400-872-8735" class="px-16 py-4 bg-cyan-400 text-white text-lg font-bold rounded-full hover:bg-cyan-500 transition-all duration-300 flex items-center shadow-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            400-872-8735
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 顶部5个标签
const topTags = ref([
  '科技型中小',
  '创新型中小',
  '新技术新产品',
  '高新企业认定',
  '专精特新认定'
])

// 第一部分服务(4个)
const servicesPartOne = ref([
  {
    title: '新技术新产品认定',
    desc: '在承担企业，高校院所、新型研发机构和社会组织取得的新技术新产品服务认定。'
  },
  {
    title: '企业认定补贴',
    desc: '单位在得新技术新产品认定后，各区将给予不同程度的补贴奖励，同时享有多重优惠政策用补贴。'
  },
  {
    title: '科技型中小认定',
    desc: '从事高新技术产品研发、生产和服务的中小企业所有的认定。'
  },
  {
    title: '创新型中小认定',
    desc: '认定创新型中小企业需要企业从事年收入1亿于2亿元，员工总数不超过500人，且已经获得省级科技类奖项。'
  }
])

// 第二部分服务(4个)
const servicesPartTwo = ref([
  {
    title: '企业技术中心认定',
    desc: '企业设立的研发机构发与创新机构，负责技术创新规划、开展产业技术研发、创建立技术标准体系等...'
  },
  {
    title: '高新认证担保',
    desc: '认证不通过退全款，用专业的服务，多重的保障，让客户顺利成为国高新企业。'
  },
  {
    title: '中关村高新认证',
    desc: '在中关村科技园区，国家重点支持的高新技术领域认证，认证能够帮助企业提低成本，获取多项相关优惠政策。'
  },
  {
    title: '专精特新认定',
    desc: '不通过退全款，全程代办专精特新企业认定，包含核心专利挖掘，完善企业加分项。'
  }
])

// 申报条件
const conditions = ref([
  '申请单位应为本市行政区域内的企业、高等学校、科研院所或社会组织；',
  '产品(服务)应具有技术先进性和创新性，并拥有自主知识产权；',
  '属于本市重点战略性新兴产业以及现代服务业领域范围；',
  '符合构建"高精尖经济结构的要求，生产过程符合节能减排技术标准；',
  '具有潜在的经济效益和较大的市场前景，或能够显著降低生产成本。'
])

// 补贴项目数据
const subsidyPrograms = ref([
  {
    icon: '奖',
    color: '#06b6d4',
    title: '国高新补贴',
    badge: true,
    badgeIcon: 'fas fa-trophy',
    badgeColor: '#fbbf24',
    conditions: [
      '已认定高新企业',
      '各市政行政区金额不同',
      '各区县领补贴'
    ],
    amount: '10w-50w'
  },
  {
    icon: '励',
    color: '#10b981',
    title: '小微企业补贴（金种子）',
    badge: true,
    badgeIcon: 'fas fa-clipboard-list',
    badgeColor: '#3b82f6',
    conditions: [
      '研发费用满足100w以上    6大高新技术行业',
      '已认定中关对高新企业/科技型中小',
      '成立年限    收入二千万以下',
      '企业100人以下'
    ],
    amount: '2w-20w'
  },
  {
    icon: '补',
    color: '#06b6d4',
    title: '筑基扩容/小升规',
    badge: true,
    badgeIcon: 'fas fa-hand-holding-usd',
    badgeColor: '#f97316',
    conditions: [
      '符合城市标注定位',
      '高科技或设置是力较大',
      '依据收入、研发、产业领域细分类补',
      '已认国高新企业'
    ],
    amount: '5w-20w'
  },
  {
    icon: '贴',
    color: '#f59e0b',
    title: '专精特新补贴',
    badge: true,
    badgeIcon: 'fas fa-calendar-check',
    badgeColor: '#8b5cf6',
    conditions: [
      '已认定专精特新中小',
      '已至小巨人企业',
      '各区县领补贴不同    双认定叠加补贴'
    ],
    amount: '10w-80w'
  }
])

// 办理流程步骤
const processSteps = ref([
  {
    number: '01开始',
    topImage: new URL('../img/collect_evaluation.png', import.meta.url).href,
    topTitle: '收集评估',
    topDesc: ['针对企业现状', '定制认定方案'],
    bottomImage: new URL('../img/material_sorting.png', import.meta.url).href,
    bottomTitle: '材料整理',
    bottomDesc: ['内部三级审核', '补足申报材料']
  },
  {
    number: '02',
    topImage: new URL('../img/new_technology_product_filing.png', import.meta.url).href,
    topTitle: '材料整理',
    topDesc: ['内部三级审核', '补足申报材料'],
    bottomImage: new URL('../img/preview_service.png', import.meta.url).href,
    bottomTitle: '材料整理',
    bottomDesc: ['内部三级审核', '补足申报材料']
  },
  {
    number: '03',
    topImage: new URL('../img/new_technology_product_filing.png', import.meta.url).href,
    topTitle: '新技术新产品填报',
    topDesc: ['专业分工', '团环操作', '杜绝泄密'],
    bottomImage: new URL('../img/preview_service.png', import.meta.url).href,
    bottomTitle: '评审服务',
    bottomDesc: ['提前补充各项报告', '全程辅助企业评审']
  },
  {
    number: '04',
    topImage: new URL('../img/new_technology_product_filing.png', import.meta.url).href,
    topTitle: '评审服务',
    topDesc: ['提前补充各项报告', '全程辅助企业评审'],
    bottomImage: new URL('../img/material_sorting.png', import.meta.url).href,
    bottomTitle: '评审服务',
    bottomDesc: ['提前补充各项报告', '全程辅助企业评审']
  },
  {
    number: '05完成',
    topImage: new URL('../img/remediation_and_approval.png', import.meta.url).href,
    topTitle: '整改&通过认定',
    topDesc: ['辅导过审整改', '获得认定证书'],
    bottomImage: new URL('../img/obtaining_certificates.png', import.meta.url).href,
    bottomTitle: '',
    bottomDesc: []
  }
])
</script>
