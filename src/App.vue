<template>
  <div class="font-sans antialiased">
    <!-- 顶部导航栏 -->
    <Navbar />
    
    <!-- 路由视图 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    
    <!-- 底部 -->
    <Footer />
    
    <!-- 在线客服 -->
    <CustomerService />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CustomerService from './components/CustomerService.vue'
</script>

<style>
/* 页面切换过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
