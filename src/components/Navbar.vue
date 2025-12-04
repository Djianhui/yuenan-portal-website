<template>
  <nav class="w-full bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- 左侧 Logo -->
        <div class="flex-shrink-0 mr-6 lg:mr-8 xl:mr-12">
          <router-link to="/" class="flex items-center">
            <i class="fas fa-shield-alt text-blue-600 text-3xl mr-2"></i>
            <span class="text-2xl font-bold text-gray-800">长沙<span class="text-blue-600">悦安</span></span>
          </router-link>
        </div>
        
        <!-- 中间导航链接 -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative"
            :class="{ 'text-blue-600': $route.path === '/' }"
          >
            {{ t('nav.home') }}
            <span class="absolute -top-1 -right-2 bg-red-600 text-white text-[7px] px-1 rounded" style="font-size: 7px;">HOT</span>
          </router-link>
          <router-link 
            to="/specialized-enterprise" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative"
            :class="{ 'text-blue-600': $route.path === '/specialized-enterprise' }"
          >
            {{ t('nav.specialized') }}
            <span class="absolute -top-1 -right-2 bg-red-600 text-white text-[7px] px-1 rounded" style="font-size: 7px;">HOT</span>
          </router-link>
          <router-link 
            to="/algorithm-filing" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative"
            :class="{ 'text-blue-600': $route.path === '/algorithm-filing' }"
          >
            {{ t('nav.algorithm') }}
            <span class="absolute -top-1 -right-2 bg-red-600 text-white text-[7px] px-1 rounded" style="font-size: 7px;">HOT</span>
          </router-link>
          <router-link 
            to="/new-tech-product" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            :class="{ 'text-blue-600': $route.path === '/new-tech-product' }"
          >
            {{ t('nav.newTech') }}
          </router-link>
          <router-link 
            to="/double-soft-evaluation" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            :class="{ 'text-blue-600': $route.path === '/double-soft-evaluation' }"
          >
            {{ t('nav.doubleSoft') }}
          </router-link>
          <router-link 
            to="/qualification-handling" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            :class="{ 'text-blue-600': $route.path === '/qualification-handling' }"
          >
            {{ t('nav.qualification') }}
          </router-link>
        </div>
        
        <!-- 右侧咨询电话和按钮 -->
        <div class="flex items-center space-x-2">
          
          <!-- 免费咨询按钮 -->
          <button class="px-5 py-2 bg-red-500 text-white text-sm font-semibold rounded shadow-sm hover:bg-red-600 hover:shadow transition-all duration-300 whitespace-nowrap">
            {{ t('common.consult') }}
          </button>
          
          <!-- 移动端菜单按钮 -->
          <button class="md:hidden text-gray-700 hover:text-blue-600" @click="toggleMobileMenu">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      
      <!-- 移动端菜单 -->
      <div v-show="mobileMenuOpen" class="md:hidden pb-4">
        <div class="flex flex-col space-y-3">
          <router-link 
            to="/" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 flex items-center"
            @click="closeMobileMenu"
          >
            高新企业认定
            <span class="ml-2 bg-red-600 text-white text-[10px] px-1 rounded" style="font-size: 10px;">HOT</span>
          </router-link>
          <router-link 
            to="/specialized-enterprise" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 flex items-center"
            @click="closeMobileMenu"
          >
            专精特新认定
            <span class="ml-2 bg-red-600 text-white text-[10px] px-1 rounded" style="font-size: 10px;">HOT</span>
          </router-link>
          <router-link 
            to="/algorithm-filing" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 flex items-center"
            @click="closeMobileMenu"
          >
            算法备案
            <span class="ml-2 bg-red-600 text-white text-[10px] px-1 rounded" style="font-size: 10px;">HOT</span>
          </router-link>
          <router-link 
            to="/new-tech-product" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
            @click="closeMobileMenu"
          >
            新技术新产品
          </router-link>
          <router-link 
            to="/double-soft-evaluation" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
            @click="closeMobileMenu"
          >
            双软评估
          </router-link>
          <router-link 
            to="/qualification-handling" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
            @click="closeMobileMenu"
          >
            企业资质办理
          </router-link>
          <div class="flex items-center py-2 border-t border-gray-200 mt-2">
            <i class="fas fa-phone-alt text-blue-600 mr-2"></i>
            <a href="tel:400-872-8735" class="text-blue-600 font-bold text-lg">400-872-8735</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
