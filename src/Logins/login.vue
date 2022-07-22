<template>
  <div id="login">
    <el-container>
      <el-header class="navigation nav">
        <el-row class="nav-image" type="flex" justify="start">
         <div class="nav-image_logo">
            <img src="../assets/img/17.jpg" />
          </div>
          <span class="nav-welcome">
            <b>2006JA金融系统&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎登录</b>
          </span>
        </el-row>
      </el-header>
      <el-main>
        <!-- 登录页面 -->
        <el-row class="login_page" type="flex" justify="end">
          <img src="../assets/img/logingBg.png" />
          <div class="grid-content bg-purple">
            <el-container>
              <el-header class="login_main login_main_header">
                <el-breadcrumb separator="|" class="main_header_tilet">
                  <el-breadcrumb-item> 扫码登录 </el-breadcrumb-item>
                  <el-breadcrumb-item> 账号登录 </el-breadcrumb-item>
                </el-breadcrumb>
              </el-header>
              <el-main>
                <el-form
                    :model="ruleForm"
                    ref="ruleForm"
                    label-width="50px"
                    class="demo-ruleForm"
                >
                  <el-form-item
                      label="账号"
                      prop="username"
                      :rules="[{ required: true, message: '账号不能为空' }]"
                  >
                    <el-input
                        placeholder="请输入账号"
                        v-model="ruleForm.username"
                        clearable
                        autocomplete="off"
                    >
                    </el-input>
                  </el-form-item>
                  <el-form-item
                      label="密码"
                      prop="password"
                      :rules="[{ required: true, message: '密码不能为空' }]"
                  >
                    <el-input
                        type="password"
                        placeholder="请输入密码"
                        v-model="ruleForm.password"
                        clearable
                        show-password
                        autocomplete="off"
                        @keyup.enter.native="submitForm('ruleForm')"
                    >
                    </el-input>
                  </el-form-item>
                  <div>
                    <el-link href="#" target="_blank" :underline="false"
                    >忘记密码</el-link
                    >
                  </div>
                  <br />
                  <el-form-item>
                    <el-button
                        class="sub_btn"
                        type="primary"
                        @click="submitForm('ruleForm')"
                    >提交</el-button
                    >
                  </el-form-item>
                </el-form>
              </el-main>
              <el-footer class="login_main login_main_footer">
                <el-breadcrumb separator="|">
                  <el-breadcrumb-item :to="{ path: '|' }">
                    <span class="svg_icon">
                      <svg
                          t="1647507155088"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="1520"
                          width="20"
                          height="20"
                      >
                        <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m210.5 612.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.2 72.2-51.1 101.8 16.9 5.2 54.9 19.2 45.9 34.4-7.3 12.3-125.6 7.9-159.8 4-34.2 3.8-152.5 8.3-159.8-4-9.1-15.2 28.9-29.2 45.8-34.4-35-29.5-51.1-70.4-51.1-101.8 0 0-33.4 54.1-44.9 52.7-5.4-0.7-12.4-29.6 9.4-99.7 10.3-33 22-60.5 40.2-105.8-3.1-116.9 45.3-215 160.4-215 113.9 0 163.3 96.1 160.4 215 18.1 45.2 29.9 72.8 40.2 105.8 21.7 70.1 14.6 99.1 9.3 99.7z"
                            p-id="1521"
                            fill="#409EFF"
                        ></path>
                      </svg>
                    </span>
                    <el-link
                        href="#"
                        target="_blank"
                        class="el_link_text"
                        :underline="false"
                    >
                      QQ
                    </el-link>
                  </el-breadcrumb-item>

                  <el-breadcrumb-item>
                    <span class="svg_icon">
                      <svg
                          t="1647507743243"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="1280"
                          width="20"
                          height="20"
                      >
                        <path
                            d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                            fill="#28C445"
                            p-id="1281"
                        ></path>
                        <path
                            d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                            fill="#28C445"
                            p-id="1282"
                        ></path>
                      </svg>
                    </span>
                    <el-link
                        href="#"
                        target="_blank"
                        class="el_link_text"
                        :underline="false"
                    >
                      微信
                    </el-link>
                  </el-breadcrumb-item>

                  <span class="svg_icon_right">
                    <i class="el-icon-arrow-right"></i>
                    <el-link
                        href="#"
                        target="_blank"
                        class="el_link_text"
                        :underline="false"
                    >
                      立即注册
                    </el-link>
                  </span>
                </el-breadcrumb>
              </el-footer>
            </el-container>
          </div>
        </el-row>
      </el-main>
      <el-footer class="navigation">
        <el-row type="flex" justify="center">
          <el-breadcrumb class="login-bottom_resource" separator="|">
            <el-breadcrumb-item>关于我们</el-breadcrumb-item>
            <el-breadcrumb-item>联系我们</el-breadcrumb-item>
            <el-breadcrumb-item>人才招聘</el-breadcrumb-item>
            <el-breadcrumb-item>手机健康</el-breadcrumb-item>
            <el-breadcrumb-item>友情链接</el-breadcrumb-item>
            <el-breadcrumb-item>健康社区</el-breadcrumb-item>
            <el-breadcrumb-item>健康公益</el-breadcrumb-item>
            <el-breadcrumb-item>广告服务</el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>
        <div class="login-Copyright">
          Copyright © 2004-2022 DeyRan.com 版权所有
        </div>
      </el-footer>
    </el-container>
  </div>

</template>

<script>
export default {
  name: "login",

  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    submitForm(formName) {
      let User = JSON.stringify(this.ruleForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: "登陆中...",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
          });
          this.$http.post("/api/login", User, {
                headers: {
                  "Content-Type": "application/json;charset=utf-8", //设置请求头
                },
              })
              .then((response) => {
                // 处理成功情况
                if(response.data==1){
                  setTimeout(() => {
                    loading.close();
                    this.$router.push("/index");
                  }, 2000);
                }

              })
              .catch(() => {});
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#login {
  min-width: 800px;
}

#login .navigation {
  background-color: #ffffff;
  line-height: 100px;
  min-height: 100px;
}

#login .login_page {
  padding-right: 15%;
}

#login .nav-image {
  padding-left: 15%;
}

/* 重置浏览器查看大小。当浏览器窗口的宽度小于 1500 像素时 padding-right: 0 设置为0*/
@media screen and (max-width: 1500px) {
  #login .login_page {
    padding-right: 10%;
  }
  #login .nav-image {
    padding-left: 10%;
  }
}
@media screen and (max-width: 1200px) {
  #login .login_page {
    padding-right: 5%;
  }
  #login .nav-image {
    padding-left: 5%;
  }
}
@media screen and (max-width: 1000px) {
  #login .login_page {
    padding-right: 0;
  }
  #login .nav-image {
    padding-left: 2%;
  }
}

#login .nav-welcome {
  line-height: 110px;
  font-size: 25px;
  color: #40a0fffd;
  font-family: "STKaiti ", "华文楷体", sans-serif;
  margin-left: 20px;
}

#login .nav {
  margin-top: -60px;
}

#login .bg-purple {
  background: #f8f8f8;
}
#login .grid-content {
  border-radius: 4px;
  min-height: 388px;
  min-width: 350px;
  max-width: 350px;
}
#login .sub_btn {
  min-width: 255px;
}

#login .login_main {
  background-color: #f0f0f0;
  line-height: 65px;
}

#login .login_main_footer .svg_icon {
  line-height: 65px;
  position: relative;
  top: 6px;
}
#login .login_main_footer .el_link_text {
  padding-left: 5px;
}
#login .login_main_footer .svg_icon_right {
  line-height: 65px;
  padding-left: 75px;
}

#login .login-bottom_resource {
  color: #333;
  text-align: center;
  line-height: 90px;
}

#login .login-Copyright {
  color: #333;
  text-align: center;
  line-height: 0;
}
</style>