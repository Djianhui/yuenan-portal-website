<template>
  <footer class="w-full h-[69px] relative overflow-hidden">
    <img src="../img/footer.png" alt="城市夜景" class="absolute inset-0 w-full h-full object-cover">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative z-10 h-full flex items-center justify-center">
      <h2 class="text-2xl font-bold text-white" style="font-family: 'KaiTi', serif;">© 2025 {{ t('common.fullCompany') }}</h2>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
