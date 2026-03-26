<template>
  <div class="nethermost banner">
    <!-- logo 与 邮箱联系方式-->
    <div class="contact">
      <!-- logo与标题 -->
      <div class="log">
        <img class="logs" v-lazy="logoSrc" :alt="siteTitle" />
        <h2 class="logotitle">{{ siteTitle }}</h2>
      </div>
      <!-- 联系方式 -->
      <div class="mailboxs">
        <div v-for="item in contactDetails" :key="item.id" :class="['contact-item', item.id]">
          <component :is="item.icon" :style="styles" />
          <h2 class="title">{{ item.text }}</h2>
        </div>
      </div>
    </div>
    <!-- 链接跳转 -->
    <div class="skip">
      <ul class="skips">
        <li v-for="item in socialLinks" :key="item.id" class="icon-item">
          <a :href="item.url" target="_blank" rel="noopener noreferrer">
            <component :is="item.icon" :style="styles" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {
  PhoneOutlined,
  MailOutlined,
  GithubOutlined,
  YoutubeOutlined,
  AntDesignOutlined,
  GooglePlusOutlined,
  ChromeOutlined,
} from '@ant-design/icons-vue'

const logoSrc = new URL('../../assets/logo.png', import.meta.url).href
const siteTitle = '毛孩子'

// 联系方式数据
const contactDetails = [
  { id: 'phone', icon: PhoneOutlined, text: '123456789' },
  { id: 'email', icon: MailOutlined, text: '123456789@qq.com' },
]
// 链接跳转
const socialLinks = [
  { id: 1, icon: GithubOutlined, url: 'https://github.com' },
  { id: 2, icon: YoutubeOutlined, url: 'https://youtube.com' },
  { id: 3, icon: AntDesignOutlined, url: 'https://ant.design' },
  { id: 4, icon: GooglePlusOutlined, url: 'https://google.com' },
  { id: 5, icon: ChromeOutlined, url: 'https://google.com/chrome' },
]
// icon的颜色大小
const styles = {
  fontSize: '30px',
  transition: 'all 0.5s', // 让图标颜色变化也平滑
}
</script>

<style lang="scss" scoped>
.nethermost {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact,
  .skip {
    width: 80%;
  }

  // logo与邮箱
  .contact {
    height: 60%;
    display: flex;
    flex-direction: row;

    // logo
    .log {
      width: 50%;
      height: 90%;

      display: flex;
      align-items: center;
      justify-content: center;

      .logs {
        width: 20%;
        height: 60%;
      }

      .logotitle {
        display: block;
        color: $cat-background-color;
      }
    }

    .mailboxs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;

      .contact-item,
      .phone,
      .address {
        display: flex;
        align-items: center;
        gap: 18px;
        padding: 10px;
        border-radius: 16px;
        transition:
          background-color 0.3s ease-in-out,
          color 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          background-color: $cat-background-color;

          .anticon {
            color: white;
          }

          .title {
            color: white;
          }
        }
      }

      .title {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        transition: color 0.3s; // 让文字颜色切换也平滑一点
      }
    }
  }

  // 链接跳转
  .skip {
    margin-top: 20px;
    height: 40%;

    .skips {
      display: flex;
      justify-content: space-evenly;

      li {
        list-style-type: none;
        padding: 10px;
        border-radius: 50%; // 圆形背景
        transition:
          background-color 0.3s ease-in-out,
          color 0.3s ease-in-out;

        &:hover {
          background-color: $cat-background-color;

          .anticon {
            color: white;
          }
        }
      }
    }
  }
}

/* 移动端样式 */
@media (max-width: 768px) {
  .nethermost {
    padding: 15px 0;

    .contact {
      flex-direction: column;

      // logo与标题
      .log {
        width: 100%;
        height: 40%;

        .logs {
          width: 16%;
          height: 100%;
        }
      }

      // 邮箱与联系方式
      .mailboxs {
        margin-left: 6%;
      }
    }
  }
}

@media (max-width: 400px) {
  .nethermost {
    padding: 15px 0;

    .contact {
      flex-direction: column;

      // logo与标题
      .log {
        width: 100%;
        height: 40%;

        .logs {
          min-width: 20%;
          min-height: 80%;
        }
      }
    }
  }
}

@media (max-width: 280px) {
  .nethermost {
    padding: 15px 0;

    .contact {
      flex-direction: column;

      // logo与标题
      .log {
        width: 100%;
        height: 40%;

        .logotitle {
          justify-content: center;
          display: none;
        }
      }
    }
  }
}
</style>
