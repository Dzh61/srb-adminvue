<template>
  <div>

    <el-menu default-active="1-4-1" class="el-menu-vertical-demo"  :mode="menusList">

      <el-submenu :index="menus.id" v-for="(menus) in menusList" :key="menus.id">

        <template slot="title">
          <i :class="menus.icon"></i>
          <span>{{ menus.name }}</span>
        </template>

        <el-menu-item-group>

          <el-menu-item :index="children.path" v-for="(children) in menus.children" :key="children.id">
            <router-link :to="children.linkUrl">{{ children.name }}</router-link>
          </el-menu-item>

        </el-menu-item-group>

      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MenuHome",
  data() {
    return {
      isCollapse: true,
      menusList: [],
    };
  },
  // methods: {
  //   handleOpen(key, keyPath) {
  //     console.log(key, keyPath);
  //   },
  //   handleClose(key, keyPath) {
  //     console.log(key, keyPath);
  //   }
  // },

  //组件加载完成时就执行
  mounted() {

  },

  //组件加载完成时就执行
  beforeCreate() {
    this.$http.get('/admin/core/zcmenus.action').then(res => {

      this.menusList = res.data;
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>