<template>
  <div class="min-h-screen">
    <!-- 1. 顶部横幅区 -->
    <header class="w-full relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧内容 -->
          <div>
            <!-- <p class="text-cyan-500 text-sm mb-6 flex items-center">
              <i class="fas fa-leaf mr-2"></i>
              长沙悦安获资源创投、雷军顺为资本、腾讯双百战略投资
            </p> -->
            <h1 class="text-6xl font-bold text-gray-900 mb-6">
              互联网资质<span class="text-orange-500">全包服务</span>
            </h1>
            <div class="flex items-center gap-6 text-gray-700 mb-8">
              <span>全类型公司注册</span>
              <span class="text-gray-400">|</span>
              <span>企业各外资专办</span>
              <span class="text-gray-400">|</span>
              <span>绿色通道过批</span>
              <span class="text-gray-400">|</span>
              <span>不通过全额退款</span>
            </div>

            <div class="mb-8">
              <p class="text-xl text-gray-800 mb-4">
                <span class="text-cyan-500 font-bold">长沙悦安多年来为数十万家企业用心服务</span>
              </p>
              <div class="flex items-center gap-8">
                <div class="flex items-center gap-2">
                  <i class="fas fa-check-circle text-cyan-500"></i>
                  <span class="text-gray-700">1对1服务</span>
                </div>
                <div class="flex items-center gap-2">
                  <i class="fas fa-check-circle text-cyan-500"></i>
                  <span class="text-gray-700">合同发票齐备</span>
                </div>
                <div class="flex items-center gap-2">
                  <i class="fas fa-check-circle text-cyan-500"></i>
                  <span class="text-gray-700">全程无隐性收费</span>
                </div>
              </div>
            </div>

            <div class="flex gap-6">
              <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
                立即咨询 >>
              </button>
              <a href="tel:400-872-8735" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center shadow-lg">
                <i class="fas fa-phone-alt mr-3"></i>
                400-872-8735
              </a>
            </div>
          </div>

          <!-- 右侧插图 -->
          <div class="flex justify-center">
            <img src="../img/team_service.png" alt="团队服务" class="rounded-lg shadow-xl">
          </div>
        </div>
      </div>
    </header>

    <!-- 2. 公司资质相关服务（第一部分 - 4个服务） -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            公司资质相关服务
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
          <p class="text-gray-600">10年行业经验，资深顾问1对1提供行业资质解决方案，收费透明，高效办理。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <article v-for="service in servicesPartOne" :key="service.title" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 min-h-[60px]">{{ service.desc }}</p>
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
              <p class="text-gray-600 text-sm leading-relaxed mb-6 min-h-[60px]">{{ service.desc }}</p>
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
              <p class="text-gray-600 text-sm leading-relaxed mb-6 min-h-[60px]">{{ service.desc }}</p>
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

    <!-- 3. 行业资质全覆盖 - 提升企业竞争力 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            行业资质全覆盖 — 提升企业竞争力
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article v-for="category in categories" :key="category.title" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="relative h-64">
              <img :src="category.image" :alt="category.title" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <div class="flex items-center justify-center mb-4">
                  <i :class="category.icon" class="text-cyan-400 text-5xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-white text-center">{{ category.title }}</h3>
              </div>
            </div>
            <div class="p-6 bg-gray-50">
              <ul class="space-y-3">
                <li v-for="item in category.items" :key="item" class="flex items-start gap-2">
                  <i class="fas fa-check-circle text-cyan-500 mt-1"></i>
                  <span class="text-gray-700 text-sm">{{ item }}</span>
                </li>
              </ul>
            </div>
          </article>
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

    <!-- 4. 我们的服务流程 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-24 h-0.5 bg-gray-800 mr-4"></span>
            我们的服务流程
            <span class="w-24 h-0.5 bg-gray-800 ml-4"></span>
          </h2>
        </div>

        <!-- 顶部3个步骤 -->
        <div class="grid grid-cols-3 gap-8 mb-8">
          <div v-for="step in topSteps" :key="step" class="text-center">
            <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded font-bold text-lg">
              {{ step }}
            </div>
          </div>
        </div>

        <!-- 流程图 -->
        <div class="relative mb-8">
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

    <!-- 5. 长沙悦安 匠心服务保障 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3">
            <span class="text-cyan-500">长沙悦安</span> | 匠心服务保障
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article v-for="guarantee in guarantees" :key="guarantee.title" class="text-center">
            <div class="mb-6">
              <img :src="guarantee.image" :alt="guarantee.title" class="w-full h-48 object-cover rounded-lg shadow-md">
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ guarantee.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ guarantee.desc }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 第一部分服务(4个)
const servicesPartOne = ref([
  {
    title: 'ICP许可证（内资）',
    desc: '以盈利为目的，向用户收取信息服务类的网站都需要办理ICP经营许可证。'
  },
  {
    title: 'ICP许可证（外资）',
    desc: '专业针对股权中含有外资的企业，外企所持有股份不超过50%。'
  },
  {
    title: 'EDI许可证（内资）',
    desc: '从事电子商务平台等在线交易的网站都会要办理EDI许可证。'
  },
  {
    title: 'EDI许可证（外资）',
    desc: '专业针对股权中含有外资的企业，股权比例最多可以达到100%。'
  }
])

// 第二部分服务(4个)
const servicesPartTwo = ref([
  {
    title: '网络文化经营—直播业务',
    desc: '视频直播、才艺直播等大部分直播类互联网文化活动的互联网文化服务提供者的市场准入资质。'
  },
  {
    title: '网络文化经营—音乐娱乐',
    desc: '音乐类网站、使用、下载等市场准入资质。'
  },
  {
    title: '网络文化经营—动漫',
    desc: '动画、漫画、网络表演等市场准入资质。'
  },
  {
    title: '网络文化经营—展览比赛',
    desc: '网络艺术品登载、展览等市场准入资质。'
  }
])

// 第三部分服务(4个)
const servicesPartThree = ref([
  {
    title: '呼叫中心许可证',
    desc: '分为全网呼叫中心许可证与地网呼叫中心许可证，包括了按照规模划分、按照技术划分、按照用途划分等等。'
  },
  {
    title: '算法备案',
    desc: '个性化推送、排序精选、检索过滤、调度决策、6类深度合成、大模型型算法等备案办理。'
  },
  {
    title: '广播电视节目制作经营许可',
    desc: '从事微电影、专题、专栏、综艺、动画片、广播剧具电视剧等广电节目的制作和节目版权交易、代理交易等。'
  },
  {
    title: '营业性演出许可',
    desc: '以营利为目的为公众举办的现场文艺表演活动，签约艺人、经纪业务等。'
  }
])

// 行业资质分类
const categories = ref([
  {
    title: '直播短视频',
    icon: 'fas fa-play-circle',
    image: new URL('../img/live_video.png', import.meta.url).href,
    items: [
      '增值电信业务经营许可证（ICP许可）（互联网信息服务业务）',
      '网络文化经营许可证',
      '广播电视节目制作经营许可证',
      '营业性演出许可证'
    ]
  },
  {
    title: '电商运营',
    icon: 'fas fa-shopping-cart',
    image: new URL('../img/ecommerce.png', import.meta.url).href,
    items: [
      '增值电信业务经营许可证EDI许可证(在线数据处理与交易处理业)',
      '呼叫中心许可证',
      '出版物经营许可证',
      '(根据运营产品内容为交易地的应测验)'
    ]
  },
  {
    title: '游戏运营',
    icon: 'fas fa-gamepad',
    image: new URL('../img/gaming_esports.png', import.meta.url).href,
    items: [
      'ICP许可证',
      '软件著作权',
      '游戏版号'
    ]
  },
  {
    title: '数字IP藏品',
    icon: 'fas fa-cube',
    image: new URL('../img/digital_ip_cryptocurrency.png', import.meta.url).href,
    items: [
      'ICP许可证',
      '拍卖经营批准证书',
      '艺术品经营单位备案',
      '区块链信息服务备案'
    ]
  }
])

// 顶部3个步骤
const topSteps = ref([
  '联系我们 沟通需求',
  '确定服务方案',
  '双方签订合同'
])

// 办理流程步骤
const processSteps = ref([
  {
    number: '01开始',
    topImage: new URL('../img/evaluation_analysis.png', import.meta.url).href,
    topTitle: '收集评估',
    topDesc: ['针对企业现状', '定制解决方案'],
    bottomImage: '',
    bottomTitle: '',
    bottomDesc: []
  },
  {
    number: '02',
    topImage: '',
    topTitle: '',
    topDesc:  [],
    bottomImage: new URL('../img/search_review.png', import.meta.url).href,
    bottomTitle: '整理材料',
    bottomDesc: ['专业分工', '团环操作', '杜绝泄密']
  },
  {
    number: '03',
    topImage: new URL('../img/magnifying_glass_inspection.png', import.meta.url).href,
    topTitle:'材料审核',
    topDesc: ['内部三级审核', '确保合规合理'],
    bottomImage: '',
    bottomTitle: '',
    bottomDesc: []
  },
  {
    number: '04',
    topImage: '',
    topTitle: '',
    topDesc: [],
    bottomImage: new URL('../img/meeting_presentation.png', import.meta.url).href,
    bottomTitle: '评审服务',
    bottomDesc: ['全程辅助企业', '线上和现场评审']
  },
  {
    number: '05完成',
    topImage: new URL('../img/approval_success.png', import.meta.url).href,
    topTitle: '整改及通过',
    topDesc: ['帮助过审整改', '并最终获得证书'],
    bottomImage: '',
    bottomTitle: '',
    bottomDesc: []
  }
])

// 服务保障
const guarantees = ref([
  {
    title: '资深顾问1对1服务',
    image: new URL('../img/senior_advisors_1_on_1_service.png', import.meta.url).href,
    desc: '量身定制申报方案，能力覆盖认定前规划、认定中合规咨询、认定后资质维护'
  },
  {
    title: '信息保密免骚扰',
    image: new URL('../img/information_confidentiality_free_from_harassment.png', import.meta.url).href,
    desc: '不可逆加密算法保障呵护您数据安全'
  },
  {
    title: '收费&服务全透明',
    image: new URL('../img/fee_and_service_transparency.png', import.meta.url).href,
    desc: '所有服务明码标价，无隐形收费办理进度一清二楚，后台实时可查'
  },
  {
    title: '一站式企业综合服务',
    image: new URL('../img/one_stop_enterprise_service.png', import.meta.url).href,
    desc: '一家公司全生命周期服务体还大家都有获得暨先生千万美金投资'
  }
])
</script>
