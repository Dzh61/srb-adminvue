<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class='el-icon-arrow-right'>
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>积分等级管理</el-breadcrumb-item>
      <el-breadcrumb-item>积分等级列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <!-- table表格区域 -->
      <el-table  :data='IntegralList' border stripe >
<!--        <el-table-column type='index'></el-table-column>-->
        <el-table-column label='编号' prop='id' width='70px'></el-table-column>
        <el-table-column label='借款额度' prop='borrowAmount' width='70px'></el-table-column>
        <el-table-column label='积分区间开始' prop='integralStart' width='70px'></el-table-column>
        <el-table-column label='积分区间结束' prop='integralEnd' width='70px'></el-table-column>
        <el-table-column label='操作' width='130'>
          <template slot-scope='scope'>
            <el-button type='primary' icon='el-icon-edit' size='mini' @click="queryIntegral(scope.row.id)"></el-button>
            <el-button type='danger' icon='el-icon-delete' size='mini'
                       @click='delIntegral(scope.row.id)'></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination @size-change='handleSizeChange' @current-change='handleCurrentChange'
                     :current-page='queryInfo.pageno' :page-sizes='[5, 10, 15, 20]' :page-size='queryInfo.pagesize'
                     layout='total, sizes, prev, pager, next, jumper' :total='total' background>
      </el-pagination>
    </el-card>

    <!-- 修改角色的对话框 -->
    <el-dialog title="修改积分信息" :visible.sync="editIntegralVisible" top="1px" @close="editIntegralClosed">
      <!-- 内容主体区域 -->
      <el-form :model="editForm" ref="editFormRef" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="编号：" prop="id">
              <el-input v-model="editForm.id" placeholder="请输入借款额度"></el-input>
            </el-form-item>
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="12">
            <el-form-item label="借款额度：" prop="borrowAmount">
              <el-input v-model="editForm.borrowAmount" placeholder="请输入借款额度"></el-input>
            </el-form-item>
            <div class="grid-content bg-purple-light"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="积分区间开始：" prop="integralStart">
              <el-input v-model="editForm.integralStart" placeholder="请输入积分区间开始"></el-input>
            </el-form-item>
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="12">
            <el-form-item label="积分区间结束：" prop="integralEnd">
              <el-input v-model="editForm.integralEnd" placeholder="请输入积分区间结束"></el-input>
            </el-form-item>
            <div class="grid-content bg-purple-light"></div>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
                    <el-button @click="editIntegralVisible=false">取 消</el-button>
                    <el-button type="primary" @click="updateIntegral">确 定</el-button>
                  </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "form1",
  data() {
    return {
      //查询参数对象

      queryInfo: {
        form1: {},
        pageno: 1,
        pagesize: 10
      },
      //用户列表
      IntegralList: [],
      //总数据条数
      total: 0,

      //控制修改用户对话框的显示与隐藏
      editIntegralVisible: false,

      editForm: {
        id:'',
        borrowAmount:'',
        integralStart:'',
        integralEnd:''
      }
    }
  },
  created() {
    this.queryAllIntegral()
  },
  methods: {
    //根据分页获取对应的会员列表
    async queryAllIntegral() {
      const {data: res} = await this.$http.get('/admin/core/queryAllIntegral.action', {
        params: this.queryInfo
      })
      this.$message.success('获取积分列表成功!')
      this.IntegralList = res.rows
      this.total = res.total
    },
    //监听pagesize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.queryAllIntegral()
    },
    //监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pageno = newPage
      this.queryAllIntegral()
    },
    //展示编辑角色的对话框
    async queryIntegral(id) {
      this.editIntegralVisible = true
      this.$http.get('/admin/core/Integrals.action/'+ id).then(res=>{
        console.log(res.data.data)
        this.editForm = res.data.data.integral;
      })
      console.log("ID="+this.editForm.integralEnd)

    },
    //监听修改用户对话框的关闭事件
    editIntegralClosed() {
      this.$refs.editFormRef.resetFields()
    },
    //修改用户信息并提交
    updateIntegral() {
      this.$refs.editFormRef.validate(async valid => {
        if (!valid) return
        //发起修改用户信息的数据请求
        const {date: res} = await this.$http.put(
            '/admin/core/updateIntegral.action', this.editForm)
        //关闭对话框
        this.editIntegralVisible = false
        //刷新数据列表
        await this.queryAllIntegral()
        //提示修改成功
        this.$message.success('更新积分信息成功')
      })
    },
    //是否删除对话框
    async delIntegral(id) {
      const confirmResult = await this.$confirm(
          '此操作将永久删除，是否继续',
          '提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
      ).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已经取消删除!')
      }
      const {date: res} = await this.$http.delete('/admin/core/delIntegral.action/'+id)

      this.$message.success('删除成功')
      await this.queryAllIntegral()
    }

  }
}
</script>
<style lang="less" scoped>

</style>