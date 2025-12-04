# 全站国际化实施指南

## ✅ 已完成

1. **默认语言已改为英文**
   - 首次访问显示英文
   - fallbackLocale 设置为 en-US
   - HTML lang 属性设置为 en

2. **核心组件已国际化**
   - ✅ Navbar（导航栏）
   - ✅ Footer（底部）
   - ✅ LanguageSwitcher（语言切换器）

## 📊 内容统计

项目共有6个主要页面，每个页面包含大量内容：

| 页面 | 预估文本量 | 状态 |
|------|-----------|------|
| 高新企业认定 | ~150个文本字段 | 🔄 部分完成 |
| 专精特新认定 | ~120个文本字段 | ⏳ 待处理 |
| 算法备案 | ~100个文本字段 | ⏳ 待处理 |
| 新技术新产品 | ~130个文本字段 | 🔄 部分完成 |
| 双软评估 | ~110个文本字段 | 🔄 部分完成 |
| 企业资质办理 | ~140个文本字段 | 🔄 部分完成 |

**总计**: 约 750+ 个文本字段需要翻译

## 🎯 推荐实施方案

### 方案A：渐进式国际化（推荐⭐）

**适合场景**：资源有限，需要快速上线

**实施步骤**：
1. ✅ 核心导航和公共元素（已完成）
2. 🔄 页面标题和重要按钮（进行中）
3. ⏳ 服务卡片标题
4. ⏳ 详细描述文本
5. ⏳ 表单和提示信息

**优点**：
- 快速上线，逐步完善
- 可以根据用户反馈调整优先级
- 降低翻译成本

### 方案B：完整国际化

**适合场景**：有专业翻译团队，预算充足

**实施步骤**：
1. 提取所有文本内容（750+条）
2. 专业翻译服务
3. 批量导入语言包
4. 全量测试

**工作量估算**：
- 文本提取：1天
- 专业翻译：3-5天
- 集成测试：2天
- **总计**：约1周

**成本估算**：
- 专业翻译费用：¥0.15-0.25/字 × 约50,000字 = ¥7,500 - ¥12,500

### 方案C：AI辅助翻译（平衡⭐⭐）

**适合场景**：预算中等，追求效率

**工具推荐**：
- DeepL API
- Google Translate API
- ChatGPT API

**实施步骤**：
1. 使用脚本批量提取文本
2. AI翻译 + 人工校对
3. 批量导入
4. 测试调优

**工作量估算**：
- 自动化脚本：0.5天
- AI翻译：0.5天
- 人工校对：2天
- 集成测试：1天
- **总计**：约4天

## 🛠 实施工具

### 1. 文本提取脚本

创建 `scripts/extract-texts.js`：

```javascript
// 自动扫描Vue文件，提取所有硬编码的中文文本
const fs = require('fs')
const path = require('path')

function extractTexts(dir) {
  const files = fs.readdirSync(dir)
  const texts = []
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      texts.push(...extractTexts(filePath))
    } else if (file.endsWith('.vue')) {
      const content = fs.readFileSync(filePath, 'utf-8')
      // 提取中文文本的正则
      const regex = /[\u4e00-\u9fa5]+/g
      const matches = content.match(regex) || []
      texts.push(...matches)
    }
  })
  
  return [...new Set(texts)]
}

const texts = extractTexts('./src/views')
fs.writeFileSync('./texts-to-translate.json', JSON.stringify(texts, null, 2))
console.log(`提取了 ${texts.length} 个唯一文本`)
```

### 2. AI翻译脚本

创建 `scripts/translate.js`：

```javascript
// 使用ChatGPT API批量翻译
const OpenAI = require('openai')
const fs = require('fs')

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

async function translateBatch(texts) {
  const translations = {}
  
  for (let i = 0; i < texts.length; i += 10) {
    const batch = texts.slice(i, i + 10)
    const prompt = `请将以下中文翻译成专业的英文，保持商务语气：\n${batch.join('\n')}`
    
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }]
    })
    
    const translated = response.choices[0].message.content.split('\n')
    batch.forEach((text, idx) => {
      translations[text] = translated[idx]
    })
  }
  
  return translations
}

// 运行翻译
const texts = JSON.parse(fs.readFileSync('./texts-to-translate.json'))
translateBatch(texts).then(translations => {
  fs.writeFileSync('./translations.json', JSON.stringify(translations, null, 2))
  console.log('翻译完成！')
})
```

### 3. 批量替换脚本

创建 `scripts/apply-i18n.js`：

```javascript
// 自动替换Vue文件中的硬编码文本为 t('key')
const fs = require('fs')
const translations = JSON.parse(fs.readFileSync('./translations.json'))

function applyI18n(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  
  Object.entries(translations).forEach(([zh, key]) => {
    content = content.replace(new RegExp(zh, 'g'), `{{ t('${key}') }}`)
  })
  
  fs.writeFileSync(filePath, content)
}
```

## 📝 手动国际化示例

### 示例：高新企业认定页面

**原代码**：
```vue
<h1 class="text-6xl font-bold text-white mb-6">
  国高新企业<span class="text-orange-500">思路认证</span>
</h1>
```

**国际化后**：
```vue
<h1 class="text-6xl font-bold text-white mb-6">
  {{ t('highTech.banner.title') }}<span class="text-orange-500">{{ t('highTech.banner.highlight') }}</span>
</h1>
```

**语言包（zh-CN.js）**：
```javascript
highTech: {
  banner: {
    title: '国高新企业',
    highlight: '思路认证'
  }
}
```

**语言包（en-US.js）**：
```javascript
highTech: {
  banner: {
    title: 'National High-Tech Enterprise ',
    highlight: 'Certification Strategy'
  }
}
```

## 🚀 快速开始

### 当前可用功能

1. **访问网站**：默认显示英文
2. **切换语言**：点击右上角按钮
3. **已翻译内容**：
   - 导航菜单
   - 按钮文本
   - 底部信息

### 测试国际化

```bash
# 启动开发服务器
npm run dev

# 访问
http://localhost:3001

# 点击右上角语言切换按钮测试
```

## 📋 下一步行动

### 优先级1：核心页面标题（1小时）
- [ ] 6个页面的主标题
- [ ] 副标题
- [ ] 重要按钮

### 优先级2：服务卡片（2-3小时）
- [ ] 服务标题（约40个）
- [ ] 服务描述（约40个）

### 优先级3：详细内容（1-2天）
- [ ] 申请条件
- [ ] 补贴政策
- [ ] 流程步骤
- [ ] FAQ等

## 💡 建议

基于您的具体需求，我建议：

1. **如果需要快速上线**：
   - 使用方案A（渐进式）
   - 先完成核心导航（已完成）
   - 页面内容保持中文或添加英文说明

2. **如果需要完整双语**：
   - 使用方案C（AI辅助）
   - 预算约4天开发时间
   - 质量可控，成本合理

3. **如果预算充足**：
   - 使用方案B（专业翻译）
   - 聘请专业翻译公司
   - 质量最优

## 📞 下一步

请告诉我您希望：
1. 继续手动国际化页面内容？
2. 使用自动化脚本加速？
3. 保持当前渐进式方案？
4. 其他方案？

我可以根据您的选择提供相应的支持！
