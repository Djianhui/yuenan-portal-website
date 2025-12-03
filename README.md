# 长沙悦安知识产权门户网站

这是长沙悦安知识产权代理有限公司的门户网站项目，使用 Vue 3 + Vite 构建。

## 项目说明

本项目模仿长沙悦安网站风格，提供知识产权相关服务展示。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vue Router 4** - 官方路由管理器
- **Vite** - 下一代前端构建工具
- **Tailwind CSS** - 实用工具优先的 CSS 框架(通过 CDN 引入)
- **Font Awesome** - 图标库(通过 CDN 引入)

## 项目结构

```
yuenan-portal-website/
├── src/
│   ├── views/              # 页面组件
│   │   ├── HighTechEnterprise.vue        # 高新企业认定
│   │   ├── SpecializedEnterprise.vue     # 专精特新认定
│   │   ├── AlgorithmFiling.vue           # 算法备案
│   │   ├── NewTechProduct.vue            # 新技术新产品
│   │   ├── DoubleSoftEvaluation.vue      # 双软评估
│   │   └── QualificationHandling.vue     # 企业资质办理
│   ├── components/         # 公共组件
│   │   ├── Navbar.vue                    # 导航栏
│   │   └── Footer.vue                    # 页脚
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── index-vue.html         # HTML 入口
├── vite.config.js         # Vite 配置
├── package.json           # 项目依赖
└── README.md             # 项目说明
```

## 页面路由

- `/` - 高新企业认定 (带 HOT 标签)
- `/specialized-enterprise` - 专精特新认定 (带 HOT 标签)
- `/algorithm-filing` - 算法备案 (带 HOT 标签)
- `/new-tech-product` - 新技术新产品
- `/double-soft-evaluation` - 双软评估
- `/qualification-handling` - 企业资质办理

## 安装依赖

```bash
npm install
```

## 开发运行

```bash
npm run dev
```

项目将在 `http://localhost:3000` 启动

## 构建生产版本

```bash
npm run build
```

## 预览生产版本

```bash
npm run preview
```

## 开发说明

1. 所有样式使用 Tailwind CSS，通过 CDN 引入，不使用原生 CSS
2. 图标使用 Font Awesome，通过 CDN 引入
3. 图片资源使用 Unsplash 占位图或纯色块代替
4. 使用 HTML5 语义化标签
5. HOT 标签字体大小精确控制为 10px

## 待开发功能

各页面组件已创建基础框架，具体内容将根据需求逐步实现。

## 联系方式

咨询热线: 400-872-8735
