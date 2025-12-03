<template>
  <div class="min-h-screen">
    <!-- 1. 顶部横幅区 -->
    <header class="w-full relative py-20" style="background: linear-gradient(to bottom, #000000 0%, #1a1a2e 100%); background-image: url('https://source.unsplash.com/1920x600/?technology,network,ai'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-black/80"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <!-- <div class="text-center mb-8">
          <p class="text-cyan-400 text-sm mb-4">
            <i class="fas fa-check-circle mr-2"></i>
            长沙悦安获策源创投、雷军愿为资本、腾讯双百战略投资
          </p>
        </div> -->
        <div class="text-center mb-12">
          <h1 class="text-6xl font-bold text-cyan-400 mb-6 tracking-wider">
            算法备案办理中心
          </h1>
          <p class="text-white text-lg mb-2">加急链色通道 ｜ 全程辅导提升通过率 ｜ 按照务节点付费 ｜ 不通过全额退款</p>
        </div>
        <div class="text-center mb-12">
          <p class="text-cyan-400 text-xl mb-6">
            <span class="text-white">长沙悦安</span> 多年来为数十万家企业用心服务
          </p>
          <div class="flex justify-center gap-8 text-white text-sm">
            <div class="flex items-center">
              <i class="fas fa-check-circle text-cyan-400 mr-2"></i>
              <span>1对1服务</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-check-circle text-cyan-400 mr-2"></i>
              <span>合同发票齐备</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-check-circle text-cyan-400 mr-2"></i>
              <span>全程无隐性收费</span>
            </div>
          </div>
        </div>
        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
            立即咨询 >>
          </button>
          <a href="tel:400-872-8735" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            400-872-8735
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
            算法备案资质服务
            <span class="w-20 h-0.5 bg-gray-400 ml-4"></span>
          </h2>
          <p class="text-gray-600">资深顾问1对1服务，收费透明，高效办理。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- 服务卡片 1 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">算法备案</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              是指按照有关部门"规定，登记算算法信息及服务相关规数和法达类型、按不同理、应用场景等核心信息。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 2 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">大模型备案</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              是指由多种模型算数据或参数组成的深度学习模型等算法。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 3 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">大模型登记</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              是针对接入第三方已备案关大模型 API 接口，且无需简，无独立训练数据的生成式服务的管理措施。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 4 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">大模型搭建服务</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              我方提供基座模型输入、搭建训练环境、收集和预处理训练数据、微调训练、应用开发部署等服务。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- 服务卡片 5 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">深度合成—人脸算法</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              人脸生成、人脸替换、人物属性编辑、人脸操控、姿态模拟等对图像、视频内容中人脸等生物特征进行生成或编辑的技术。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 6 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">深度合成—图像算法</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              图像增强、图像修复等对图像、视频内容中非生物特征进行编辑的技术。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 7 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">文本、语音、音乐算法</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              篇章生成、文本风格转换、问答对话、语音转换、音乐生成、场景声编辑等、生成合成技术。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 8 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">深度合成—三维重建</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              三维重建等对虚拟场景进行生成或编辑的技术。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 服务卡片 9 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">个性化推送—算法</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              利用用户属性据或用户行为数据实信息个性化推送的算法。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 10 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">排序精选—算法</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              以客观因素或主观因素为依据、设置、调整网络信息内容排列顺序的算法。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 11 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">检索过滤—算法</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              按照输入内容或检索求匹配或筛选信息内容的算法，过滤排除按照规定进行信息内容并筛选出所需的算法。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 12 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">调度决策—算法</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              指目动辅助生成供需匹配，供需调节，路径规划等决策类集，或碍供快递度类算法。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:from-orange-600 hover:to-orange-700 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
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
          <h2 class="text-4xl font-bold text-gray-800 mb-3">大模型算法备案全覆盖</h2>
          <p class="text-gray-600">1v1全程指导，合规可靠，助力企业快速备案大模型</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- 大模型备案 -->
          <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <img src="../img/model_filing.png" alt="大模型备案" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">大模型备案</h3>
              <div class="mb-4">
                <p class="text-cyan-500 font-semibold mb-3">包含服务:</p>
                <div class="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>上线备案表</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>安全评估报告</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>拦截词集合</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>测试题集合</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>用户隐私政策</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>用户服务协议</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>标注规则</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>分类模型说明</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- 大模型登记 -->
          <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <img src="../img/model_registration.png" alt="大模型登记" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">大模型登记</h3>
              <div class="mb-4">
                <p class="text-cyan-500 font-semibold mb-3">包含服务:</p>
                <div class="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>登记备案申请表</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>内容安全管理制度</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>拦截关键词集合</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>拦截关键词集合</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>评估测试题集合</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>用户服务协议</span>
                  </div>
                  <div class="flex items-center col-span-2">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>用户隐私政策</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- 大模型搭建 -->
          <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <img src="../img/model_building.png" alt="大模型搭建" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">大模型搭建</h3>
              <div class="mb-4">
                <p class="text-cyan-500 font-semibold mb-3">包含服务:</p>
                <div class="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>基座模型输入</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>模型搭建及训练</span>
                  </div>
                  <div class="flex items-center col-span-2">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>收集和预处理训练数据</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>微调训练</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>内容安全审核</span>
                  </div>
                  <div class="flex items-center col-span-2">
                    <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    <span>应用端开发部署</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
            立即咨询 >>
          </button>
          <a href="tel:400-872-8735" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            400-872-8735
          </a>
        </div>
      </div>
    </section>

    <!-- 4. 算法备案办理资料 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-2">
            算法备案<span class="text-cyan-500">办理资料</span>
          </h2>
          <p class="text-gray-400 text-sm tracking-widest">ALGORITHM FILING/DOCUMENT</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧清单 -->
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <i class="fas fa-check-square text-cyan-400 text-3xl mt-1"></i>
              <div>
                <p class="text-gray-800 text-lg font-semibold">营业执照 <span class="text-gray-500 text-sm">(需要彩色扫描件)</span></p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <i class="fas fa-check-square text-cyan-400 text-3xl mt-1"></i>
              <div>
                <p class="text-gray-800 text-lg font-semibold">法人和算法安全负责人身份证 <span class="text-gray-500 text-sm">(需上传证件彩色照片)</span></p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <i class="fas fa-check-square text-cyan-400 text-3xl mt-1"></i>
              <div>
                <p class="text-gray-800 text-lg font-semibold">算法安全责任人工作证明</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <i class="fas fa-check-square text-cyan-400 text-3xl mt-1"></i>
              <div>
                <p class="text-gray-800 text-lg font-semibold">算法安全责任人承诺书</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <i class="fas fa-check-square text-cyan-400 text-3xl mt-1"></i>
              <div>
                <p class="text-gray-800 text-lg font-semibold">填写《落实算法安全主体责任基本情况》说明</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <i class="fas fa-check-square text-cyan-400 text-3xl mt-1"></i>
              <div>
                <p class="text-gray-800 text-lg font-semibold">填写《互联网信息服务算法安全自评估报告》</p>
              </div>
            </div>

            <div class="mt-8 p-6 bg-white rounded-lg shadow-md">
              <p class="text-cyan-500 font-bold text-lg mb-3">大模型:</p>
              <p class="text-gray-700 leading-relaxed">
                上线备案表、安全评估报告、拦截词集合、测试题集合、用户隐私政策、用户服务协议、标注规则、分类模型说明等
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
            立即咨询 >>
          </button>
          <a href="tel:400-872-8735" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            400-872-8735
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
            我们解决8大难题
            <span class="w-20 h-0.5 bg-gray-500 ml-4"></span>
          </h2>
        </div>

        <div class="relative mb-16" style="min-height: 400px;">
          <!-- 中心问号 -->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="w-32 h-32 bg-gradient-to-br from-cyan-600 to-blue-800 rounded-full flex items-center justify-center">
              <span class="text-white text-6xl font-bold">?</span>
            </div>
          </div>

          <!-- 8个问题点 -->
          <div v-for="(problem, index) in problems" :key="index" :style="getPositionStyle(index)" class="absolute">
            <div class="flex items-center gap-3">
              <span class="text-cyan-400 text-3xl font-bold">{{ index + 1 }}</span>
              <div class="bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded border-l-4 border-cyan-400">
                <p class="text-white text-base" v-html="problem"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-6 mt-24">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
            立即咨询 >>
          </button>
          <a href="tel:400-872-8735" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            400-872-8735
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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

// 计算每个问题的位置
const getPositionStyle = (index) => {
  const positions = [
    { top: '10%', left: '35%' },
    { top: '15%', right: '20%' },
    { top: '45%', right: '5%' },
    { bottom: '25%', right: '15%' },
    { bottom: '10%', left: '35%' },
    { bottom: '25%', left: '5%' },
    { top: '45%', left: '5%' },
    { top: '15%', left: '10%' }
  ]
  return positions[index]
}
</script>
