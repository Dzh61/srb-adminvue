<template>
  <div id="headzj" class="hold-transition skin-purple sidebar-mini">
    <el-container>
      <el-header class="main-header" style="height:70px;">
        <nav class="navbar navbar-static-top">
          <!-- Logo -->
          <a href="#" class="logo" style="text-align:center">
             <span class="nav-welcome">
            <b>2006JA尚融宝管理系统&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎登录</b>
          </span>
          </a>
          <div class="right-menu">
            <el-dropdown class="avatar-container right-menu-item" trigger="click">
              <div class="avatar-wrapper">
<!--                <img src="../assets/img/ns-160x160.jpg" class="user-avatar">-->
                  2006JA.
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item divided>
                  <span style="display:block;">修改密码</span>
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <span style="display:block;">退出</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </nav>
      </el-header>
    </el-container>
  </div>

</template>


<script>

export default {
  name: "headZj"
}
</script>


<style scoped>
html,body {
  /* overflow-y: scroll; */
  margin: 0;
}

.skin-purple .main-header .logo:hover {
  background: #0abdfe;
}
.skin-purple .main-header .navbar .sidebar-toggle:hover {
  /* background: #0abdfe; */
}
.skin-purple .main-header {
  min-height: 70px;
  padding: 0;
}
.skin-purple .main-header .logo {
  height: 50px;
  /* background: #0abdfe; */
  float: left;
  padding: 20px 0 0 15px;
  /* width: 230px; */
}
.skin-purple .main-header .navbar {
  height: 70px;
  background: linear-gradient(to right, #0abdfe, #67f0e0);
  /* margin-left: 230px; */
}
.modal-body .nav-tabs>li>a {
  color: #555
}
.right-menu {
  float: right;
  padding: 18px 30px 0 0;
  color: #fff;
}
.avatar-wrapper img{width: 30px;height: 30px;border-radius: 15px;vertical-align: middle}
.main-header{
  margin-top: -55px;
}
</style>