import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

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
    meta: { title: '高新企业认定' }
  },
  {
    path: '/specialized-enterprise',
    name: 'SpecializedEnterprise',
    component: SpecializedEnterprise,
    meta: { title: '专精特新认定' }
  },
  {
    path: '/algorithm-filing',
    name: 'AlgorithmFiling',
    component: AlgorithmFiling,
    meta: { title: '算法备案' }
  },
  {
    path: '/new-tech-product',
    name: 'NewTechProduct',
    component: NewTechProduct,
    meta: { title: '新技术新产品' }
  },
  {
    path: '/double-soft-evaluation',
    name: 'DoubleSoftEvaluation',
    component: DoubleSoftEvaluation,
    meta: { title: '双软评估' }
  },
  {
    path: '/qualification-handling',
    name: 'QualificationHandling',
    component: QualificationHandling,
    meta: { title: '企业资质办理' }
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

// 路由守卫：更新页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - 长沙悦安` : '长沙悦安知识产权服务'
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
