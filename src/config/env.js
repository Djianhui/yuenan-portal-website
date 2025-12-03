/**
 * 环境变量配置文件
 * 统一管理项目中使用的环境变量
 */

// 获取环境变量
export const env = {
  // 当前环境
  mode: import.meta.env.MODE,
  
  // 是否为生产环境
  isProd: import.meta.env.PROD,
  
  // 是否为开发环境
  isDev: import.meta.env.DEV,
  
  // 基础URL
  baseUrl: import.meta.env.VITE_APP_BASE_URL || '',
  
  // API接口地址
  apiUrl: import.meta.env.VITE_APP_API_URL || '',
  
  // 项目标题
  title: import.meta.env.VITE_APP_TITLE || '长沙悦安知识产权门户网站',
  
  // 客服电话
  phone: import.meta.env.VITE_APP_PHONE || '400-671-3086',
  
  // 公司名称
  company: import.meta.env.VITE_APP_COMPANY || '长沙悦安知识产权服务有限公司'
}

// 导出默认配置
export default env
