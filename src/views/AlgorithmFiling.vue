<template>
  <div class="min-h-screen">
    <!-- 1. 顶部横幅区 -->
    <header class="w-full relative py-20" style="background: linear-gradient(to bottom, #000000 0%, #1a1a2e 100%); background-image: url('https://source.unsplash.com/1920x600/?technology,network,ai'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-black/80"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h1 class="text-6xl font-bold text-cyan-400 mb-6 tracking-wider">
            {{ t('algorithm.banner.title') }}
          </h1>
          <p class="text-white text-lg mb-2">{{ t('algorithm.banner.subtitle') }}</p>
        </div>
        <div class="text-center mb-12">
          <p class="text-cyan-400 text-xl mb-6">
            <span class="text-white">{{ t('common.company') }}</span> {{ t('algorithm.banner.companyDesc') }}
          </p>
          <div class="flex justify-center gap-8 text-white text-sm">
            <div class="flex items-center" v-for="(feature, index) in currentFeatures" :key="index">
              <i class="fas fa-check-circle text-cyan-400 mr-2"></i>
              <span>{{ feature }}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold rounded hover:from-orange-600 hover:from-orange-700 transition-all duration-300">
            {{ t('algorithm.banner.consultBtn') }}
          </button>
          <a :href="`tel:${t('algorithm.banner.phone')}`" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            {{ t('algorithm.banner.phone') }}
          </a>
        </div>
      </div>
    </header>

    <!-- 2. 算法备案资质服务 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center">
            <span class="w-20 h-0.5 bg-gray-400 mr-4"></span>
            {{ t('algorithm.services.title') }}
            <span class="w-20 h-0.5 bg-gray-400 ml-4"></span>
          </h2>
          <p class="text-gray-600">{{ t('algorithm.services.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- 服务卡片 -->
          <article v-for="(service, index) in currentServices.slice(0, 4)" :key="index" class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              {{ service.desc }}
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                {{ t('algorithm.services.consultBtn') }}
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                {{ t('algorithm.services.phone') }}
              </button>
            </div>
          </article>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- 服务卡片 -->
          <article v-for="(service, index) in currentServices.slice(4, 8)" :key="index + 4" class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              {{ service.desc }}
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                {{ t('algorithm.services.consultBtn') }}
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                {{ t('algorithm.services.phone') }}
              </button>
            </div>
          </article>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 服务卡片 -->
          <article v-for="(service, index) in currentServices.slice(8, 12)" :key="index + 8" class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              {{ service.desc }}
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                {{ t('algorithm.services.consultBtn') }}
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                {{ t('algorithm.services.phone') }}
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 3. 大模型算法备案全覆盖 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-3">{{ t('algorithm.coverage.title') }}</h2>
          <p class="text-gray-600">{{ t('algorithm.coverage.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- 大模型备案卡片 -->
          <article v-for="(card, cardIndex) in currentCoverageCards" :key="cardIndex" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <img v-if="cardIndex === 0" src="../img/model_filing.png" :alt="card.title" class="w-full h-48 object-cover">
            <img v-else-if="cardIndex === 1" src="../img/model_registration.png" :alt="card.title" class="w-full h-48 object-cover">
            <img v-else src="../img/model_building.png" :alt="card.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ card.title }}</h3>
              <div class="mb-4">
                <p class="text-cyan-500 font-semibold mb-3">{{ t('algorithm.coverage.includesLabel') }}</p>
                <div class="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div v-for="(item, itemIndex) in card.items" :key="itemIndex" :class="['flex items-center', itemIndex >= card.items.length - 2 && card.items.length % 2 !== 0 && itemIndex === card.items.length - 1 ? 'col-span-2' : '']">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
            {{ t('algorithm.coverage.consultBtn') }}
          </button>
          <a :href="`tel:${t('algorithm.banner.phone')}`" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            {{ t('algorithm.banner.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 4. 算法备案办理资料 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-2">
            {{ t('algorithm.documents.title') }}<span class="text-cyan-500">{{ t('algorithm.documents.titleHighlight') }}</span>
          </h2>
          <p class="text-gray-400 text-sm tracking-widest">{{ t('algorithm.documents.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧清单 -->
          <div class="space-y-4">
            <div v-for="(item, index) in currentChecklistItems" :key="index" class="flex items-start gap-4">
              <i class="fas fa-check-square text-cyan-400 text-3xl mt-1"></i>
              <div>
                <p class="text-gray-800 text-lg font-semibold">{{ item.title }} <span v-if="item.note" class="text-gray-500 text-sm">{{ item.note }}</span></p>
              </div>
            </div>

            <div class="mt-8 p-6 bg-white rounded-lg shadow-md">
              <p class="text-cyan-500 font-bold text-lg mb-3">{{ t('algorithm.documents.modelLabel') }}</p>
              <p class="text-gray-700 leading-relaxed">
                {{ t('algorithm.documents.modelDesc') }}
              </p>
            </div>
          </div>

          <!-- 右侧图片区域 -->
          <div class="relative">
            <div class="absolute -top-8 -right-8 w-full h-full border-4 border-cyan-400 rounded-lg"></div>
            <img src="../img/algorithm_filing.png" alt="算法备案资料" class="relative z-10 w-full rounded-lg shadow-xl">
            <div class="absolute top-4 right-4 bg-cyan-400 text-white px-6 py-2 text-xl font-bold z-20">
              ALGORITHM FILING/DOCUMENT
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-6 mt-12">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
            {{ t('algorithm.coverage.consultBtn') }}
          </button>
          <a :href="`tel:${t('algorithm.banner.phone')}`" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            {{ t('algorithm.banner.phone') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 5. 我们解决8大难题 -->
    <section class="py-16 relative" style="background: linear-gradient(to bottom, #000000 0%, #1a1a2e 100%); background-image: url('https://source.unsplash.com/1920x800/?technology,network'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-black/80"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-3 flex items-center justify-center">
            <span class="w-20 h-0.5 bg-gray-500 mr-4"></span>
            {{ t('algorithm.problems.title') }}
            <span class="w-20 h-0.5 bg-gray-500 ml-4"></span>
          </h2>
        </div>

        <div class="relative mb-16" style="min-height: 400px;">
          <!-- 重新设计：两列网格布局 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="(problem, index) in currentProblems" :key="index" class="flex items-start gap-4 bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-cyan-400 hover:bg-gray-900/70 transition-all duration-300">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-800 rounded-full flex items-center justify-center">
                <span class="text-white text-xl font-bold">{{ index + 1 }}</span>
              </div>
              <div class="flex-1">
                <p class="text-white text-base leading-relaxed" v-html="problem"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-6 mt-24">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
            {{ t('algorithm.coverage.consultBtn') }}
          </button>
          <a :href="`tel:${t('algorithm.banner.phone')}`" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            {{ t('algorithm.banner.phone') }}
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

// Banner features 数据
const currentFeatures = computed(() => {
  const data = messages.value[locale.value]?.algorithm?.banner?.features
  return Array.isArray(data) ? data : []
})

// 服务卡片数据
const services = ref([
  {
    title: '算法备案',
    desc: '是指按照有关部门"规定，登记算算法信息及服务相关规数和法达类型、按不同理、应用场景等核心信息。'
  },
  {
    title: '大模型备案',
    desc: '是指由多种模型算数据或参数组成的深度学习模型等算法。'
  },
  {
    title: '大模型登记',
    desc: '是针对接入第三方已备案关大模型 API 接口，且无需简，无独立训练数据的生成式服务的管理措施。'
  },
  {
    title: '大模型搭建服务',
    desc: '我方提供基座模型输入、搭建训练环境、收集和预处理训练数据、微调训练、应用开发部署等服务。'
  },
  {
    title: '深度合成—人脸算法',
    desc: '人脸生成、人脸替换、人物属性编辑、人脸操控、姿态模拟等对图像、视频内容中人脸等生物特征进行生成或编辑的技术。'
  },
  {
    title: '深度合成—图像算法',
    desc: '图像增强、图像修复等对图像、视频内容中非生物特征进行编辑的技术。'
  },
  {
    title: '文本、语音、音乐算法',
    desc: '篇章生成、文本风格转换、问答对话、语音转换、音乐生成、场景声编辑等、生成合成技术。'
  },
  {
    title: '深度合成—三维重建',
    desc: '三维重建等对虚拟场景进行生成或编辑的技术。'
  },
  {
    title: '个性化推送—算法',
    desc: '利用用户属性据或用户行为数据实信息个性化推送的算法。'
  },
  {
    title: '排序精选—算法',
    desc: '以客观因素或主观因素为依据、设置、调整网络信息内容排列顺序的算法。'
  },
  {
    title: '检索过滤—算法',
    desc: '按照输入内容或检索求匹配或筛选信息内容的算法，过滤排除按照规定进行信息内容并筛选出所需的算法。'
  },
  {
    title: '调度决策—算法',
    desc: '指目动辅助生成供需匹配，供需调节，路径规划等决策类集，或碍供快递度类算法。'
  }
])

const currentServices = computed(() => {
  if (locale.value === 'en-US') {
    return [
      {
        title: 'Algorithm Filing',
        desc: 'Register algorithm information and service-related regulations according to relevant department regulations, including different types, principles, application scenarios and other core information.'
      },
      {
        title: 'Large Model Filing',
        desc: 'Refers to deep learning models and other algorithms composed of multiple model data or parameters.'
      },
      {
        title: 'Large Model Registration',
        desc: 'A management measure for generative services that access third-party filed large model API interfaces without independent training data.'
      },
      {
        title: 'Large Model Building Service',
        desc: 'We provide base model input, training environment setup, training data collection and preprocessing, fine-tuning training, application development and deployment services.'
      },
      {
        title: 'Deep Synthesis - Face Algorithm',
        desc: 'Technologies for generating or editing biological features such as faces in images and videos, including face generation, face replacement, character attribute editing, face manipulation, and pose simulation.'
      },
      {
        title: 'Deep Synthesis - Image Algorithm',
        desc: 'Technologies for editing non-biological features in images and videos, such as image enhancement and image restoration.'
      },
      {
        title: 'Text, Voice, Music Algorithm',
        desc: 'Generation and synthesis technologies such as article generation, text style conversion, question and answer dialogue, voice conversion, music generation, scene sound editing, etc.'
      },
      {
        title: 'Deep Synthesis - 3D Reconstruction',
        desc: 'Technologies for generating or editing virtual scenes such as 3D reconstruction.'
      },
      {
        title: 'Personalized Push - Algorithm',
        desc: 'Algorithms that use user attributes or user behavior data to implement personalized information push.'
      },
      {
        title: 'Sorting Selection - Algorithm',
        desc: 'Algorithms that set and adjust the order of network information content based on objective or subjective factors.'
      },
      {
        title: 'Search Filtering - Algorithm',
        desc: 'Algorithms that match or filter information content according to input content or search requirements, filter and exclude information content according to regulations and select the required algorithms.'
      },
      {
        title: 'Scheduling Decision - Algorithm',
        desc: 'Algorithms that automatically assist in generating supply and demand matching, supply and demand adjustment, path planning and other decision-making, or provide express delivery algorithms.'
      }
    ]
  }
  return services.value
})

// 大模型备案卡片数据
const coverageCards = ref([
  {
    title: '大模型备案',
    items: [
      '上线备案表',
      '安全评估报告',
      '拦截词集合',
      '测试题集合',
      '用户隐私政策',
      '用户服务协议',
      '标注规则',
      '分类模型说明'
    ]
  },
  {
    title: '大模型登记',
    items: [
      '登记备案申请表',
      '内容安全管理制度',
      '拦截关键词集合',
      '拦截关键词集合',
      '评估测试题集合',
      '用户服务协议',
      '用户隐私政策'
    ]
  },
  {
    title: '大模型搭建',
    items: [
      '基座模型输入',
      '模型搭建及训练',
      '收集和预处理训练数据',
      '微调训练',
      '内容安全审核',
      '应用端开发部署'
    ]
  }
])

const currentCoverageCards = computed(() => {
  if (locale.value === 'en-US') {
    return [
      {
        title: 'Large Model Filing',
        items: [
          'Online Filing Form',
          'Security Assessment Report',
          'Interception Word Collection',
          'Test Question Collection',
          'User Privacy Policy',
          'User Service Agreement',
          'Annotation Rules',
          'Classification Model Description'
        ]
      },
      {
        title: 'Large Model Registration',
        items: [
          'Registration Filing Application Form',
          'Content Security Management System',
          'Interception Keyword Collection',
          'Interception Keyword Collection',
          'Evaluation Test Question Collection',
          'User Service Agreement',
          'User Privacy Policy'
        ]
      },
      {
        title: 'Large Model Building',
        items: [
          'Base Model Input',
          'Model Building and Training',
          'Training Data Collection and Preprocessing',
          'Fine-tuning Training',
          'Content Security Review',
          'Application Development and Deployment'
        ]
      }
    ]
  }
  return coverageCards.value
})

// 办理资料清单
const checklistItems = ref([
  {
    title: '营业执照',
    note: '(需要彩色扫描件)'
  },
  {
    title: '法人和算法安全负责人身份证',
    note: '(需上传证件彩色照片)'
  },
  {
    title: '算法安全责任人工作证明',
    note: ''
  },
  {
    title: '算法安全责任人承诺书',
    note: ''
  },
  {
    title: '填写《落实算法安全主体责任基本情况》说明',
    note: ''
  },
  {
    title: '填写《互联网信息服务算法安全自评估报告》',
    note: ''
  }
])

const currentChecklistItems = computed(() => {
  if (locale.value === 'en-US') {
    return [
      {
        title: 'Business License',
        note: '(Color scanned copy required)'
      },
      {
        title: 'Legal Person and Algorithm Security Officer ID',
        note: '(Color photo of certificate required)'
      },
      {
        title: 'Algorithm Security Officer Work Certificate',
        note: ''
      },
      {
        title: 'Algorithm Security Officer Commitment Letter',
        note: ''
      },
      {
        title: 'Fill in "Implementation of Algorithm Security Main Responsibility Basic Situation" Statement',
        note: ''
      },
      {
        title: 'Fill in "Internet Information Service Algorithm Security Self-Assessment Report"',
        note: ''
      }
    ]
  }
  return checklistItems.value
})

// 8大难题列表
const problems = ref([
  '提供<span class="text-cyan-400">算法备案</span>服务',
  '多级分工，<span class="text-cyan-400">闭环申报，杜绝泄密</span>',
  '<span class="text-cyan-400">加急绿色通道，快速获得备案号</span>',
  '<span class="text-cyan-400">全程辅导，填报算法备案所需材料</span>',
  '协助企业整改，<span class="text-cyan-400">快速合规</span>申请备案',
  '<span class="text-cyan-400">价格透明，服务全程无隐性</span>收费',
  '专业顾问助企业<span class="text-cyan-400">高效申办，一次性通过率高</span>',
  '<span class="text-cyan-400">行业资质全覆盖</span>，一站式企业服务'
])

const currentProblems = computed(() => {
  if (locale.value === 'en-US') {
    return [
      'Provide <span class="text-cyan-400">algorithm filing</span> services',
      'Multi-level division of labor, <span class="text-cyan-400">closed-loop reporting, no leaks</span>',
      '<span class="text-cyan-400">Fast-track green channel, quick filing number</span>',
      '<span class="text-cyan-400">Full guidance, fill in required materials for algorithm filing</span>',
      'Assist enterprises in rectification, <span class="text-cyan-400">quick compliance</span> filing application',
      '<span class="text-cyan-400">Transparent pricing, no hidden fees</span> throughout service',
      'Professional consultants help enterprises <span class="text-cyan-400">efficiently apply, high one-time pass rate</span>',
      '<span class="text-cyan-400">Full industry qualification coverage</span>, one-stop enterprise service'
    ]
  }
  return problems.value
})
</script>
