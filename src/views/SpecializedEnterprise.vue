<template>
  <div class="min-h-screen">
    <!-- 1. 顶部横幅区 -->
    <header class="w-full relative py-20" style="background: linear-gradient(to bottom, #0a1929 0%, #1a2f4a 100%); background-image: url('https://source.unsplash.com/1920x600/?technology,network,digital'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/80"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <!-- <div class="text-center mb-4">
          <p class="text-white text-sm mb-2">
            <i class="fas fa-rocket mr-2"></i>
            长沙悦安 — 获策源创投、雷军先生战略投资
          </p>
        </div> -->
        <div class="text-center mb-12">
          <h1 class="text-6xl font-bold text-white mb-4">
            专精特新<span class="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg ml-2">认定</span>
          </h1>
          <p class="text-white text-xl">全程代办保障通过率，不成功退全款</p>
        </div>
        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-red-600 transition-all duration-300">
            立即咨询 >>
          </button>
          <a href="tel:400-872-8735" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            400-872-8735
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
            专精特新相关服务
            <span class="w-20 h-0.5 bg-gray-400 ml-4"></span>
          </h2>
          <p class="text-gray-600">长沙悦安多对1服务，全程代办，不通过退全款</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- 服务卡片 1 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">创新型中小认定</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              创新型中小【国晴】认定服务，全程代办，不通过退全款。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded hover:from-orange-600 hover:to-red-600 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 2 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">专精特新-中小认定</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              专精特新-中小【国晴】认定服务，快速回集加分项，全程代办，不通过退全款。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded hover:from-orange-600 hover:to-red-600 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 3 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">专精特新-小巨人</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              专精特新-"小巨人"【国晴】认定，快速回集加分项，全程代办。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded hover:from-orange-600 hover:to-red-600 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 4 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">专精特新-疑难</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              专业解决大型企业申报困难，助力企业进军北交所。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded hover:from-orange-600 hover:to-red-600 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 服务卡片 5 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">专精特新补贴</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              全程协助企业补贴申请，有效提升企业补贴申请通过率，享受多重补贴。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded hover:from-orange-600 hover:to-red-600 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 6 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">专精特新复审</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              专精特新有效期3年满后，帮助企业通过复审各项要求，顺利延续专精特新资质。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded hover:from-orange-600 hover:to-red-600 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 7 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">高新企业认定</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              认证不通过退全款，用专业的服务，多重的保障，让客户顺利助力客户完成企业。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded hover:from-orange-600 hover:to-red-600 transition">
                立即咨询
              </button>
              <button class="flex-1 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
                400-872-8735
              </button>
            </div>
          </article>

          <!-- 服务卡片 8 -->
          <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">其他相关服务</h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              全套三ISO质量管理体系认定服务包专利、著作权代办等项目与易服务合集1报告服务。
            </p>
            <div class="flex gap-2">
              <button class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded hover:from-orange-600 hover:to-red-600 transition">
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

    <!-- 3. 专精特新-申请条件 -->
    <section class="py-16 relative" style="background: linear-gradient(to bottom, #1a2332 0%, #2d3e50 100%); background-image: url('https://source.unsplash.com/1920x800/?business,technology'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-gray-900/85"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-3 flex items-center justify-center">
            <span class="w-20 h-0.5 bg-gray-500 mr-4"></span>
            专精特新-申请条件
            <span class="w-20 h-0.5 bg-gray-500 ml-4"></span>
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <!-- 创新型中小企业 -->
          <div>
            <div class="bg-cyan-400 text-white text-center py-4 text-2xl font-bold mb-6 relative">
              创新型中小企业
              <i class="fas fa-chevron-right absolute right-4 top-1/2 transform -translate-y-1/2"></i>
            </div>
            <div class="space-y-3">
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">主导产品所属领域情况</div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">主营业务占比与增长率</div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">主导产品所属领域情况</div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">资产负债率</div>
            </div>
          </div>

          <!-- 专精特新 中小企业 -->
          <div>
            <div class="bg-cyan-400 text-white text-center py-4 text-2xl font-bold mb-6 relative">
              "专精特新" 中小企业
              <i class="fas fa-chevron-right absolute right-4 top-1/2 transform -translate-y-1/2"></i>
            </div>
            <div class="space-y-3">
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">主导产品所属领域情况</div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">主营业务占比与增长率</div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">主导产品所属领域情况</div>
              <div class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">资产负债率</div>
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">数字化水平</div>
              </div>
              <div class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">质量管理体系认证</div>
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">净利润率</div>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm leading-relaxed">
                主营部门该合并地域产业状况和<br/>中小企业发展实际自主设定
              </div>
            </div>
          </div>

          <!-- 专精特新 小巨人 企业 -->
          <div>
            <div class="bg-cyan-400 text-white text-center py-4 text-2xl font-bold mb-6 relative">
              专精特新 "小巨人" 企业
              <i class="fas fa-chevron-right absolute right-4 top-1/2 transform -translate-y-1/2"></i>
            </div>
            <div class="space-y-3">
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">主导产品所属领域情况</div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">主营业务占比与增长率</div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">主导产品所属领域情况</div>
              <div class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">资产负债率</div>
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">数字化水平</div>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center">质量管理体系认证</div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm leading-relaxed">
                主营产品在全国市场与有率并<br/>拥有自有竞争优势的自主品牌
              </div>
            </div>
          </div>
        </div>

        <!-- 四个特征 -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div class="flex items-start gap-4">
            <div class="bg-cyan-400 text-white px-6 py-8 text-3xl font-bold flex-shrink-0">
              专业化
            </div>
            <div class="flex-1 space-y-2">
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">获科技奖励情况</div>
              <div class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">知识产权数</div>
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">研发机构建设</div>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">新增股权融资情况</div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">研发费用占比</div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">高新技术企业获评情况</div>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-gradient-to-b from-orange-500 to-red-500 text-white px-6 py-8 text-3xl font-bold flex-shrink-0">
              精细化
            </div>
            <div class="flex-1 space-y-2">
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">获科技奖励情况</div>
              <div class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">知识产权数</div>
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">研发机构建设</div>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">新增股权融资情况</div>
              <div class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">研发费用占比</div>
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">研发人员占比</div>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">"创客中国" 获奖情况</div>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-cyan-400 text-white px-6 py-8 text-3xl font-bold flex-shrink-0">
              特色化
            </div>
            <div class="flex-1 space-y-2">
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">获科技奖励情况</div>
              <div class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">知识产权数</div>
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">研发机构建设</div>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">新增股权融资情况</div>
              <div class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">研发费用占比</div>
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">研发人员占比</div>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">"创客中国" 获奖情况</div>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-gradient-to-b from-orange-500 to-red-500 text-white px-6 py-8 text-3xl font-bold flex-shrink-0">
              新颖化
            </div>
            <div class="flex-1 space-y-2">
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">获科技奖励情况</div>
              <div class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">知识产权数</div>
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">研发机构建设</div>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">新增股权融资情况</div>
              <div class="flex gap-2">
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">研发费用占比</div>
                <div class="flex-1 bg-gray-800/50 border border-gray-700 text-white px-3 py-2 text-center text-xs">研发人员占比</div>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 text-white px-4 py-3 text-center text-sm">"创客中国" 获奖情况</div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-red-600 transition-all duration-300">
            立即咨询 >>
          </button>
          <a href="tel:400-872-8735" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            400-872-8735
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
            专精特新值得尽早认定
            <span class="w-20 h-0.5 bg-gray-400 ml-4"></span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- 资金支持 -->
          <article class="flex items-start gap-4">
            <div class="bg-gray-100 p-4 rounded-lg flex-shrink-0">
              <i class="fas fa-coins text-cyan-500 text-5xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">资金支持</h3>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• 专项资金支持100亿元以上奖补资金，支持</li>
                <li>千余家国家级专精特新"小巨人"企业及</li>
                <li>低息贷款。</li>
              </ul>
            </div>
          </article>

          <!-- 政策导向 -->
          <article class="flex items-start gap-4">
            <div class="bg-gray-100 p-4 rounded-lg flex-shrink-0">
              <i class="fas fa-file-contract text-cyan-500 text-5xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">政策导向</h3>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• 数字化政透开放税务人气"专精特新"企业</li>
                <li>培育体系，组织开展能能优进新区活动;</li>
                <li>• 开展中小企业跨领域合活动。</li>
              </ul>
            </div>
          </article>

          <!-- 品牌市场 -->
          <article class="flex items-start gap-4">
            <div class="bg-gray-100 p-4 rounded-lg flex-shrink-0">
              <i class="fas fa-trophy text-cyan-500 text-5xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">品牌市场</h3>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• 确立组分市场地位，各大媒体会设立 "专精</li>
                <li>特新" 专场，安排产品发布，企业资源，技</li>
                <li>术对接等系列活动。</li>
              </ul>
            </div>
          </article>

          <!-- 人才支持 -->
          <article class="flex items-start gap-4">
            <div class="bg-gray-100 p-4 rounded-lg flex-shrink-0">
              <i class="fas fa-handshake text-cyan-500 text-5xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">人才支持</h3>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• 开展 "专精特新" 中小企业师资回招</li>
                <li>聘、直播带岗等活动;</li>
                <li>• 开展领军人才 "专精特新" 等培训。</li>
              </ul>
            </div>
          </article>

          <!-- 北交所上市 -->
          <article class="flex items-start gap-4">
            <div class="bg-gray-100 p-4 rounded-lg flex-shrink-0">
              <i class="fas fa-university text-cyan-500 text-5xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">北交所上市</h3>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• 北交所上市主力企业，上市辅导。</li>
              </ul>
            </div>
          </article>

          <!-- 补贴奖励 -->
          <article class="flex items-start gap-4">
            <div class="bg-gray-100 p-4 rounded-lg flex-shrink-0">
              <i class="fas fa-gift text-cyan-500 text-5xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">补贴奖励</h3>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• 地区政府给予 "专精特新" 企业每年度</li>
                <li>10万元财政补贴;</li>
                <li>• 给予新申请企业，一次性10W-50W奖励。</li>
              </ul>
            </div>
          </article>
        </div>

        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-red-600 transition-all duration-300">
            立即咨询 >>
          </button>
          <a href="tel:400-872-8735" class="px-12 py-4 bg-cyan-400 text-white text-lg font-bold rounded hover:bg-cyan-500 transition-all duration-300 flex items-center">
            <i class="fas fa-phone-alt mr-2"></i>
            400-872-8735
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
            我们将为您解决8大难题
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
              <div class="text-white text-3xl font-bold">专精特新认证</div>
            </div>

            <!-- 四个标签 -->
            <div class="absolute top-12 left-1/2 transform -translate-x-1/2 text-cyan-400 text-lg font-bold">知识产权</div>
            <div class="absolute bottom-20 left-12 text-cyan-400 text-lg font-bold">奖励补贴</div>
            <div class="absolute top-1/2 left-8 transform -translate-y-1/2 text-cyan-400 text-lg font-bold">加分项</div>
            <div class="absolute top-1/2 right-8 transform -translate-y-1/2 text-cyan-400 text-lg font-bold">提前培育</div>

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
            <div class="flex items-center gap-4" v-for="(item, index) in problems" :key="index">
              <span class="text-cyan-400 text-4xl font-bold" style="min-width: 50px;">{{ index + 1 }}</span>
              <span class="text-white text-xl">{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-6">
          <button class="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded hover:from-orange-600 hover:to-red-600 transition-all duration-300">
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
  '企业核心知识产权体系搭建',
  '核心专利和著作权满足数量要求',
  'ISO认证、3A认证加急解决',
  '企业加分项指标尽快完善',
  '认证失败后快速申请通过',
  '企业布局"小巨人"认证具体方案',
  '高效培育成为专精特新企业',
  '解决大型企业的申报困境'
])
</script>
