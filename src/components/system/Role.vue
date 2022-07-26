<template>
    <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class='el-icon-arrow-right'>
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
          <el-breadcrumb-item>角色管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图区域 -->
        <el-card>
              <el-row style="height:2px" :gutter="20">
                <el-col :span='4'>
                  <el-button type='primary' @click='addRoleVisible = true'>新增</el-button>
                </el-col>
                <el-col :span='8'>
                  <el-input placeholder='请输入内容' v-model='queryInfo.name' clearable @clear='queryAllRole'>
                    <el-button slot='append' icon='el-icon-search' @click='queryAllRole'></el-button>
                  </el-input>
                </el-col>
              </el-row>
              <br>
              <!-- table表格区域 -->
              <el-table  :data='RoleList' border stripe>1
                <el-table-column type='index'></el-table-column>
                <el-table-column label='角色名称' prop='name' width='70px'></el-table-column>
                <el-table-column label='角色关键词' prop='keyword' width='70px'></el-table-column>
                <el-table-column label='描述' prop='description' width='70px'></el-table-column>
                <el-table-column label='操作' width='130'>
                  <template slot-scope='scope'>
                    <el-button type='primary' icon='el-icon-edit' size='mini' @click="queryRole(scope.row.id)"></el-button>
                    <el-button type='danger' icon='el-icon-delete' size='mini'
                               @click='delRole(scope.row.id)'></el-button>
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
                <el-dialog title="修改角色信息" :visible.sync="editRoleVisible" top="1px" @close="editRoleClosed">
                  <!-- 内容主体区域 -->
                  <el-form :model="editForm" ref="editFormRef" label-width="100px">
                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="角色名称：" prop="name">
                          <el-input v-model="editForm.name" placeholder="请输入角色名称"></el-input>
                        </el-form-item>
                        <div class="grid-content bg-purple-light"></div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="角色关键词：" prop="keyword">
                          <el-input v-model="editForm.keyword" placeholder="请输入角色关键词"></el-input>
                        </el-form-item>
                        <div class="grid-content bg-purple-light"></div>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="描述：" prop="description">
                          <el-input v-model="editForm.description" placeholder="请输入描述"></el-input>
                        </el-form-item>
                        <div class="grid-content bg-purple-light"></div>
                      </el-col>
                    </el-row>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="editRoleVisible=false">取 消</el-button>
                    <el-button type="primary" @click="updateRole">确 定</el-button>
                  </span>
                </el-dialog>
              <!-- 添加用户的对话框 -->
              <el-dialog title="添加角色信息" :visible.sync="addRoleVisible" width="60%" @close="addRoleClosed">
        <!-- 添加内容主体区域 -->
        <el-form :model="addForm" ref="addFormRef" label-width="70px">
          <el-row>


            <el-col :span="12">
              <el-form-item label="生日：" prop="birthday">
                <el-input v-model="addForm.birthday" placeholder="请输入疾病名称"></el-input>
              </el-form-item>
              <div class="grid-content bg-purple"></div>
            </el-col>

            <el-col :span="12">
              <el-form-item label="性别：" prop="gender">
                <el-input v-model="addForm.gender" placeholder="请输入性别"></el-input>
              </el-form-item>
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户名：" prop="username">
                <el-input v-model="addForm.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="12">
              <el-form-item label="密码：" prop="password">
                <el-input v-model="addForm.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="备注：" prop="remark">
                <el-input v-model="addForm.remark" placeholder="请输入备注"></el-input>
              </el-form-item>
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="12">
              <el-form-item label="状态：" prop="station">
                <el-input v-model="addForm.station" placeholder="请输入状态"></el-input>
              </el-form-item>
              <div class="grid-content bg-purple-light"></div>
            </el-col>

          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="联系电话：" prop="telephone">
                <el-input v-model="addForm.telephone" placeholder="请输入联系电话"></el-input>
              </el-form-item>
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>
        </el-form>

        <!-- 底部区域 -->
        <span slot="footer" class="dialog-footer">
        <el-button @click="addJiBingVisible = false">取 消</el-button>
        <el-button type="primary" @click="addJiBing">确 定</el-button>
      </span>
      </el-dialog>
    </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Role",
  data() {
    return {
      //查询参数对象

      queryInfo: {
        role: {},
        pageno: 1,
        pagesize: 10
      },
      //用户列表
      RoleList: [],
      //总数据条数
      total: 0,
      //控制添加用户对话框的显示与隐藏
      addRoleVisible: false,

      addForm: {
        name: '',
        keyword: '',
        description: ''
      },
      //控制修改用户对话框的显示与隐藏
      editRoleVisible: false,
      editForm: {}
    }
  },
  created() {
    this.queryAllRole()
  },
  methods: {
    //根据分页获取对应的会员列表
    async queryAllRole() {
      const {data: res} = await this.$http.get('/admin/core/role.action', {
        params: this.queryInfo
      })
      this.$message.success('获取角色列表成功!')
      this.RoleList = res.rows
      this.total = res.total
    },
    //监听pagesize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.queryAllRole()
    },
    //监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pageno = newPage
      this.queryAllRole()
    },
    //监听添加用户对话框的关闭事件
    addRoleClosed() {
      this.$refs.addFormRef.resetFields()
    },
    //点击按钮,添加角色
    addRole() {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) return
        //可以发起添加角色的网络请求
        const {date:res} = await this.$http.post('/admin/core/addRole.action', this.addForm)

        this.$message.success('添加角色成功')
        //隐藏添加角色的对话框
        this.addRoleVisible = false
        //重新获取角色列表数据
        await this.queryAllRole()
      })
    },
    //展示编辑角色的对话框
    async queryRole(id) {
      const {date: res} = await this.$http.get('/admin/core/queryrole.action/' + id)
      this.editForm = res
      this.editRoleVisible = true
    },
    //监听修改用户对话框的关闭事件
    editRoleClosed() {
      this.$refs.editFormRef.resetFields()
    },
    //修改用户信息并提交
    updateUser() {
      this.$refs.editFormRef.validate(async valid => {
        if (!valid) return
        //发起修改用户信息的数据请求
        const {date: res} = await this.$http.put(
            '/admin/core/updateRole.action', this.editForm)
        //关闭对话框
        this.editRoleVisible = false
        //刷新数据列表
        await this.queryAllRole()
        //提示修改成功
        this.$message.success('更新角色信息成功')
      })
    },
    //是否删除对话框
    async delRole(id) {
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
      const {date: res} = await this.$http.delete('/admin/core/delRole.action/${id}')

      this.$message.success('删除成功')
      await this.queryAllRole()
    }

  }
}
</script>
<style lang="less" scoped>

</style>

