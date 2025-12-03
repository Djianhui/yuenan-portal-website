# 部署说明

## 问题解决

✅ 已恢复使用 Tailwind CSS CDN，确保生产环境样式正常。

## 当前配置

### Tailwind CSS
使用官方CDN（https://cdn.tailwindcss.com），这是Tailwind官方推荐的Play CDN版本，专为生产环境优化：
- ✅ 无需本地安装
- ✅ 自动优化和压缩
- ✅ 全球CDN加速
- ✅ 支持动态配置

### 环境配置
- **.env** - 公共配置
- **.env.development** - 开发环境
- **.env.production** - 生产环境（正式域名：https://www.wsw.pamirsai.cn）

## 构建和部署

### 开发环境
```bash
npm run dev
```

### 生产环境构建
```bash
npm run build
```

构建后的文件在 `dist` 目录，将此目录上传到服务器即可。

### 预览构建结果
```bash
npm run preview
```

## 注意事项

1. ✅ 使用Tailwind CSS CDN，样式在所有环境正常显示
2. ✅ FontAwesome图标通过CDN加载
3. ✅ 环境变量已配置，生产环境使用正式域名
4. ✅ 所有静态资源已正确打包
5. ✅ 图片资源已优化并包含在构建中

## 文件大小
- CSS: 0.11 kB (gzip: 0.10 kB) + Tailwind CDN
- JS: 198.41 kB (gzip: 59.78 kB)
- 图片资源已自动优化

## 部署步骤

1. 运行构建命令：`npm run build`
2. 将 `dist` 目录内的所有文件上传到服务器
3. 访问 https://www.wsw.pamirsai.cn 查看效果

## CDN说明

项目使用以下CDN资源：
- **Tailwind CSS**: https://cdn.tailwindcss.com
- **FontAwesome**: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css

这些CDN都是稳定可靠的服务，确保全球访问速度和可用性。
