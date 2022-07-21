<template>
  <el-container>
    <el-header>
      <!--      //头部-->
      <head-zj/>

    </el-header>
    <el-container>
      <!--      //左侧菜单-->
      <el-aside width="200px"><MenuHome/></el-aside>

      <el-main>
        <!--        //内容-->
        <router-view/>

      </el-main>
    </el-container>
  </el-container>
</template>


<script>


import headZj from "@/components/headZj";
import MenuHome from "@/components/MenuHome";

export default {
  name: "inDex",
  components:{
    headZj,MenuHome
  }
}
</script>

<style scoped>

</style>