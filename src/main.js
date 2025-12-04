import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import i18n from './locales/index'

// 导入页面组件
import HighTechEnterprise from './views/HighTechEnterprise.vue'
import SpecializedEnterprise from './views/SpecializedEnterprise.vue'
import AlgorithmFiling from './views/AlgorithmFiling.vue'
import NewTechProduct from './views/NewTechProduct.vue'
import DoubleSoftEvaluation from './views/DoubleSoftEvaluation.vue'
import QualificationHandling from './views/QualificationHandling.vue'

// 配置路由
const routes = [
  {
    path: '/',
    name: 'HighTechEnterprise',
    component: HighTechEnterprise,
    meta: { titleKey: 'nav.home' }
  },
  {
    path: '/specialized-enterprise',
    name: 'SpecializedEnterprise',
    component: SpecializedEnterprise,
    meta: { titleKey: 'nav.specialized' }
  },
  {
    path: '/algorithm-filing',
    name: 'AlgorithmFiling',
    component: AlgorithmFiling,
    meta: { titleKey: 'nav.algorithm' }
  },
  {
    path: '/new-tech-product',
    name: 'NewTechProduct',
    component: NewTechProduct,
    meta: { titleKey: 'nav.newTech' }
  },
  {
    path: '/double-soft-evaluation',
    name: 'DoubleSoftEvaluation',
    component: DoubleSoftEvaluation,
    meta: { titleKey: 'nav.doubleSoft' }
  },
  {
    path: '/qualification-handling',
    name: 'QualificationHandling',
    component: QualificationHandling,
    meta: { titleKey: 'nav.qualification' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(i18n)

// 路由守卫：更新页面标题（支持国际化）
router.beforeEach((to, from, next) => {
  const locale = i18n.global.locale.value
  const companyName = locale === 'en-US' ? 'Changsha Yuean' : '长沙悦安'
  
  if (to.meta.titleKey) {
    const pageTitle = i18n.global.t(to.meta.titleKey)
    document.title = `${pageTitle} - ${companyName}`
  } else {
    document.title = locale === 'en-US' 
      ? 'Changsha Yuean Intellectual Property Services'
      : '长沙悦安知识产权服务'
  }
  next()
})

app.mount('#app')
