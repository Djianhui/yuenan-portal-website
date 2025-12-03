<template>
  <div class="min-h-screen">
    <!-- 1. 顶部横幅区 -->
    <header class="w-full relative py-24" style="background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f3460 100%); background-image: url('https://source.unsplash.com/1920x600/?code,programming,binary'); background-size: cover; background-position: center; background-blend-mode: overlay;">
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
            软件企业&软件产品<span class="text-cyan-400">评估中心</span>
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

    <!-- 2. 双软评估服务相关（第一部分 - 4个服务） -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            双软评估服务相关
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        <!-- 第三部分 - 4个服务 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <article v-for="service in servicesPartThree" :key="service.title" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
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

    <!-- 3. 双软评估的申报条件 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            双软评估的申报条件
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
        </div>

        <div class="relative">
          <!-- 蓝色渐变背景卡片 -->
          <div class="bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl p-12 flex items-center gap-8">
            <div class="flex-1 space-y-6">
              <div v-for="(condition, index) in conditions" :key="index" class="flex items-start gap-4">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-check text-cyan-500 text-xl"></i>
                </div>
                <p class="text-white text-lg pt-2" v-html="condition"></p>
              </div>
            </div>
            <div class="flex-shrink-0">
              <img src="../img/declaration_conditions.png" alt="申报条件" class="rounded-lg shadow-xl">
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

    <!-- 4. 双软评估的优惠政策 -->
    <section class="py-16 relative" style="background: linear-gradient(135deg, #000000 0%, #1a1a2e 100%); background-image: url('https://source.unsplash.com/1920x600/?code,matrix,binary'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-black/80"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-white mr-4"></span>
            双软评估的优惠政策
            <span class="w-24 h-0.5 bg-white ml-4"></span>
          </h2>
        </div>

        <!-- 政策表格 -->
        <div class="max-w-6xl mx-auto mb-16">
          <div class="border-4 border-cyan-400 rounded-2xl overflow-hidden">
            <!-- 表头 -->
            <div class="grid grid-cols-3 bg-cyan-500">
              <div class="p-6 text-center border-r-2 border-cyan-400">
                <h3 class="text-2xl font-bold text-white">政策<br>区别</h3>
              </div>
              <div class="p-6 text-center border-r-2 border-cyan-400">
                <h3 class="text-2xl font-bold text-white">软件企业（两免三减半）</h3>
              </div>
              <div class="p-6 text-center">
                <h3 class="text-2xl font-bold text-white">软件产品（即征即退）</h3>
              </div>
            </div>

            <!-- 政策细则行 -->
            <div class="grid grid-cols-3 bg-cyan-600/30">
              <div class="p-6 text-center border-r-2 border-t-2 border-cyan-400">
                <h3 class="text-2xl font-bold text-white">政策<br>细则</h3>
              </div>
              <div class="p-6 border-r-2 border-t-2 border-cyan-400">
                <p class="text-white text-base leading-relaxed">
                  软件企业自获利年度起计算优惠期，<span class="text-orange-400 font-bold">第1年至第2年免征企业所得税</span>，<span class="text-orange-400 font-bold">第3年至第5年按照25%的法定税率减半征收</span>企业所得税，并享受至期满为止。
                </p>
              </div>
              <div class="p-6 border-t-2 border-cyan-400">
                <p class="text-white text-base leading-relaxed">
                  企业销售其<span class="text-orange-400 font-bold">自行开发生产</span>的软件产品，按 13% 税率征收增值税后，对其<span class="text-orange-400 font-bold">增值税实际税负超过 3% 的部分实行即征即退</span>政策。
                </p>
              </div>
            </div>

            <!-- 申报行 -->
            <div class="grid grid-cols-3 bg-cyan-600/30">
              <div class="p-6 text-center border-r-2 border-t-2 border-cyan-400">
                <h3 class="text-2xl font-bold text-white">申报</h3>
              </div>
              <div class="p-6 border-r-2 border-t-2 border-cyan-400">
                <ul class="text-white text-sm space-y-2">
                  <li>（一）在所得税减免期内（首次获利起计算五年）</li>
                  <li>（二）每年按规定时间向税务机关备案</li>
                  <li>（三）符合享受所得税优惠政策的软件企业条件</li>
                </ul>
              </div>
              <div class="p-6 border-t-2 border-cyan-400">
                <p class="text-white text-sm">
                  软件产品取得软件产品主管部门颁发的《软件产品登记证书》或《计算软件著作权登记证书》
                </p>
              </div>
            </div>
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
    </section>

    <!-- 5. 双软评估办理流程 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            双软评估办理流程
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
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
  '软件企业评估',
  '软件产品评估',
  '"双软"评估',
  '新技术新产品',
  '高新企业认定'
])

// 第一部分服务(4个)
const servicesPartOne = ref([
  {
    title: '双软评估',
    desc: '软件产品评估和软件企业评估合称"双软"，不仅培训标准门槛，更提高安全优质的服务的前提。'
  },
  {
    title: '软件著作权',
    desc: '软件著作权是申请软件产品评估的前提，也是企业证明其自主知识产权的有效证明。'
  },
  {
    title: '专项审计（双软）',
    desc: '企业上年度财务审计报告、上年度专项报告各(软件产品或软件著作权证相关财务数据的审计报告)。'
  },
  {
    title: '企业认定补贴',
    desc: '单位获得相关认定后，各区将给予不同程度的补贴奖励，同时享有多重优惠政策用补贴。'
  }
])

// 第二部分服务(4个)
const servicesPartTwo = ref([
  {
    title: '新技术新产品',
    desc: '在承担企业、高校院所、新型研发机构和社会组织取得的新技术新产品服务认定。'
  },
  {
    title: '创新型中小认定',
    desc: '认定创新型中小企业需要企业从事年收入1亿于2亿元，员工总数不超过500人，且已经获得省级科技类奖项。'
  },
  {
    title: '科技型中小认定',
    desc: '从事高新技术产品研发、生产和服务的中小企业所有的认定。'
  },
  {
    title: '企业技术中心认定',
    desc: '企业设立的研发机构与创新机构，负责技术创新规划、开展产业技术研发、创建立技术标准体系等...'
  }
])

// 第三部分服务(4个)
const servicesPartThree = ref([
  {
    title: '高新认证[担保]',
    desc: '认证不通过退全款，用专业的服务，多重的保障，让客户顺利成为国高新企业。'
  },
  {
    title: '中关村高新认证',
    desc: '在中关村科技园区，国家重点支持的高新技术领域认证，认证能够帮助企业提低成本，获取多项相关优惠政策。'
  },
  {
    title: '专精特新-中小认定',
    desc: '专精特新-中小间锁认定服务，快速归加分项，全程代办，不通过退全款。'
  },
  {
    title: '专精特新-小巨人',
    desc: '全程小间专精特新-小巨人认定，快速归加分项，助企业小交所上市，。'
  }
])

// 申报条件
const conditions = ref([
  '<strong>主体资格：</strong>在中国境内（不含港澳台地区）依法注册的企业',
  '<strong>人员要求：</strong>大专以上员工占比>40%，研发员工占比>20%',
  '<strong>研发费用：</strong>年度研发费用占营业收入总额>6%,且60%以上业务发生在境内',
  '<strong>收入结构：</strong>软件产品开发销售及相关服务收入占企业总收入> 50%<br>（其中嵌入式软件产品开发和技术服务收入占企业总收入>40%）',
  '<strong>其他要求：</strong>企业主营业务拥有自主知识产权'
])

// 办理流程步骤
const processSteps = ref([
  {
    number: '01开始',
    topImage: new URL("../img/evaluation_analysis.png", import.meta.url).href,
    topTitle: '收集评估',
    topDesc: ['针对企业现状', '定制双软评估方案'],
    bottomImage: '',
    bottomTitle: '',
    bottomDesc: []
  },
  {
    number: '02',
    topImage: '',
    topTitle: '',
    topDesc: [''],
    bottomImage: new URL("../img/search_review.png", import.meta.url).href,
    bottomTitle: '材料整理',
    bottomDesc: ['内部三级审核', '补足申报材料']
  },
  {
    number: '03',
    topImage: new URL("../img/filing_document.png", import.meta.url).href,
    topTitle: '双软评估申报',
    topDesc: ['专业分工', '团环操作', '杜绝泄密'],
    bottomImage: '',
    bottomTitle: '',
    bottomDesc: []
  },
  {
    number: '04',
    topImage: '',
    topTitle: '',
    topDesc: [],
    bottomImage: new URL("../img/typing_computer.png", import.meta.url).href,
    bottomTitle: '评审服务',
    bottomDesc: ['补足各项报告', '辅助企业过审']
  },
  {
    number: '05完成',
    topImage: new URL("../img/approval_success_2.png", import.meta.url).href,
    topTitle: '获得评估证书',
    topDesc: ['辅导过审整改', '获得评估证书'],
    bottomImage: '',
    bottomTitle: '',
    bottomDesc: []
  }
])
</script>
