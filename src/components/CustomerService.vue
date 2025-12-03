<template>
  <div>
    <!-- 悬浮客服按钮 -->
    <div 
      v-if="!isChatOpen"
      class="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer"
      @click="openChat"
    >
      <div class="bg-white rounded-l-lg shadow-xl overflow-hidden">
        <!-- 客服头像 -->
        <div class="relative w-48 h-64 overflow-hidden">
          <img 
            src="../img/customer.png" 
            alt="客服" 
            class="w-full h-full object-cover"
          >
        </div>
        <!-- 联系方式卡片 -->
        <div class="p-4 bg-white border-t-4 border-cyan-400">
          <div class="flex items-center justify-center gap-2 text-gray-700 mb-3">
            <i class="fas fa-phone-alt text-gray-600"></i>
            <span class="font-bold">400-872-8735</span>
          </div>
          <button class="w-full py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full font-bold hover:from-orange-500 hover:to-orange-600 transition">
            免费咨询
          </button>
        </div>
      </div>
    </div>

    <!-- 聊天窗口 -->
    <div 
      v-if="isChatOpen"
      class="fixed right-4 bottom-4 w-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col"
      style="height: 600px;"
    >
      <!-- 聊天窗口头部 -->
      <div class="bg-gradient-to-r from-cyan-400 to-blue-400 p-4 rounded-t-lg flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i class="fas fa-comment-dots text-white text-xl"></i>
          <span class="text-white font-bold">您已退出对话,感谢您的垂询!</span>
        </div>
        <div class="flex items-center gap-2">
          <button @click="minimizeChat" class="text-white hover:bg-white/20 rounded p-1">
            <i class="fas fa-minus"></i>
          </button>
          <button class="text-white hover:bg-white/20 rounded p-1">
            <i class="fas fa-window-maximize"></i>
          </button>
          <button class="text-white hover:bg-white/20 rounded p-1">
            <i class="fas fa-cog"></i>
          </button>
          <button @click="closeChat" class="text-white hover:bg-white/20 rounded p-1">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <!-- 聊天消息区域 -->
      <div class="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div v-for="(message, index) in messages" :key="index" class="mb-4">
          <div class="flex items-start gap-2">
            <div class="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
              <i class="fas fa-user text-white text-sm"></i>
            </div>
            <div class="flex-1">
              <div class="text-xs text-gray-500 mb-1">{{ message.sender }} {{ message.time }}</div>
              <div class="bg-white rounded-lg p-3 shadow-sm">
                <p class="text-sm text-gray-800" v-html="message.content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 输入区域 -->
      <div class="border-t p-3">
        <div class="flex items-center gap-2 mb-2">
          <button class="text-gray-600 hover:text-gray-800">
            <i class="fas fa-image"></i>
          </button>
          <button class="text-gray-600 hover:text-gray-800">
            <i class="fas fa-folder"></i>
          </button>
          <button class="text-gray-600 hover:text-gray-800">
            <i class="fas fa-star"></i>
          </button>
        </div>
        <div class="flex gap-2">
          <input 
            v-model="inputMessage"
            type="text" 
            placeholder="请在此输入文字或粘贴聊QQ截图..."
            class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-400"
            @keyup.enter="sendMessage"
          >
          <button 
            @click="sendMessage"
            class="px-6 py-2 bg-cyan-400 text-white rounded hover:bg-cyan-500 transition"
          >
            发 送
          </button>
        </div>
        <div class="text-xs text-gray-400 mt-2 flex items-center gap-1">
          <i class="fas fa-info-circle"></i>
          <span>客服仅供电子网站商务信息提供</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isChatOpen = ref(false)
const inputMessage = ref('')
const messages = ref([
  {
    sender: '长沙悦安客服-小悦',
    time: '12-03 09:24:52',
    content: '【长沙悦安】致力于一站式企业综合服务，平台可以提供全国工商、财税、社保、知识产权、法律咨询，您也可以拨打全国免费热线<strong>400-872-8735</strong>。'
  },
  {
    sender: '长沙悦安客服-小悦',
    time: '12-03 09:24:52',
    content: '您好，我是长沙悦安的<strong class="text-orange-500">人工客服-小悦</strong>，请问您有什么需求?'
  },
  {
    sender: '长沙悦安客服-小悦',
    time: '12-03 09:26:09',
    content: '请问有什么可以帮助您的吗？'
  }
])

const openChat = () => {
  isChatOpen.value = true
}

const closeChat = () => {
  isChatOpen.value = false
}

const minimizeChat = () => {
  isChatOpen.value = false
}

const sendMessage = () => {
  if (inputMessage.value.trim()) {
    messages.value.push({
      sender: '我',
      time: new Date().toLocaleString('zh-CN', { 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }),
      content: inputMessage.value
    })
    inputMessage.value = ''
    
    // 模拟客服回复
    setTimeout(() => {
      messages.value.push({
        sender: '长沙悦安客服-小悦',
        time: new Date().toLocaleString('zh-CN', { 
          month: '2-digit', 
          day: '2-digit', 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit' 
        }),
        content: '感谢您的咨询，我们的客服人员会尽快为您解答。您也可以拨打热线 <strong>400-872-8735</strong> 获取即时帮助。'
      })
    }, 1000)
  }
}
</script>
