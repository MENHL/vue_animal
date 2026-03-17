<template>
    <div class="nethermost banner">
        <!-- logo 与 邮箱联系方式-->
        <div class="contact">
            <!-- logo与标题 -->
            <div class="log">
                <img class="logs" v-lazy="logoSrc" :alt=siteTitle>
                <h2 class="logotitle">{{ siteTitle }}</h2>
            </div>
            <!-- 联系方式 -->
            <div class="mailboxs">
                <!-- 手机号 -->
                <div class="phone">
                    <PhoneOutlined :style=styles />
                    <h2 class="title">{{ relation }}</h2>
                </div>
                <div class="address">
                    <MailOutlined :style=styles />
                    <h2 class="title">{{ mailbox }}</h2>
                </div>
            </div>
        </div>
        <!-- 链接跳转 -->
        <div class="skip">
            <ul class="skips">
                <li>
                    <GithubOutlined :style=styles />
                </li>
                <li>
                    <YoutubeOutlined :style=styles />
                </li>
                <li>
                    <AntDesignOutlined :style=styles />

                </li>
                <li>
                    <GooglePlusOutlined :style=styles />
                </li>
                <li>
                    <ChromeOutlined :style=styles />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const logoSrc = new URL('../../assets/logo.png', import.meta.url).href;
const siteTitle = "毛孩子";

// 联系方式
const { relation, mailbox } = {
    relation: "123456789",
    mailbox: "123456789@.qq.com",
}

// icon的颜色大小
const styles = {
    fontSize: '30px',
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
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .logs {
                width: 30%;
                height: 80%;
            }

            .logotitle {
                display: block;
                color: $cat-background-color;
            }
        }

        // 联系方式 
        .mailboxs {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 15px;

            .phone,
            .address {
                display: flex;
                align-items: center; // 垂直居中
                gap: 18px;
                padding: 10px;
                border-radius: 16px;
                transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

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
            }
        }
    }

    // 链接跳转
    .skip {
        margin-top: 20px;
        height: 40%;

        .skips {
            display: flex;
            justify-content: center;
            justify-content: space-evenly;

            li {
                list-style-type: none;
                padding: 10px;
                border-radius: 50%; // 圆形背景
                transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

                &:hover {
                    background-color: $cat-background-color;

                    .anticon {
                        color: white !important; // 确保图标颜色变为白色或高对比度颜色
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
                    max-width: 16%;
                    max-height: 80%;
                }
            }

            // 邮箱与联系方式
            .mailboxs {
                margin-left: 5%;
            }
        }
    }
}
</style>