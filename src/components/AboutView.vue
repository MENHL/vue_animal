<template>
  <div id="aboutView" class="disclaimer-container">
    <div class="content-wrapper">
      <h1 class="disclaimer-title">{{ title }}</h1>

      <section class="disclaimer-section">
        <h2>📄 {{ sections.nature.title }}</h2>
        <p>{{ sections.nature.content }}</p>
      </section>

      <section class="disclaimer-section">
        <h2>🖼️ {{ sections.imageCopyright.title }}</h2>
        <p>{{ sections.imageCopyright.content }}</p>
      </section>

      <section class="disclaimer-section">
        <h2>⚖️ {{ sections.infringement.title }}</h2>
        <p>{{ sections.infringement.description }}</p>

        <div class="contact-card">
          <div class="contact-header">
            <span class="contact-icon">📧</span>
            <h3>{{ contactInfo.title }}</h3>
          </div>
          <a :href="`mailto:${contactInfo.email}`" class="email-link">
            {{ contactInfo.email }}
          </a>
          <p class="contact-note">{{ contactInfo.note }}</p>
        </div>

        <div class="action-list">
          <div v-for="action in actions" :key="action.id" class="action-item">
            <span class="action-icon">{{ action.icon }}</span>
            <div>
              <strong>{{ action.title }}</strong>
              <p>{{ action.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="disclaimer-section">
        <h2>💻 {{ sections.learningPurpose.title }}</h2>
        <p>{{ sections.learningPurpose.content }}</p>
      </section>

      <div class="tech-note">
        <span class="tech-icon">ℹ️</span>
        <p>{{ techNote }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 响应式数据定义
const title = '免责声明';

const sections = {
  nature: {
    title: '网站性质',
    content: '本网站（项目）仅为个人学习、研究或欣赏之目的而创建，所有内容（包括但不限于文字、图片、音频、视频等）均来源于互联网公开信息或网络资源。'
  },
  imageCopyright: {
    title: '图片版权说明',
    content: '本站所使用的图片素材均来自网络，其版权归原作者或版权方所有。本站对这些素材的使用不构成任何商业用途，仅为技术学习、界面展示和效果演示之目的。'
  },
  infringement: {
    title: '侵权处理流程',
    description: '如您是本网站所用图片的版权所有人，并认为本站对您的作品构成了侵权，请通过以下方式联系我们，我们将在收到通知后第一时间进行处理：'
  },
  learningPurpose: {
    title: '学习用途声明',
    content: '本项目的所有代码、设计和实现思路均为学习Vue.js、SCSS、响应式设计等前端技术的实践案例。不涉及任何商业运营，不产生任何经济收益。'
  }
};

const contactInfo = {
  title: '联系邮箱',
  email: '1971217559@qq.com',
  note: '请提供相关版权证明及侵权内容链接'
};

const actions = [
  {
    id: 1,
    icon: '🗑️',
    title: '删除侵权内容',
    description: '立即移除涉嫌侵权的图片素材'
  },
  {
    id: 2,
    icon: '🔄',
    title: '替换素材',
    description: '使用无版权争议的替代图片'
  },
  {
    id: 3,
    icon: '🏷️',
    title: '注明来源',
    description: '如您允许使用，我们将明确标注版权信息'
  }
];

const techNote = '本项目采用响应式设计，适配移动端设备。背景图片仅用于界面视觉效果展示，所有功能均为前端技术演示。';
</script>
<style lang="scss" scoped>
// 颜色变量定义
$cat-background-color: #636a71;
$background-color: #636a71;
$hom-background: #2c3e50;
$accent-color: #3498db;
$border-color: rgba(255, 255, 255, 0.1);
$card-bg: rgba(255, 255, 255, 0.05);

#aboutView.disclaimer-container {
  width: 100vw;
  min-height: calc(100vh - 64px);
  background-image: url('../assets/colorof.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .content-wrapper {
    max-width: 800px;
    width: 100%;
    background: rgba(44, 62, 80, 0.85);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 32px;
    border: 1px solid $border-color;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

    .disclaimer-title {
      color: var(--gl-color);
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 32px;
      font-weight: 600;
      letter-spacing: 1px;
    }

    .disclaimer-section {
      margin-bottom: 32px;
      padding-bottom: 24px;
      border-bottom: 1px solid $border-color;

      &:last-of-type {
        border-bottom: none;
      }

      h2 {
        color: $accent-color;
        font-size: 1.5rem;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      p {
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.6;
        font-size: 1rem;
      }
    }

    .contact-card {
      background: $card-bg;
      border-radius: 16px;
      padding: 20px;
      margin: 20px 0;
      border: 1px solid $border-color;

      .contact-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;

        .contact-icon {
          font-size: 1.5rem;
        }

        h3 {
          color: $font-color;
          margin: 0;
          font-size: 1.25rem;
        }
      }

      .email-link {
        display: inline-block;
        color: $accent-color;
        font-size: 1.1rem;
        text-decoration: none;
        padding: 8px 16px;
        background: rgba(52, 152, 219, 0.1);
        border-radius: 8px;
        margin-bottom: 12px;
        transition: all 0.3s ease;

        &:hover {
          background: rgba(52, 152, 219, 0.2);
          transform: translateY(-2px);
        }
      }

      .contact-note {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        margin-top: 8px;
      }
    }

    .action-list {
      display: flex;
      flex-direction: column;

      gap: 16px;
      margin-top: 24px;

      .action-item {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        padding: 16px;
        background: $card-bg;
        border-radius: 12px;
        border-left: 4px solid $accent-color;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateX(4px);
        }

        .action-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        div {
          flex: 1;

          strong {
            color: $font-color;
            font-size: 1.1rem;
            display: block;
            margin-bottom: 4px;
          }

          p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.95rem;
            margin: 0;
          }
        }
      }
    }

    .tech-note {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 20px;
      background: rgba(52, 152, 219, 0.1);
      border-radius: 12px;
      margin: 32px 0;
      border: 1px solid rgba(52, 152, 219, 0.3);

      .tech-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
      }

      p {
        color: rgba(255, 255, 255, 0.9);
        margin: 0;
        line-height: 1.5;
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  #aboutView.disclaimer-container {
    padding: 12px;

    .content-wrapper {
      padding: 24px 20px;
      border-radius: 20px;

      .disclaimer-title {
        font-size: 2rem;
        margin-bottom: 24px;
      }

      .disclaimer-section {
        margin-bottom: 24px;
        padding-bottom: 20px;

        h2 {
          font-size: 1.3rem;
        }
      }

      .contact-card,
      .tech-note {
        padding: 16px;
      }

      .action-item {
        padding: 14px;
      }

      .tech-note {
        margin: 24px 0;
      }
    }
  }
}

@media (max-width: 480px) {
  #aboutView.disclaimer-container {
    .content-wrapper {
      padding: 20px 16px;

      .disclaimer-title {
        font-size: 1.75rem;
      }

      .disclaimer-section {
        h2 {
          font-size: 1.2rem;
        }
      }

      .action-item {
        align-items: center;
        flex-direction: column;
        gap: 12px;
        text-align: center;

        .action-icon {
          align-self: center;
        }
      }
    }
  }
}
</style>