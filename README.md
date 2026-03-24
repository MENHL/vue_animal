
一个基于 Vue 3 + Vite 的宠物主题前端应用，展示猫狗等动物信息、图片画廊与家庭故事，适配移动端，集成 Ant Design Vue 提升 UI 一致性。

![项目截图](https://via.placeholder.com/800x400?text=Animal+World+Website)  
*（请替换为实际项目截图）*

---

## 🚀 项目简介

`my-animalworld-vue` 是一个专注于宠物世界的前端应用，采用现代 Web 技术栈构建，包含：

- 动物介绍页（猫、狗）
- 图片轮播与相册展示
- 家庭陪伴故事
- 响应式设计适配移动端
- 使用 Ant Design Vue 组件库提升 UI 一致性

适用于宠物爱好者、宠物平台、社区类网站等场景。

---

## 🛠️ 技术栈

| 技术 | 版本 |
|------|------|
| **Vue.js** | ^3.5.28 |
| **Vite** | ^7.3.1 |
| **Vue Router** | ^5.0.2 |
| **Pinia** | ^3.0.4 |
| **Ant Design Vue** | ^4.2.6 |
| **@ant-design/icons-vue** | ^7.0.1 |
| **Swiper** | ^12.1.2 |
| **Vue3 Lazyload** | ^0.3.8 |
| **Masonry Layout** | ^4.2.2 |
| **Sass** | ^1.97.3 |

---

## 📁 项目结构

```javascript
my-animalworld-vue/
├── public/
│   └── images/           # 静态资源图片
├── src/
├─ App.vue                       — 根组件，应用布局入口，挂载路由视图
├─ main.js                       — 应用入口脚本，创建 Vue 实例并挂载插件/路由/状态
├─ assets/                       — 静态资源目录（图片、字体等）
│  └─ images/                    — 存放图片资源
├─ components/                   — 可复用组件集合
│  ├─ AboutView.vue              — 关于页组件
│  ├─ DogPhoto.vue               — 狗狗图片展示组件
│  ├─ HeaderMove.vue             — 可移动/动画的头部组件
│  ├─ HomeView.vue               — 主页视图组件（组合 home 子组件）
│  ├─ WeareFamily.vue            — “我们是家庭”相关展示组件
│  ├─ home/                      — 主页相关子组件目录
│  │  ├─ Carousel.vue            — 轮播组件
│  │  ├─ CatShows.vue            — 猫展示组件
│  │  ├─ DogIntroduce.vue        — 狗狗介绍组件
│  │  └─ NetherMost.vue          — 主页底部或特色模块组件
├─ familys/                      — 与“家庭餐”或数据集合相关文件
│  ├─ dogphotos.js               — 狗狗照片数据/配置（静态数据或导出数组）
│  └─ wearefamily.js             — “我们是家庭”数据/配置
├─ Layout/                       — 布局相关组件目录
│  └─ BsLayout.vue               — 页面基础布局组件（头/尾/侧边等）
├─ router/                       — 路由配置目录
│  └─ index.js                   — Vue-router 路由定义与导航守卫
├─ stores/                       — 状态管理目录（如 Pinia/Vuex）
│  └─ index.js                   — 全局状态仓库入口与导出
├─ styles/                       — 全局样式与变量
│  ├─ base.css                   — 基础样式（reset / 公共类）
│  └─ global.scss                — 全局 SCSS 变量、混入与主题样式
└─ views/                        — 页面级视图组件目录
   └─ HeaderMenu.vue             — 头部菜单/导航视图组件
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧪 快速开始

### 1. 克隆项目
```gitee
https://gitee.com/rainbow-under-the-sunshine/vue_animal.git
```githup
git clone https://github.com/yourname/my-animalworld-vue.git

cd my-animalworld-vue
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

> 访问 `http://localhost:5173` 查看项目运行效果。

### 4. 构建生产环境

```bash
npm run build
```

生成的静态文件位于 `dist/` 目录，可部署至 Nginx、GitHub Pages 或 CDN。

---

## 🔧 主要功能模块

| 模块 | 功能说明 |
|------|----------|
| `HomeView.vue` | 首页展示，包含轮播图、推荐动物卡片 |
| `CatShows.vue` / `DogIntroduce.vue` | 分类展示猫狗信息 |
| `DogPhoto.vue` | 使用 Masonry 布局展示高清宠物照片 |
| `NetherMost.vue` | 底部联系区域（电话、邮箱、社交链接） |
| `AboutView.vue` | 关于我们页面 |
| `WeareFamily.vue` | 家庭陪伴故事展示 |
| `HeaderMenu.vue` | 顶部导航栏，支持路由跳转 |

---

## 🎨 设计亮点

- ✅ **响应式布局**：适配 PC、平板、手机
- ✅ **懒加载图片**：使用 `vue3-lazyload` 提升性能
- ✅ **动画效果**：集成 `animate.css` 实现平滑过渡
- ✅ **图标系统**：统一使用 Ant Design Vue 图标
- ✅ **状态管理**：使用 Pinia 管理全局数据（如用户偏好、主题）

---

## 🌐 社交链接

- GitHub: [https://github.com/yourname/my-animalworld-vue](https://github.com/yourname/my-animalworld-vue)
- Demo: [https://yourname.github.io/my-animalworld-vue](https://yourname.github.io/my-animalworld-vue)

---

## 📝 贡献指南

欢迎贡献代码！

1. Fork 项目
2. 创建新分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add your feature'`
4. 推送到远程：`git push origin feature/your-feature`
5. 提交 Pull Request

---

## 📄 版权与许可

本项目遵循 MIT 开源协议。  
© 2025 毛孩子团队。保留所有权利。

---

## 💬 联系我们

如有问题或建议，请通过以下方式联系我们：

- 邮箱：1971217559@qq.com

---

> ✅ 项目仍在持续优化中，期待你的反馈与贡献！

---

